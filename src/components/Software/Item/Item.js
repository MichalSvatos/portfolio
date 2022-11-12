import React from "react"
import "./_item.scss"

export default function Item(data) {
	// TODO: Why again array in array?
	const {url, name, icon} = data.data

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
