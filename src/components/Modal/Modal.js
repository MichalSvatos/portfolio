import React, {useEffect, useRef, useState} from "react"
import "./_modal.scss"
import {createPortal} from "react-dom"
import Gallery from "../Gallery/Gallery"

export default function Modal({id, data}) {

	const modalRef = useRef()
	const {title, tags, year, url, html, images, statusText, statusClass, owner} = data[0]

	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		document.querySelector(".intro").classList.remove("is-fixed") // smoothing UX when opening/closing the modal window

		setTimeout(() => {
			modalRef.current.classList.add("modal-is-open")
			document.body.classList.add("scroll-under-control") // removed in Projects/Item/Item.js
		}, 500)

		setMounted(true)
		return () => setMounted(false)
	}, [])

	if (mounted) {
		return (
			createPortal(
				<>
					<div className="modal" id="modal" aria-modal="true" key={id} ref={modalRef}>
						<div id="modal__body">
							<div className="modal__inner">
								<h2 id="modal__title">{title}</h2>
								<ul id="modal__tags">
									{tags.map((tag) => {
										return <li className="modal__tags-item" key={tag}>{tag}</li>
									})}
								</ul>
								<div id="modal__info">
									<div id="modal__owner">
										{owner.includes("Personal") ? owner : <>Client: {owner}</>}
									</div>
									<div id="modal__year">{year}</div>
									<div id="modal__status">
										{
											(statusClass && statusText) &&
											<span className={"is-" + statusClass}>Status: {statusText}</span>
										}
									</div>
								</div>
								<ul id="modal__urls">
									{url.map((link) => {
										if (link.link !== null) {
											return <li key={link.link}><a href={link.link} className="modal__url" target="_blank" rel="noopener noreferrer">{link.title}</a></li>
										}
									})}
								</ul>
								<div id="modal__desc" dangerouslySetInnerHTML={{__html: html}}></div>

								<Gallery images={images} />

							</div>

						</div>
					</div>
					<div className="modal-overlay js-modal-close"></div>
				</>,
				document.getElementById("modal-container")
			)
		)
	}
}
