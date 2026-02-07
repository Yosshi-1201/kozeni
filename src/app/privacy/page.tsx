import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-6 md:p-12">
            <div className="max-w-3xl mx-auto bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h1 className="text-2xl font-bold mb-6 text-cyan-400">プライバシーポリシー</h1>

                <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
                    <section>
                        <h2 className="text-lg font-semibold text-slate-100 mb-2">1. 個人情報の利用目的</h2>
                        <p>
                            当サイトでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
                            取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-slate-100 mb-2">2. 広告について</h2>
                        <p>
                            当サイトでは、第三者配信の広告サービス（Googleアドセンス、A8.net、Amazonアソシエイト等）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。
                            クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
                        </p>
                        <p className="mt-2">
                            Cookieを無効にする方法やGoogleアドセンスに関する詳細は<a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">こちら</a>をご確認ください。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-slate-100 mb-2">3. Amazonアソシエイト・プログラムについて</h2>
                        <p>
                            当サイト（Kozeni Gadget）は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-slate-100 mb-2">4. アクセス解析ツールについて</h2>
                        <p>
                            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-slate-100 mb-2">5. 免責事項</h2>
                        <p>
                            当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
                            また当サイトのコンテンツ・情報について、できる限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                        </p>
                    </section>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                    <Link href="/" className="text-cyan-500 hover:text-cyan-400 hover:underline">
                        ホームに戻る
                    </Link>
                </div>
            </div>
        </div>
    );
}
