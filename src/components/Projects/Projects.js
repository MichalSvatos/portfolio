import React from "react"
import "./_projects.scss"
import "./_projects--present.scss"
import "./_projects--past.scss"
import "./_projects--history.scss"
import Item from "../Projects/Item/Item";

export default function Projects({ projectsData }) {
	// console.log("projectsData-projects", projectsData);

	const timeperiod = projectsData[0]?.frontmatter.timeperiod ? projectsData[0].frontmatter.timeperiod : "present"

	return (
		<>
			{projectsData.length ?
				<section className={`section section--${timeperiod}`}>
					<h2>Projects - {timeperiod}</h2>
					{
						projectsData.map((project) => {
							return <Item projectData={project} timeperiod={timeperiod} key={project.id} />
						})
					}
				</section>
				:
				<section className="section section--empty">
					<p>
						Projects for this specific time period are lost in time ...
					</p>
				</section>
			}
		</>
	)
}
