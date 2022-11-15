import React, {useEffect} from "react"
import "./_projects.scss"
import "./_projects--present.scss"
import "./_projects--past.scss"
import "./_projects--history.scss"
import Item from "../Projects/Item/Item";

export default function Projects({projectsData}) {
	// console.log("projectsData-projects", projectsData);

	const timeperiod = projectsData[0]?.frontmatter.timeperiod ? projectsData[0].frontmatter.timeperiod : "present"

	useEffect(() => {
		let observer;
		const benefits = document.querySelectorAll('.project-item');

		observer = new IntersectionObserver((projects) => {
			projects.forEach(project => {
				if (project.intersectionRatio > 0) {
					project.target.classList.add('show-me');
				}
			});
		});

		benefits.forEach(project => {
			observer.observe(project);
		});
	})

	return (
		<>
			{projectsData.length ?
				<section className={`section section--${timeperiod}`}>
					<div className={`section__objects objects objects--${timeperiod}`}>

						{timeperiod === "past" &&
							<>
								<div className="object__road"></div>
							</>
						}

						{timeperiod === "history" &&
							<>
								<div className="object__rails"></div>
								<div className="object__bush"></div>
								<div className="object__bush-2"></div>
							</>
						}
					</div>
					<div className={`projects projects--${timeperiod}`}>
						{
							projectsData.map((project) => {
								return <Item projectData={project} timeperiod={timeperiod} key={project.id} />
							})
						}
					</div>
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
