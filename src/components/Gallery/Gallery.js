import React, {useEffect, useRef} from "react"
import "./_gallery.scss"

export default function Gallery({images}) {
	const imageShowcaseRef = useRef()
	const thumbsContainer = useRef()

	const fullsize = images.collection
	const thumbs = images.collectionThumbs

	const thumbsHandler = (e) => {
		e.preventDefault()
		imageShowcaseRef.current.setAttribute("data-src", e.currentTarget.getAttribute("href"))

		lazyload()
	}

	const lazyload = (delay = 100) => {
		if (!imageShowcaseRef) return

		setTimeout(() => {
			imageShowcaseRef.current.setAttribute("src", imageShowcaseRef.current.dataset.src)
		}, delay)
	}

	useEffect(() => {
		lazyload()
	})

	return (
		<>
			<div id="modal__gallery-showcase" className="gallery__showcase">
				<img src="/default.png" data-src={fullsize[0]?.publicURL} className="gallery__image js-gallery-target-image js-lazyload" ref={imageShowcaseRef} alt="" />
			</div>
			<div id="modal__gallery-thumbs" className="gallery__thumbs" ref={thumbsContainer}>
				{
					thumbs && thumbs.map((el, index) => {
						return <a href={fullsize[index]?.publicURL} className="gallery__link js-gallery-switch-image" key={index} onClick={thumbsHandler}>
							<img src={thumbs[index]?.publicURL} className="gallery__thumb" alt="" />
						</a>
					})
				}
			</div>
		</>
	)
}
