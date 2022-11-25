import React from "react"
import "./_page404.scss"

export default function Page404() {
	return (
		<>
			<div className="page404">
				<h1 className="page404__title">404</h1>
				<p>This page was erased ... <strong>from existence</strong>!</p>
				<img src={'./images/404.jpg'} alt="" />
				{/* TODO: [NTH] Button component in case more buttons needed */}
				<a href="/" title="Back to homepage" className="page404__btn">You must go back!</a>
			</div>
		</>
	)
}
