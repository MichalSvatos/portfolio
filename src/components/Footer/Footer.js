import React from "react"
import "./_footer.scss"
import Software from "../Software/Software"
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

	console.log('siteData', siteData);

	return (
		<>
			<footer>
				<div className="footer__title">Why?</div>
				<div className="footer__text">
					<p>Ah, where're my pants? You guys, take him in back and I'll be right there. Well c'mon, this ain't no peep show. That's right, he's gonna be mayor. Silence Earthling. my name is
						Darth Vader. I'm am an extra-terrestrial from the planet Vulcan. I think you got the wrong car, McFly.</p>
				</div>

				<Software />

				<p className="footer__copy">
					&copy; {currentYear}, Made with (flux) by {siteData.site.siteMetadata.name}
				</p>
			</footer>
		</>
	)
}
