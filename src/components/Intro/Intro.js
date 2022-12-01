import React, {useEffect} from "react"
import "./_intro.scss"
import {graphql, useStaticQuery} from "gatsby"
import IconGithub from "./images/github.inline.svg"
import IconLinkedIn from "./images/linkedin.inline.svg"
import IconMail from "./images/mail.inline.svg"
import Arrow from "./images/arrow.inline.svg"

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
		      }
		    }
		  }
		}
	`)

	const {name, description, contact} = introData.site.siteMetadata
	const {github, email, linkedIn} = contact

	const introStickinessHandler = (intro) => {
		let introHeight = intro.offsetHeight

		intro.classList.toggle("is-fixed", window.scrollY > introHeight);
	}

	const emailProtector = (emailAddress) => {
		const emailButton = document.querySelector(".intro__link--email")
		if (!emailButton) return

		emailButton.addEventListener("click", (e) => {
			e.preventDefault()
			const emailProtector = document.querySelector(".intro__email-protector")

			emailProtector.innerHTML = `<a href="mailto:${email}?subject=%5BWEBSITE%5D">${email}</a>`
			emailProtector.classList.contains("js-show-email") ? emailProtector.classList.remove("js-show-email") : emailProtector.classList.add("js-show-email")
		})
	}

	const arrowScroll = (arrow, intro) => {
		const introHeight = intro.offsetHeight

		arrow.addEventListener("click", (e) => {
			e.preventDefault()
			window.scroll(0, introHeight)
		})
	}

	useEffect(() => {
		const intro = document.querySelector('.intro');

		window.addEventListener('scroll', () => {
			introStickinessHandler(intro)
		})

		const arrow = document.querySelector('.intro__arrow')
		arrowScroll(arrow, intro)

		emailProtector(email)
	})

	return (
		<>
			<div className="intro">
				<div className="intro__inner">
					<h1 className="intro__title fade-me-in"><span>{name}</span></h1>
					<h2 className="intro__subtitle fade-me-in">{description}</h2>
					<ul className="intro__links fade-me-in">
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
						{email &&
							<li>
								<a href="/" className="intro__link intro__link--email">
									<IconMail />
									<span className="hide-me">Send me an email</span>
								</a>
							</li>
						}
						<li className="intro__email-protector"></li>

					</ul>
					{/*<p className="intro__hashtags fade-me-in">#frontend #design #privacy</p>*/}
					{/*	Currently living in Toronto, Canada.*/}
				</div>
				<a href="/" className="intro__arrow" title="Go back in time!">
					<Arrow/>
				</a>
			</div>
		</>
	)
}
