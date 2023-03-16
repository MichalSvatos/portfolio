import React, {useEffect, useRef, useState} from "react"
import "./_gallery.scss"

export default function Gallery({images}) {
	const imageShowcaseRef = useRef()
	const thumbsContainer = useRef()
	const linkShowcaseRef = useRef()
	// TODO: merge states?
	const [isZoomActive, setIsZoomActive] = useState(false)
	const [zoomState, setZoomState] = useState({
		isImageSmall: false,
	})

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

	// --- zoom functions
	const zoomSwitcher = (e) => {
		e.preventDefault()
		setIsZoomActive(!isZoomActive)
		zoomSizes()
	}

	const zoomSizes = () => {
		const viewport = document.documentElement.clientHeight
		const image = imageShowcaseRef.current?.naturalHeight

		if (image < viewport) {
			// --- image is smaller than viewport
			setZoomState({
				...zoomState,
				isImageSmall: true
			})

		} else {
			// --- image is bigger than viewport
			setZoomState({
				...zoomState,
				isImageSmall: false
			})

		}
	}

	useEffect(() => {
		lazyload()

		if (isZoomActive) {
			window.onresize = zoomSizes
		}
	})

	return (
		<>
			<div id="modal__gallery-showcase" className="gallery__showcase">
				<a href="/" onClick={zoomSwitcher} className={isZoomActive ? "gallery__zoom gallery__zoom--is-active" : "gallery__zoom"} ref={linkShowcaseRef} data-image-size={zoomState.isImageSmall ? "has-small-image" : "has-big-image"}>
					<img src="/default.png" data-src={fullsize[0]?.publicURL} className="gallery__image js-gallery-target-image js-lazyload" ref={imageShowcaseRef} alt="" />
				</a>
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
