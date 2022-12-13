import React from "react"
import "./_skills.scss"
import Item from "./Item/Item"
import IconAdobe from "./images/ico-adobe.svg"
import IconAffinity from "./images/ico-affinity.svg"
import IconFigma from "./images/ico-figma.svg"
import IconGit from "./images/ico-git.svg"
import IconPhpStorm from "./images/ico-phpstorm.svg"

export default function Skills() {
	const softwareUsed = [
		{
			"name": "Adobe",
			"icon": IconAdobe
		},
		{
			"name": "PHPStorm",
			"icon": IconPhpStorm
		},
		{
			"name": "Affinity",
			"icon": IconAffinity
		},
		{
			"name": "Figma",
			"icon": IconFigma
		},
		{
			"name": "Git",
			"icon": IconGit
		},
	]

	const skills = ["HTML/CSS", "LESS/SASS", "Twig", "JavaScript", "Git", "Gulp", "RWD", "UX/UI", "PHP", "WordPress", "GatsbyJS"]

	return (
		<>
			<div className="skills">
				<ul className="skills__software">
					{
						softwareUsed.map(software => {
							return <Item data={software} key={software.name} />
						})
					}
				</ul>

				<div className="skills__hashtags">
					<ul className="skills__hashtags-list">
						{
							skills.map(skill => {
								return <li key={skill}>#{skill}</li>
							})
						}
					</ul>
				</div>
			</div>
		</>
	)
}
