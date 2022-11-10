import React, {useEffect} from "react"
import "./_delorean.scss"

export default function DeLorean() {

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
				document.querySelector(".delorean__container-2").classList.add("is-hovering")
			}

			if (window.scrollY < ((window.innerHeight / 2) + 10 )) {
				document.querySelector(".delorean__container-1").classList.remove("started")
			}

		} else {
			// -- when you go back in time

			// -- turn Deloreans back to facing dowm
			deLoreanContainers.forEach(delorean => {
				delorean.classList.remove('is-going-back')
			})

			// -- fly the Delorean to the middle of the screen
			if (window.scrollY > 100) {
				document.querySelector(".delorean__container-1").classList.add("started", "is-hovering")
			}

			// -- after timetravel, land Delorean
			if (window.scrollY > deLoreanLandingThreshold) {
				document.querySelector(".delorean__container-2").classList.remove("is-hovering")
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
			{/* TODO: one "car" component */}
			<div className="deloreans">
				<div className="delorean__holder">
					<div className="delorean__mask">
						<div className="delorean__container delorean__container-1">
							<div className="delorean__car">DMC 1</div>
						</div>
					</div>
				</div>
				<div className="delorean__holder">
					<div className="delorean__mask">
						<div className="delorean__container delorean__container-2 is-hovering">
							<div className="delorean__car">DMC 2</div>
						</div>
					</div>
				</div>
				<div className="delorean__holder">
					<div className="delorean__mask">
						<div className="delorean__container delorean__container-3">
							<div className="delorean__car">DMC 3</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
