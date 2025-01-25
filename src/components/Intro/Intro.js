import React, {useEffect, useState} from "react"
import "./_intro.scss"
import {graphql, useStaticQuery} from "gatsby"
import IconGithub from "./images/github.inline.svg"
import IconLinkedIn from "./images/linkedin.inline.svg"
import IconMail from "./images/mail.inline.svg"
import IconBehance from "./images/behance.inline.svg"
import Arrow from "./images/arrow.inline.svg"
import EeBttfLogoTop from "./images/ee-bttf-logo--top.inline.svg"
import EeBttfLogoMid from "./images/ee-bttf-logo--mid.inline.svg"
import EeBttfLogoBtm from "./images/ee-bttf-logo--btm.inline.svg"

export default function Intro() {
	const introData = useStaticQuery(graphql`
		query IntroInfo {
		  site {
		    siteMetadata {
		      name
		      description
		      contact {
		        github
		        email
		        linkedIn
		        behance
		      }
		    }
		  }
		}
	`)

	const {name, description, contact} = introData.site.siteMetadata
	const {github, email, linkedIn, behance} = contact

	const [state, setState] = useState({
		visibility: false
	})

	const introStickinessHandler = (intro) => {
		let introHeight = intro.offsetHeight

		intro.classList.toggle("is-fixed", window.scrollY > introHeight);
	}

	const toggleEmailVisibility = () => {
		setState({
			...state,
			visibility: !state.visibility
		})
	}

	const emailClick = (e) => {
		e.preventDefault()

		// -- email is visible
		if (state.visibility) {
			toggleEmailVisibility()
			return
		}

		// -- email is hidden
		const emailProtector = document.querySelector(".intro__email-protector")

		if (emailProtector.querySelector("a")) {
			toggleEmailVisibility()
			return;
		}

		const emailUrl = `mailto:${email}?subject=%5BWEBSITE%5D`
		const emailLink = document.createElement("a")

		emailLink.setAttribute("href", emailUrl)
		emailLink.innerHTML = email
		emailProtector.appendChild(emailLink)

		toggleEmailVisibility()
	}

	const arrowScroll = (arrow, intro) => {
		const introHeight = intro.offsetHeight

		arrow.addEventListener("click", (e) => {
			e.preventDefault()
			window.scroll(0, introHeight)
		})
	}

	const [count, setCount] = useState(0)
	const [hidden, setHidden] = useState(false)
	const [shaking, setShaking] = useState(false)
	const eeClickThreshold = 3

	const clickCount = () => {
		setCount((count) => count + 1)
	}

	const hideMe = () => {
		if (count > eeClickThreshold) {
			setHidden(!hidden)
		}
	}

	const toggleShake = () => {
		setShaking(!shaking)
	}

	useEffect(() => {
		const intro = document.querySelector('.intro');

		window.addEventListener('scroll', () => {
			introStickinessHandler(intro)
		})

		const arrow = document.querySelector('.intro__arrow')
		arrowScroll(arrow, intro)
	})

	return (
		<>
			<div className="intro">
				<div className="intro__inner">
					{count > eeClickThreshold && hidden &&
						<div className="intro__ee">
							<EeBttfLogoTop />
							<EeBttfLogoMid />
							<EeBttfLogoBtm />
						</div>
					}

					{!hidden &&
						<div className={count > eeClickThreshold ? 'fade-me-out' : ''} onAnimationEnd={hideMe}>
							<h1 className={`intro__title`} onClick={clickCount} data-text={name} role="button">
								<span className={shaking ? `shake-me` : ``} onClick={toggleShake} role="button" onAnimationEnd={toggleShake}>{name}</span>
							</h1>
							<h2 className="intro__subtitle">{description}</h2>
						</div>
					}

					<ul className="intro__links">
						{github &&
							<li>
								<a href={github} target="_blank" rel="noopener noreferrer" className="intro__link">
									<IconGithub />
									<span className="hide-me">Check my Github</span>
								</a>
							</li>
						}
						{linkedIn &&
							<li>
								<a href={linkedIn} target="_blank" rel="noopener noreferrer" className="intro__link">
									<IconLinkedIn />
									<span className="hide-me">I am on LinkedIn</span>
								</a>
							</li>
						}
						{behance &&
							<li>
								<a href={behance} target="_blank" rel="noopener noreferrer" className="intro__link">
									<IconBehance />
									<span className="hide-me">Some of my work on Behance</span>
								</a>
							</li>
						}
						{email &&
							<li>
								<a href="/" className="intro__link intro__link--email" onClick={emailClick}>
									<IconMail />
									<span className="hide-me">Send me an email</span>
								</a>
							</li>
						}
						<li className={state.visibility ? "intro__email-protector js-show-email" : "intro__email-protector"}></li>

					</ul>
					{/*<p className="intro__hashtags fade-me-in">#frontend #design #privacy</p>*/}
					{/*	Currently living in Toronto, Canada.*/}
				</div>
				<a href="/" className="intro__arrow" title="Go back in time!">
					<Arrow />
				</a>
			</div>
		</>
	)
}
