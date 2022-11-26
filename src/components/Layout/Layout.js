import React from "react"
import "./_layout.scss"
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
	return (
		<>
			<main id="main">{children}</main>
			<Footer />
		</>
	)
}
