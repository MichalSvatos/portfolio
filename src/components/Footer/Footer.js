import React from "react"
import "./_footer.scss"
import {graphql, useStaticQuery} from "gatsby"
import useEggStore from "../Achievements/ToggleEgg";

export default function Footer() {
	const date = new Date()
	let currentYear = date.getFullYear()
	const { setEggToTrue } = useEggStore()

	const siteData = useStaticQuery(graphql`
	query SiteInfo {
	  site {
	    siteMetadata {
	      name
	      contact {
	        email
	        github
	        linkedIn
	      }
	    }
	  }
	}
	`)

	const softwareRecommended = [
		{
			"name": "Signal",
			"url": "https://signal.org",
			"title": "End-to-end encrypted private messanger"
		},
		{
			"name": "Proton",
			"url": "https://proton.me",
			"title": "Proton (mail, vpn, drive, calendar) — Privacy by default"
		},
		{
			"name": "Mullvad",
			"url": "https://mullvad.net/en/",
			"title": "Mullvad VPN - Privacy is a universal right"
		},
		{
			"name": "Brave",
			"url": "https://brave.com",
			"title": "Browse privately. Search privately. And ditch Big Tech."
		},
		{
			"name": "SimpleLogin",
			"url": "https://simplelogin.io/",
			"title": "SimpleLogin | Open source anonymous email service"
		},
		{
			"name": "Joplin",
			"url": "https://joplinapp.org/",
			"title": "Open source end-to-end encrypted note-taking app."
		},
	]

	return (
		<>
			<footer>
				<p className="footer__copy">
					&copy; {currentYear}, Made
					with <span className="footer__flux" title="Flux capacitor" onClick={() => setEggToTrue('egg4')}></span> and <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a> by {siteData.site.siteMetadata.name}. <strong>Privacy respecting - no cookies, no tracking!</strong>
				</p>
				<div className="footer__sw">
					<p>Speaking of privacy. Few apps I use and recommend.</p>
					<ul className="footer__sw-list">
						{
							softwareRecommended.map(software => {
								const nameLowerCase = software.name.toLowerCase()

								return (
									<li key={nameLowerCase}>
										<a href={software.url} className="footer__sw-link" target="_blank" rel="noopener noreferrer" title={software.title}>
											<img src={`/icons/ico-${nameLowerCase}.svg`} className="footer__icon" alt="icon" />
											{software.name}
										</a>
									</li>
								)
							})
						}
					</ul>
				</div>
			</footer>
		</>
	)
}
