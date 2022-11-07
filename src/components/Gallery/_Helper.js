import "./_gallery.scss"

const galleryHandler = (modal) => {
	if (!modal) return

	// TODO: Lazyload
	const thumbLinks = modal.querySelectorAll(".js-gallery-switch-image")
	const bigImage = modal.querySelector(".js-gallery-target-image")

	thumbLinks.forEach(link => {
		link.addEventListener("click", (e) => {
			e.preventDefault()

			bigImage.setAttribute("src", link.getAttribute("href"))
		})
	})

}

export default galleryHandler
