import React from "react"
import "./_page404.scss"
import Image404 from "./images/404.jpg"
import Sound404 from "../../../static/page404.mp3"
import Achievements from "../Achievements/Achievements"
import { toggleEgg } from "../Achievements/ToggleEgg"

export default function Page404() {
	const playSound = () => {
		const audio = new Audio(Sound404)
		audio.play()
		toggleEgg('egg4')
	}

	return (
		<>
			<Achievements />
			<div className="page404">
				<h1 className="page404__title">404</h1>
				<button onClick={playSound} className="page404__sound">
					<img src={Image404} className="" alt="" title="Pretty mediocre photographic fakery. They cut off your brother's hair!" />
				</button>
				<p className="page404__text">This page was erased ... <strong>from existence</strong>!</p>
				{/* TODO: [NTH] Button component in case more buttons needed */}
				<a href="/" title="Back to homepage" className="page404__btn">You must go back!</a>
			</div>
		</>
	)
}
