import React, {useEffect} from "react"
import "./_time.scss"

export default function Time({ children, timePeriod = 'present', customClass = ''}) {

	// Time travel (collision detection)
	// Thanks Chris Courses - https://yewtu.be/watch?v=_MyPLZSGS3s
	const makeTimeTravelPossible = (deLoreanContainer) => {
		const deLoreanBottom = deLoreanContainer.getBoundingClientRect().bottom
		const deLoreanHeight = deLoreanContainer.getBoundingClientRect().height
		const deLoreans = document.querySelectorAll(".delorean__container")

		const middleSection = document.querySelector(".js-time-travel-checking")
		const middleSectionTop = middleSection.getBoundingClientRect().top
		const middleSectionBottom = middleSection.getBoundingClientRect().bottom


		// -- checking if DeLorean is time travelling
		if (
			((middleSectionTop < deLoreanBottom) && ((middleSectionTop + deLoreanHeight) > deLoreanBottom))
			||
			((middleSectionBottom < deLoreanBottom) && ((middleSectionBottom + deLoreanHeight) > deLoreanBottom))
		) {
			deLoreans.forEach(car => {
				car.classList.add("is-time-travelling")
			})

		} else {
			deLoreans.forEach(car => {
				car.classList.remove("is-time-travelling")
			})

		}

		// -- time travel event horizon
		if ((middleSectionTop < deLoreanBottom) && ((middleSectionTop + deLoreanHeight) > deLoreanBottom)) {
			middleSection.classList.add("has-event-horizon-on-top")

		} else {
			middleSection.classList.remove("has-event-horizon-on-top")

		}

		if ((middleSectionBottom < deLoreanBottom) && ((middleSectionBottom + deLoreanHeight) > deLoreanBottom)) {
			middleSection.classList.add("has-event-horizon-on-bottom")

		} else {
			middleSection.classList.remove("has-event-horizon-on-bottom")

		}
	}

	useEffect(() => {
		const deLoreanContainer = document.querySelector(".delorean__container--present")
		// console.log('deLoreanContainer', deLoreanContainer);

		window.addEventListener("scroll", () => {
			makeTimeTravelPossible(deLoreanContainer)
		});
	})

	return (
		<>
			<div className={`time time--${timePeriod} ${customClass}`}>
				{children}
			</div>
		</>
	)
}
