import React from "react"
import Layout from "../components/Layout/Layout"

export default function page404() {
	return (
		<Layout>
			<h1>404</h1>
			<p>This page was erased ... <strong>from existence</strong>!"</p>
			<img src={'/404.jpg'} alt="temp" />
		</Layout>
	)
}
