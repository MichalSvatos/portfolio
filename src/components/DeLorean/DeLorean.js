import React, {useEffect} from "react"
import "./_delorean.scss"
import DeLoreanTimeVariant from "./DeLoreanTimeVariant";

export default function DeLorean({timePeriods}) {
	const {present, past, history} = timePeriods

	// Make clip slices same height as sections to make the time travel "seamless"
	const makePreciseSlices = () => {
		const sections = document.querySelectorAll(".time")
		const deloreanHolders = document.querySelectorAll(".delorean__holder")

		sections.forEach((section, index) => {
			let sectionHeight = section.offsetHeight

			deloreanHolders[index].setAttribute("style", "height: " + sectionHeight + "px")
		})
	}

	// Scroll direction checker
	// Thanks - https://codepen.io/lehollandaisvolant/pen/ryrrGx
	let scrollPos = 0

	window.addEventListener('scroll', () => {
		const deLoreanContainers = document.querySelectorAll(".delorean__container")
		const deLoreanLandingThreshold = document.querySelector(".time--present").offsetHeight - (window.innerHeight / 2)

		if ((document.body.getBoundingClientRect()).top > scrollPos) {
			// -- when you go BACK TO THE FUTURE!
			deLoreanContainers.forEach(delorean => {
				delorean.classList.add('is-going-back')
			})

			// -- “A flying DeLorean? I haven’t seen one of those in 30 years”
			if (window.scrollY < (deLoreanLandingThreshold + 350)) {
				document.querySelector(".delorean__container--past").classList.add("is-hovering")
			}

			if (window.scrollY < ((window.innerHeight / 2) + 10)) {
				document.querySelector(".delorean__container--present").classList.remove("started")
			}

		} else {
			// -- when you go back in time

			// -- turn Deloreans back to facing dowm
			deLoreanContainers.forEach(delorean => {
				delorean.classList.remove('is-going-back')
			})

			// -- fly the Delorean to the middle of the screen
			if (window.scrollY > 100) {
				document.querySelector(".delorean__container--present").classList.add("started", "is-hovering")
			}

			// -- after timetravel, land Delorean
			if (window.scrollY > deLoreanLandingThreshold) {
				document.querySelector(".delorean__container--past").classList.remove("is-hovering")
			}

		}

		scrollPos = (document.body.getBoundingClientRect()).top
	})

	useEffect(() => {
		makePreciseSlices()

		window.addEventListener("resize", function () {
			makePreciseSlices()
		});
	})

	return (
		<>
			<div className="deloreans">
				<DeLoreanTimeVariant timeperiod={present} />
				<DeLoreanTimeVariant timeperiod={past} customClass="is-hovering" />
				<DeLoreanTimeVariant timeperiod={history} />
			</div>
		</>
	)
}
