import React from "react"
import "./_layout.scss"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main className="just-typo">{children}</main>
			<Footer />
		</>
	)
}
