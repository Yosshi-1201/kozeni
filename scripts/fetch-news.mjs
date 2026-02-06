import Parser from 'rss-parser';
import fs from 'fs/promises';
import path from 'path';

// RSSパーサーの初期化
const parser = new Parser();

// ガジェット系ニュースサイトのRSSフィードURLリスト (テスト用)
const FEEDS = [
    { name: 'Gizmodo Japan', url: 'https://www.gizmodo.jp/index.xml' },
    { name: 'Lifehacker Japan', url: 'https://www.lifehacker.jp/feed/index.xml' },
];

async function fetchNews() {
    console.log("ニュースの取得を開始します...");

    // 現在の作業ディレクトリを表示（デバッグ用）
    console.log("Working Directory:", process.cwd());

    const allNews = [];

    for (const feedInfo of FEEDS) {
        try {
            console.log(`\n--- ${feedInfo.name} から取得中 ---`);
            const feed = await parser.parseURL(feedInfo.url);

            // 最新5件を取得して配列に追加
            feed.items.slice(0, 5).forEach((item) => {
                allNews.push({
                    title: item.title,
                    url: item.link,
                    date: item.pubDate,
                    source: feedInfo.name,
                });
            });

        } catch (error) {
            console.error(`エラー: ${feedInfo.name} の取得に失敗しました。`, error.message);
        }
    }

    try {
        // JSONファイルとして保存
        const outputPath = path.join(process.cwd(), 'src', 'data', 'news.json');

        // ディレクトリの存在確認（念のため）
        const dirPath = path.dirname(outputPath);
        await fs.mkdir(dirPath, { recursive: true });

        await fs.writeFile(outputPath, JSON.stringify(allNews, null, 2));
        console.log(`\nニュースデータを保存しました: ${outputPath}`);
    } catch (err) {
        console.error("ファイル保存エラー:", err);
    }
}

fetchNews();
