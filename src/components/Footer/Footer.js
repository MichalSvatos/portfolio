import React from "react"
import "./_footer.scss"
import {graphql, useStaticQuery} from "gatsby"

export default function Footer() {
	const date = new Date()
	let currentYear = date.getFullYear()

	const siteData = useStaticQuery(graphql `
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

	return (
		<>
			<footer>
				<p className="footer__copy">
					&copy; {currentYear}, Made with (flux) and <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a> by {siteData.site.siteMetadata.name}. No cookies, no tracking!
				</p>
			</footer>
		</>
	)
}
