import React, {useEffect, useRef, useState, useMemo} from "react"
import "./_item.scss"
import "./_item--present.scss"
import "./_item--past.scss"
import "./_item--history.scss"
import {GatsbyImage} from "gatsby-plugin-image"
// [NTH] TODO: necessary evil
import Modal from "../../Modal/Modal"
import IconCloseWindow from "../../Modal/images/closewindow.inline.svg"

export default function Project({timeperiod, projectData}) {

	const {title, tags, slug, year, url, featured, collection, collectionThumbs, statusText, status, owner} = projectData.frontmatter
	const html = projectData.html
	const featuredImage = featured.childrenImageSharp[0].gatsbyImageData
	const id = projectData.id
	const projectButton = useRef()

	const projectDetailData = [
		{
			"title": title,
			"tags": tags,
			"slug": slug,
			"year": year,
			"url": url,
			"html": html,
			"statusText": statusText,
			"statusClass": status,
			"owner": owner,
			"images":
				{
					"collection": collection,
					"collectionThumbs": collectionThumbs
				}
		}
	]

	// --- modal
	const [openModalID, setOpenModalID] = useState(null)

	const closeModal = () => {
		setOpenModalID(null)
		document.getElementById("modal-container").classList.remove("modal-is-ready")
		document.body.classList.remove("scroll-under-control") // added in Modal/Modal.js
	}

	const showModal = (e) => {
		e.preventDefault()
		setOpenModalID(id)

		document.getElementById("modal-container").classList.add("modal-is-ready")
	}

	// --- observer
	const [isIntersecting, setIntersecting] = useState(false)
	const observerOptions = useMemo(() => {
		return {
			root: null,
			rootMargin: "150px 0px",
		}
	}, [])

	const observerProjectItem = useMemo(
		() =>
			new IntersectionObserver(
				([entry]) => setIntersecting(entry.isIntersecting),
				observerOptions
			),
		[observerOptions]
	)

	useEffect(() => {
		document.addEventListener("keydown", (event) => {
			if (event.key === 'Escape') {
				closeModal()
			}
		})

		observerProjectItem.observe(projectButton.current);

		// --- remove the observer when the component is unmounted
		return () => {
			observerProjectItem.disconnect();
		}
	}, [observerProjectItem])

	return (
		<>
			<a
				href="/"
				className={isIntersecting ? `project-item project-item--${timeperiod} show-me` : `project-item project-item--${timeperiod}`}
				data-year={year}
				key={id}
				ref={projectButton}
				onClick={showModal}
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
				{featuredImage && <GatsbyImage image={featuredImage} className="project-item__image" alt={title} />}

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
			{
				openModalID === id &&
					<>
						<Modal id={id} data={projectDetailData} />
						<button className="modal__close" onClick={closeModal}>
							<IconCloseWindow />
							<span className="hide-me">Close</span>
						</button>
					</>
			}
		</>
	)
}
