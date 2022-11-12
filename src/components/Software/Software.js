import React from "react"
import "./_software.scss"
import Item from "./Item/Item"

export default function Software() {
	const softwareData = [
		{
			"name": "Signal",
			"url": "http://startpage.com",
			"icon": ""
		},
		{
			"name": "ProtonMail",
			"url": "http://startpage.com",
			"icon": ""
		},
		{
			"name": "Mullvad",
			"url": "http://startpage.com",
			"icon": ""
		},
		{
			"name": "Session",
			"url": "http://startpage.com",
			"icon": ""
		},
		{
			"name": "SimpleLogin",
			"url": "http://startpage.com",
			"icon": ""
		},
	]

	return (
		<>
			<div className="footer__title">Why?</div>
			<div className="footer__text">
				<p>Ah, where're my pants? You guys, take him in back and I'll be right there. Well c'mon, this ain't no peep show. That's right, he's gonna be mayor. Silence Earthling. my name is
					Darth Vader. I'm am an extra-terrestrial from the planet Vulcan. I think you got the wrong car, McFly.</p>
			</div>
			<ul className="software">
				{
					softwareData.map(software => {
						return <Item data={software} key={software.name} />
					})
				}
			</ul>
		</>
	)
}
