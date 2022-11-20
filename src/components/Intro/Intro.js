import React, {useEffect} from "react"
import "./_intro.scss"
import {graphql, useStaticQuery} from "gatsby"
import IconGithub from "./images/github.inline.svg"
import IconLinkedIn from "./images/linkedin.inline.svg"
import IconMail from "./images/mail.inline.svg"

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

	const introStickinessHandler = (intro) => {
		let introHeight = intro.offsetHeight

		intro.classList.toggle("is-fixed", window.scrollY > introHeight);
	}


	useEffect(() => {
		const intro = document.querySelector('.intro');

		window.addEventListener('scroll', () => {
			introStickinessHandler(intro)
		})
	})

	return (
		<>
			<div className="intro">
				<div className="intro__inner">
					<h1 className="intro__title fade-me-in"><span className="hide-me-on-mobile">{name}</span></h1>
					<h2 className="intro__subtitle fade-me-in">{description}</h2>
					{/*<p>made in czech republic, recently exported to canada</p>*/}
					<ul className="intro__links fade-me-in">
						<li>
							<a href="https://github.com/MichalSvatos" target="_blank" rel="noopener noreferrer" className="intro__link">
								<IconGithub/>
								<span className="hide-me">Check my Github</span>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/michalsvatos" target="_blank" rel="noopener noreferrer" className="intro__link">
								<IconLinkedIn/>
								<span className="hide-me">I am on LinkedIn</span>
							</a>
						</li>
						<li>
							<a href="/" className="intro__link">
								<IconMail/>
								<span className="hide-me">Send me an email</span>
							</a>
						</li>
					</ul>
					{/*<p className="intro__hashtags fade-me-in">#frontend #design #privacy</p>*/}
				</div>
			</div>
		</>
	)
}
