import React, {useEffect} from "react"
import "./_delorean.scss"
import DeLoreanTimeVariant from "./DeLoreanTimeVariant";

export default function DeLorean({timePeriods}) {
	const {present, past, history} = timePeriods
	const deLoreanVisibilityThreshold = 767

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
		if (window.innerWidth > deLoreanVisibilityThreshold) {

			const body = document.body
			const deLoreanContainers = document.querySelectorAll(".delorean__container")
			const deLoreanLandingThreshold = document.querySelector(".time--present").offsetHeight - (window.innerHeight / 2)
			const deLoreanContainerPresent = document.querySelector(".delorean__container--present")
			const deLoreanContainerPast = document.querySelector(".delorean__container--past")
			const deLoreanContainerHistory = document.querySelector(".delorean__container--history")

			if ((body.getBoundingClientRect()).top > scrollPos) {
				// -- when you go BACK TO THE FUTURE!
				deLoreanContainers.forEach(delorean => {
					delorean.classList.add('is-going-back')
					deLoreanContainerHistory.classList.remove("is-hiding")
				})

				// -- “A flying DeLorean? I haven’t seen one of those in 30 years”
				if (window.scrollY < (deLoreanLandingThreshold + 350)) {
					deLoreanContainerPast.classList.add("is-hovering")
				}

				if (window.scrollY < ((window.innerHeight / 2) + 10)) {
					deLoreanContainerPresent.classList.remove("started")
				}


			} else {
				// -- when you go back in time

				// -- turn Deloreans back to facing dowm
				deLoreanContainers.forEach(delorean => {
					delorean.classList.remove('is-going-back')
				})

				// -- fly the Delorean to the middle of the screen
				if (window.scrollY > 100) {
					deLoreanContainerPresent.classList.add("started", "is-hovering")
				}

				// -- after timetravel, land Delorean
				if (window.scrollY > deLoreanLandingThreshold) {
					deLoreanContainerPast.classList.remove("is-hovering")
				}

				// -- hide Delorean in the cave
				if (window.scrollY > ((body.offsetHeight - window.innerHeight) - 100)) {
					deLoreanContainerHistory.classList.add("is-hiding")
				}

			}

			scrollPos = (document.body.getBoundingClientRect()).top
		}
	})

	useEffect(() => {
		if (window.innerWidth > deLoreanVisibilityThreshold) {
			makePreciseSlices()
		}

		window.addEventListener("resize", function () {
			if (window.innerWidth > deLoreanVisibilityThreshold) {
				makePreciseSlices()
			}
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
