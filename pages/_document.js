import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

class CustomDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<link
						rel="shortcut icon"
						href="images/favicon.ico"
						type="image/x-icon"
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

export default CustomDocument;
