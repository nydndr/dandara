import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						rel="preload"
						href="/fonts/FivoSansModern-Bold.otf"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/Manrope-VariableFont_wght.ttf"
						as="font"
						crossOrigin=""
					/>
					<link
						rel="shortcut icon"
						href="/static/favicon.ico"
						type="image/x-icon"
					/>
					<link
						rel="icon"
						href="/static/favicon.ico"
						type="image/x-icon"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
