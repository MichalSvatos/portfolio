import React, {useEffect, useRef, useState, useMemo} from "react"
import "./_time.scss"
import "./_time--present.scss"
import "./_time--past.scss"
import "./_time--history.scss"

export default function Time({children, timePeriod = 'present', customClass = ''}) {

	// Time travel (collision detection)
	// Thanks Chris Courses - https://yewtu.be/watch?v=_MyPLZSGS3s
	const makeTimeTravelPossible = (deLoreanContainer) => {
		const deLoreanBottom = deLoreanContainer.getBoundingClientRect().bottom
		const deLoreanHeight = deLoreanContainer.getBoundingClientRect().height
		const deLoreans = document.querySelectorAll(".delorean__container")

		// TODO: Ugly ... unconceptual
		const fireTrails = document.querySelectorAll(".firetrails-wrapper")

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

			fireTrails.forEach(fireTrail => {
				fireTrail.classList.add("is-time-travelling")
			})

		} else {
			deLoreans.forEach(car => {
				car.classList.remove("is-time-travelling")
			})

			fireTrails.forEach(fireTrail => {
				fireTrail.classList.remove("is-time-travelling")
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
					let speedY = Math.floor((speedYBase / 10) * scrollY)
					let speedX = Math.floor((speedXBase / 10) * scrollY)

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

	// --- observer
	const [isIntersecting, setIntersecting] = useState(false)
	const timePeriodRef = useRef()
	const observerOptions = useMemo(() => {
		return {
			root: null,
			rootMargin: "150px 0px",
		}
	}, [])

	useEffect(() => {
		const deLoreanContainer = document.querySelector(".delorean__container--present")
		const sectionPresentHeight = document.querySelector(".section--present")

		const parallaxElements = document.querySelectorAll('.make-me-parallax')
		parallax(parallaxElements, sectionPresentHeight)

		window.addEventListener("scroll", () => {
			makeTimeTravelPossible(deLoreanContainer)
			parallax(parallaxElements, sectionPresentHeight)
		})

		const observerTimeperiod = new IntersectionObserver(
			([entry]) => setIntersecting(entry.isIntersecting),
			observerOptions
		)

		observerTimeperiod.observe(timePeriodRef.current);

		// --- remove the observer when the component is unmounted
		return () => {
			observerTimeperiod.disconnect();
		}

	}, [observerOptions])

	return (
		<>
			<div ref={timePeriodRef} className={isIntersecting ? `time time--${timePeriod} ${customClass} load-me` : `time time--${timePeriod} ${customClass}`}>
				{timePeriod === "present" ?
					<>
						<div className="floats">
							{/* Buoys */}
							<div className="float-wrapper float-wrapper--buoys">
								<div className="float float--buoy make-me-parallax" data-parallax-speed-y="-3.25" data-parallax-speed-x="0.5"></div>
								<div className="float float--buoy-2 make-me-parallax" data-parallax-speed-y="-2" data-parallax-speed-x="0.2"></div>
								<div className="float float--buoy-3 make-me-parallax" data-parallax-speed-y="-1.5" data-parallax-speed-x="0"></div>
								<div className="float float--buoy-4 make-me-parallax" data-parallax-speed-y="-0.95" data-parallax-speed-x="0"></div>
								<div className="float float--buoy-5 make-me-parallax" data-parallax-speed-y="-0.65" data-parallax-speed-x="-0.05"></div>
								<div className="float float--buoy-6 make-me-parallax" data-parallax-speed-y="-0.5" data-parallax-speed-x="-0.02"></div>
							</div>

							{/* Clouds */}
							<div className="float float--cloud make-me-parallax" data-parallax-speed-y="-2" data-parallax-speed-x="-0.15"></div>
							<div className="float float--cloud-2 make-me-parallax" data-parallax-speed-y="-3" data-parallax-speed-x="0.15"></div>
							<div className="float float--cloud-3 make-me-parallax" data-parallax-speed-y="-1" data-parallax-speed-x="0"></div>
							<div className="float float--cloud-4 make-me-parallax" data-parallax-speed-y="-2" data-parallax-speed-x="-0.15"></div>
							<div className="float float--bottom"></div>

							{children}
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
