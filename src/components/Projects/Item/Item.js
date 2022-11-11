import React from "react"
import "./_item.scss"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Project({ timeperiod, projectData }) {
	// console.log('projectData', projectData);

	const { title, tags, slug, year, url, featured, collection, collectionThumbs } = projectData.frontmatter
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
				{
					featuredImage && <GatsbyImage image={featuredImage} alt={title} />
				}
				<h3>{title} ({year})</h3>
				{
					tags && <span className="tags">
						{
							tags.map((tag) => {
								{/* TODO: get rid off the comma */}
								return (
									<span key={tag.toLowerCase()}>{tag},</span>
								)
							})
						}
					</span>
				}
			</a>
		</>
	)
}
