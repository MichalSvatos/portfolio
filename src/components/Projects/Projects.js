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
		// TODO: DRY
		let observerTimeperiod;
		let observerProject;
		const projects = document.querySelectorAll('.project-item');
		const timeperiods = document.querySelectorAll('.time');

		observerProject = new IntersectionObserver((projects) => {
			projects.forEach(project => {
				if (project.intersectionRatio > 0) {
					project.target.classList.add('show-me');
				}
			});
		});

		observerTimeperiod = new IntersectionObserver((timeperiods) => {
			timeperiods.forEach(timeperiod => {
				if (timeperiod.intersectionRatio > 0) {
					timeperiod.target.classList.add('load-me');
				}
			});
		});

		projects.forEach(project => {
			observerProject.observe(project);
		});

		timeperiods.forEach(timeperiod => {
			observerTimeperiod.observe(timeperiod);
		});
	})

	return (
		<>
			{projectsData.length ?
				<section className={`section section--${timeperiod}`}>
					<div className={`section__objects objects objects--${timeperiod}`}>

						{timeperiod === "past" &&
							<>
								<div className="object__road object__sprite object__sprite--past"></div>
								<div className="object__parking1 object__sprite object__sprite--past"></div>
								<div className="object__parking2 object__sprite object__sprite--past"></div>
								<div className="object__parking3 object__sprite object__sprite--past"></div>
								<div className="object__van"></div>
							</>
						}

						{timeperiod === "history" &&
							<>
								<div className="object__rails"></div>
								<div className="object__cave"></div>
								<div className="object__cliff"></div>
								<div className="object__campfire object__sprite object__sprite--history"></div>
								<div className="object__plants object__sprite object__sprite--history"></div>
								<div className="object__grass1 object__sprite object__sprite--history"></div>
								<div className="object__grass2 object__sprite object__sprite--history"></div>
								<div className="object__grass3 object__sprite object__sprite--history"></div>
								<div className="object__grass4 object__sprite object__sprite--history"></div>
								<div className="object__stones object__sprite object__sprite--history"></div>
								<div className="object__endoftrack object__sprite object__sprite--history"></div>
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
