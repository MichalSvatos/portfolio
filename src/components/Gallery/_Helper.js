import "./_gallery.scss"

const thumbsHandler = (modal) => {
	if (!modal) return

	const thumbLinks = modal.querySelectorAll(".js-gallery-switch-image")
	const bigImage = modal.querySelector(".js-gallery-target-image")

	thumbLinks.forEach(link => {
		link.addEventListener("click", (e) => {
			e.preventDefault()

			bigImage.setAttribute("data-src", link.getAttribute("href"))

			lazyload()
		})
	})

}

const lazyload = (delay = 100) => {
	const galleryShowcase = document.getElementById("modal__gallery-showcase")
	const image = galleryShowcase.querySelector(".js-lazyload")

	if (!galleryShowcase) return
	if (!image) return

	setTimeout(() => {
		image.setAttribute("src", image.dataset.src)
	}, delay)
}

const galleryHelper = {thumbsHandler, lazyload}

export default galleryHelper
