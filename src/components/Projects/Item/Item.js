import React from "react"
import "./_item.scss"
import "./_item--present.scss"
import "./_item--past.scss"
import "./_item--history.scss"
import {GatsbyImage} from "gatsby-plugin-image"

export default function Project({timeperiod, projectData}) {
	// console.log('projectData', projectData);

	const {title, tags, slug, year, url, featured, collection, collectionThumbs, perex} = projectData.frontmatter
	const html = projectData.html
	const featuredImage = featured.childrenImageSharp[0].gatsbyImageData
	const id = projectData.id

	const projectDetailData = [
		{
			"title": title,
			"tags": tags,
			"slug": slug,
			"year": year,
			"url": url,
			"html": html,
			"perex": perex,
			"images":
				{
					"collection": collection,
					"collectionThumbs": collectionThumbs
				}
		}
	]

	return (
		<>
			<a
				href="/"
				className={`project-item project-item--${timeperiod} js-modal-show`}
				data-modal={JSON.stringify(projectDetailData)}
				data-year={year}
				key={id}
			>
				{/* -- various object for each time period item */}
				<div className={`project-item__objects objects-item objects-item--${timeperiod}`}>
					{
						timeperiod === "present" && <>
							<div className="object-item__lamp"></div>
							<div className="object-item__year">
								<span>{year}</span>
							</div>
							<div className="object-item__hover"></div>
							<div className="object-item__hover"></div>
							<div className="object-item__bazmek"></div>
						</>
					}
				</div>

				<h3 className="project-item__title">{title}</h3>
				{
					featuredImage && <GatsbyImage image={featuredImage} className="project-item__image" alt={title} />
				}

				{
					perex && <p className="project-item__perex">{perex}</p>
				}

				<div className="project-item__year">{year}</div>

				{
					tags && <div className="project-item__tags tags">
						{
							tags.map((tag) => {
								return <span className="project-item__tag tag__item" key={tag.toLowerCase()}>{tag}</span>
							})
						}
					</div>
				}
			</a>
		</>
	)
}
