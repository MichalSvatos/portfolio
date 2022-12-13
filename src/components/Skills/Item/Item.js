import React from "react"
import "./_item.scss"

export default function Item({data}) {
	const {name, icon} = data

	return (
		<>
			{data &&
				<li className="skills__item">
					<span className="skills__icon">
						<img src={icon} alt={name} />
					</span>
					<span className="skills__name">{name}</span>
				</li>
			}
		</>
	)
}
