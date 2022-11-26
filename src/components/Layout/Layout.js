import React from "react"
import "./_layout.scss"
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
	return (
		<>
			<noscript>
				<div className="no-js-notice">
					You are viewing basic version of the website. For full functionality it is necessary to enable JavaScript.<br/>
					Here are the <a href="https://www.enable-javascript.com/" target="_blank" rel="noopener noreferrer">instructions how to enable JavaScript in your browser</a>.
				</div>
			</noscript>
			<main id="main">{children}</main>
			<Footer />
		</>
	)
}
