import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

class CustomDocument extends Document {
	render() {
		return (
			<html>
				<Head></Head>
				<body className="">
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

export default CustomDocument;
