import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocuments extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                    <meta name="description" content="Desafio CloudOpss" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}