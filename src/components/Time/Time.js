import React, {useEffect} from "react"
import "./_time.scss"
import "./_time--present.scss"

export default function Time({children, timePeriod = 'present', customClass = ''}) {

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

	// Primitive parallax effect for the clouds
	const parallax = (parallaxElements, sectionPresentHeight) => {
		// -- float animation just for the bigger screens
		if (window.innerWidth < 992) return

		if ('undefined' !== parallaxElements && parallaxElements.length > 0) {
			parallaxElements.forEach(float => {
				let threshold = sectionPresentHeight.offsetHeight
				let speedYBase = parseFloat(float.dataset.parallaxSpeedY)
				let speedXBase = parseFloat(float.dataset.parallaxSpeedX)
				let scrollY = window.scrollY

				if ((scrollY > 0) && (scrollY < (threshold + (window.innerHeight / 2)))) {
					let speedY = (speedYBase / 10) * scrollY
					let speedX = (speedXBase / 10) * scrollY

					float.style.transform = `translate3d(${speedX}px, ${speedY}px ,0)`

					if (float.classList.contains("fade-out")) {
						float.classList.remove("fade-out")
					}

				} else if (scrollY > (threshold + (window.innerHeight / 2))) {
					float.classList.add("fade-out")
				}
			})
		}
	}

	useEffect(() => {
		const deLoreanContainer = document.querySelector(".delorean__container--present")
		const sectionPresentHeight = document.querySelector(".section--present")

		const parallaxElements = document.querySelectorAll('.make-me-parallax')
		parallax(parallaxElements, sectionPresentHeight)

		window.addEventListener("scroll", () => {
			makeTimeTravelPossible(deLoreanContainer)
			parallax(parallaxElements, sectionPresentHeight)
		})

		// TODO: [NTH] - rain js
		/*const makeItRain = function() {
			//clear out everything
			document.querySelector(".rain").innerHTML = ""

			let increment = 0;
			let drops = "";
			let backDrops = "";

			while (increment < 100) {
				//couple random numbers to use for various randomizations
				//random number between 98 and 1
				let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
				//random number between 5 and 2
				let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
				//increment
				increment += randoFiver;
				//add in a new raindrop with various randomizations to certain CSS properties
				drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.6' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.6' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.6' + randoHundo + 's;"></div></div>';
				backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.6' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.6' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.6' + randoHundo + 's;"></div></div>';
			}

			document.querySelector(".rain.front-row").innerHTML = drops;
			document.querySelector(".rain.back-row").innerHTML = backDrops;
		}

		makeItRain();
		*/
	})

	return (
		<>
			<div className={`time time--${timePeriod} ${customClass}`}>
				{timePeriod === "present" ?
					<>
						<div className="rain front-row"></div>
						<div className="rain back-row"></div>
						<div className="floats">
							{children}
							{/* Clouds */}
							<div className="float float--cloud make-me-parallax" data-parallax-speed-y="-2" data-parallax-speed-x="-0.15"></div>
							<div className="float float--cloud-2 make-me-parallax" data-parallax-speed-y="-3" data-parallax-speed-x="0.15"></div>
							<div className="float float--cloud-3 make-me-parallax" data-parallax-speed-y="-1" data-parallax-speed-x="0"></div>
							<div className="float float--cloud-4 make-me-parallax" data-parallax-speed-y="-2" data-parallax-speed-x="-0.15"></div>
							<div className="float float--bottom"></div>

							{/* Buoys */}
							<div className="float-wrapper float-wrapper--buoys">
								<div className="float float--buoy make-me-parallax" data-parallax-speed-y="-3.25" data-parallax-speed-x="0.5"></div>
								<div className="float float--buoy-2 make-me-parallax" data-parallax-speed-y="-2" data-parallax-speed-x="0.2"></div>
								<div className="float float--buoy-3 make-me-parallax" data-parallax-speed-y="-1.5" data-parallax-speed-x="0"></div>
								<div className="float float--buoy-4 make-me-parallax" data-parallax-speed-y="-0.95" data-parallax-speed-x="0"></div>
								<div className="float float--buoy-5 make-me-parallax" data-parallax-speed-y="-0.65" data-parallax-speed-x="-0.05"></div>
								<div className="float float--buoy-6 make-me-parallax" data-parallax-speed-y="-0.5" data-parallax-speed-x="-0.02"></div>
							</div>
						</div>
					</>
					:
					<>
						{children}
					</>
				}
			</div>
		</>
	)
}
