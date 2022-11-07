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

const lazyload = () => {
	const gallery = document.getElementById("gallery")
	const image = gallery.querySelector(".js-lazyload")

	if (!gallery) return
	if (!image) return

	image.setAttribute("src", image.dataset.src)
}

const galleryHelper = {thumbsHandler, lazyload}

export default galleryHelper
