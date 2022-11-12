import React from "react"
import "./_intro.scss"
import {graphql, useStaticQuery} from "gatsby"

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

	return (
		<>
			<div className="intro">
				<div className="intro__inner">
					<h1 className="intro__title">{name}</h1>
					<h2 className="intro__subtitle">{description}</h2>
					{/*<p>made in czech republic, recently exported to canada</p>*/}
					<ul className="intro__links">
						<li>
							<a href="https://github.com/MichalSvatos" target="_blank" rel="noopener noreferrer" className="intro__link">
								<span className="hide-me">Check my Github</span>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/michalsvatos" target="_blank" rel="noopener noreferrer" className="intro__link">
								<span className="hide-me">I am on LinkedIn</span>
							</a>
						</li>
						<li>
							<a href="/" className="intro__link">
								<span className="hide-me">Send me an email</span>
							</a>
						</li>
					</ul>
					<p className="intro__hashtags">#frontend #design #privacy</p>
				</div>
			</div>
		</>
	)
}
