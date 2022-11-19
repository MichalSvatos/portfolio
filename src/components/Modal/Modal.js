import React, {useEffect} from "react"
import "./_modal.scss"
import galleryHelper from "../Gallery/_Helper"
import IconCloseWindow from "./images/closewindow.inline.svg"

export default function Modal() {
	const populateModal = (projectData, modal) => {
		if (modal) {
			// TODO: DRY ...?
			const title = document.getElementById("modal__title")
			const year = document.getElementById("modal__year")
			const url = document.getElementById("modal__urls")
			const tags = document.getElementById("modal__tags")
			const desc = document.getElementById("modal__desc")
			const galleryShowcase = document.getElementById("modal__gallery-showcase")
			const galleryThumbs = document.getElementById("modal__gallery-thumbs")

			// TODO: How to remove 1st level ...?
			const data = projectData[0]

			title.innerHTML = data.title
			year.innerHTML = data.year
			desc.innerHTML = data.html

			// -- urls of the project
			if (url) {
				let linksHtml = ""

				data.url.forEach(link => {
					if (link.link !== null) {
						linksHtml += `<li><a href="${link.link}" class="modal__url" target="_blank" rel="noopener">${link.title}</a></li>`
					}
				})

				url.innerHTML = linksHtml
			}

			// -- handling tags

			if (data.tags) {
				let tagsHtml = ""

				data.tags.forEach(tag => {
					tagsHtml += `<li class="modal__tags-item">${tag}</li>`
				})

				tags.innerHTML = tagsHtml
			}

			// -- images
			createGallery(data.images, galleryShowcase, galleryThumbs)

		}
	}

	const createGallery = (imagesArray, galleryShowcase, galleryThumbs) => {
		if (imagesArray) {
			let showcaseHtml = ""
			const thumbs = imagesArray.collectionThumbs
			const images = imagesArray.collection

			// -- single big image
			if (images) {
				showcaseHtml += `
						<img src="/default-test.png" data-src="${images[0].publicURL}" class="gallery__image js-gallery-target-image js-lazyload" alt="">
				`
			}

			// -- thumbnails
			let thumbnailsHtml = ""

			if (thumbs) {
				Object.keys(thumbs).forEach(key => {
					thumbnailsHtml += `
						<a href="${images[key].publicURL}" class="gallery__link js-gallery-switch-image">
							<img src="${thumbs[key].publicURL}" class="gallery__thumb" alt="">
						</a>
					`
				});
			}

			// -- filling the gallery
			galleryShowcase.innerHTML = showcaseHtml
			galleryThumbs.innerHTML = thumbnailsHtml
		}
	}

	const closeModal = (modal, buttons) => {
		buttons.forEach(btn => {
			btn.addEventListener("click", (e) => {
				e.preventDefault()

				bodyScrollingHandler()
				modal.classList.remove("modal-is-open")
			})
		})
	}

	const showModal = (modal) => {
		modal.classList.add("modal-is-open")
	}

	const bodyScrollingHandler = () => {
		const body = document.body

		body.classList.contains("scroll-under-control") ? body.classList.remove("scroll-under-control") : body.classList.add("scroll-under-control")
		console.log('bodyScrollingHandler');
	}

	const clickProject = (modal) => {
		const projects = document.querySelectorAll(".js-modal-show")

		projects.forEach((project) => {
			project.addEventListener("click", (e) => {
				e.preventDefault()

				bodyScrollingHandler()

				let modalData = JSON.parse(project.dataset.modal)
				populateModal(modalData, modal)
				showModal(modal)
				galleryHelper.lazyload()

				// -- handling the project gallery
				galleryHelper.thumbsHandler(modal)
			})
		})
	}

	useEffect(() => {
		const modal = document.getElementById("modal")
		const closeBtns = document.querySelectorAll(".js-modal-close")

		clickProject(modal)
		closeModal(modal, closeBtns)

		// TODO: Maybe another function to make it clean
		document.addEventListener("keydown", (event) => {
			if (event.key === 'Escape') {
				bodyScrollingHandler()
				modal.classList.remove("modal-is-open")
			}
		})
	})

	return (
		<>
			<div className="modal" id="modal" aria-modal="true">
				<div id="modal__body">
					<div className="modal__inner">
						<h2 id="modal__title">{/* populated by js */}</h2>
						<ul id="modal__tags">{/* populated by js */}</ul>
						<div id="modal__year">{/* populated by js */}</div>
						<ul id="modal__urls">{/* populated by js */}</ul>
						<div id="modal__desc"></div>

						{/* TODO: Maybe separate component */}
						<div id="modal__gallery-showcase" className="gallery__showcase">
							{/*
								// Generated structure from JS
								<img src="img1.png" className="gallery__image js-gallery-target-image js-lazyload" alt="">
							*/}
						</div>
						<div id="modal__gallery-thumbs" className="gallery__thumbs">
							{/*
								// Generated structure from JS
								<a href="img1.png" class="gallery__link js-gallery-switch-image">
									<img src="img1-thumb.png" class="gallery__thumb" alt="">
								</a>
								<a href="img2.png" class="gallery__link js-gallery-switch-image">
									<img src="img2-thumb.png" class="gallery__thumb" alt="">
								</a>
							*/}
						</div>
					</div>

				</div>
				<a href="/" className="modal__close js-modal-close">
					<IconCloseWindow />
					<span className="hide-me">Close</span>
				</a>
			</div>
			<div className="modal-overlay js-modal-close"></div>
		</>
	)
}
