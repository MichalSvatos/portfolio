import React, {useEffect} from "react"
import "./_modal.scss"
import galleryHandler from "../Gallery/_Helper";

export default function Modal() {
	const populateModal = (projectData, modal) => {
		if (modal) {
			// TODO: DRY ...?
			const title = document.getElementById("modal__title")
			const year = document.getElementById("modal__year")
			const url = document.getElementById("modal__urls")
			const tags = document.getElementById("modal__tags")
			const desc = document.getElementById("modal__desc")
			const gallery = document.getElementById("gallery")

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
						linksHtml += `<li><a href="${link.link}" target="_blank" rel="noopener">${link.title}</a></li>`
					}
				})

				url.innerHTML = linksHtml
			}

			// -- handling tags

			if (data.tags) {
				let tagsHtml = ""

				data.tags.forEach(tag => {
					tagsHtml += `<li>${tag}</li>`
				})

				tags.innerHTML = tagsHtml
			}


			// -- images
			createGallery(data.images, gallery)

		}
	}

	const createGallery = (imagesArray, gallery) => {
		if (imagesArray) {
			let galleryHtml = ""
			const thumbs = imagesArray.collectionThumbs
			const images = imagesArray.collection

			// -- single big image
			if (images) {
				galleryHtml += `
					<div class="gallery__showcase">
						<img src="${images[0].publicURL}" class="gallery__image js-gallery-target-image" alt="">
					</div>
				`
			}

			// -- thumbnails
			let thumbnailsHtml = '<div class="gallery__thumbs">'

			if (thumbs) {
				Object.keys(thumbs).forEach(key => {
					thumbnailsHtml += `
						<a href="${images[key].publicURL}" class="gallery__link js-gallery-switch-image">
							<img src="${thumbs[key].publicURL}" class="gallery__thumb" alt="">
						</a>
					`
				});
			}

			thumbnailsHtml += '</div>'

			// -- filling the gallery
			galleryHtml = galleryHtml + thumbnailsHtml
			gallery.innerHTML = galleryHtml
		}
	}

	const closeModal = (modal, buttons) => {
		buttons.forEach(btn => {
			btn.addEventListener("click", (e) => {
				e.preventDefault()

				modal.classList.remove("modal-is-open")
			})
		})
	}

	const showModal = (modal) => {
		modal.classList.add("modal-is-open")
	}

	const clickProject = (modal) => {
		const projects = document.querySelectorAll(".js-modal-show")

		projects.forEach((project) => {
			project.addEventListener("click", (e) => {
				e.preventDefault()

				let modalData = JSON.parse(project.dataset.modal)
				populateModal(modalData, modal)
				showModal(modal)

				// -- handling the project gallery
				galleryHandler(modal)
			})
		})
	}

	useEffect(() => {
		const modal = document.getElementById("modal")
		const closeBtns = document.querySelectorAll(".js-modal-close")

		clickProject(modal)
		closeModal(modal, closeBtns)

		// TODO: Maybe another function to make it clean
		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				modal.classList.remove("modal-is-open")
			}
		})
	})

	return (
		<>
			<div className="modal" id="modal" aria-modal="true">
				<div id="modal__body">
					{/*<div className="modal__text">*/}
					<h2 id="modal__title">{/* populated by js */}</h2>
					<ul id="modal__tags">{/* populated by js */}</ul>
					<div id="modal__year">{/* populated by js */}</div>
					<ul id="modal__urls">{/* populated by js */}</ul>
					<div id="modal__desc"></div>
					{/*</div>*/}

					{/* TODO: Maybe separate component */}
					<div id="gallery">{/*

						// Generated structure from JS
						<div class="gallery__showcase">
							<img src="img1.png" class="gallery__image js-gallery-target-image" alt="">
						</div>
						<div class="gallery__thumbs">
							<a href="img1.png" class="gallery__link js-gallery-switch-image">
								<img src="img1-thumb.png" class="gallery__thumb" alt="">
							</a>
							<a href="img2.png" class="gallery__link js-gallery-switch-image">
								<img src="img2-thumb.png" class="gallery__thumb" alt="">
							</a>
						</div>

					 */}</div>

				</div>
				<a href="/" className="modal__close js-modal-close">[X]</a>
			</div>
			<div className="modal-overlay js-modal-close"></div>
		</>
	)
}
