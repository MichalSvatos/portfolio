import React from "react"
import "./_item.scss"

export default function Item({data}) {
	const {url, name, icon} = data

	return (
		<>
			{data &&
				<li>
					<a href={url} className="software__link" target="_blank" rel="noopener noreferrer">
						<span className="software__icon">{icon}</span>
						<span className="software__name">{name}</span>
					</a>
				</li>
			}
		</>
	)
}
