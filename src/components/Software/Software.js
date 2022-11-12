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
			"name": "Joplin?",
			"url": "http://startpage.com",
			"icon": ""
		},
	]

	//console.log('softwareData', softwareData);

	return (
		<ul className="software">
			{
				softwareData.map(software => {
					return <Item data={software} key={software.name} />
				})
			}
		</ul>
	)
}
