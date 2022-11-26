import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<link
			rel="preload"
			href="/fonts/subset-digital-7monoItalic.woff2"
			as="font"
			type="font/woff2"
			crossOrigin="anonymous"
			key="digital7monoItalic"
		/>,
		<link
			rel="preload"
			href="/fonts/Faroest-Regular.woff2"
			as="font"
			type="font/woff2"
			crossOrigin="anonymous"
			key="faroest"
		/>,
		<link
			rel="preload"
			href="/fonts/TeXGyreAdventor-Regular.woff2"
			as="font"
			type="font/woff2"
			crossOrigin="anonymous"
			key="textgyreadventor"
		/>,
		<link
			rel="preload"
			href="/fonts/subset-Almarai-Light.woff2"
			as="font"
			type="font/woff2"
			crossOrigin="anonymous"
			key="almarai"
		/>,
		<link
			rel="preload"
			href="/fonts/subset-DotMatrix.woff2"
			as="font"
			type="font/woff2"
			crossOrigin="anonymous"
			key="dotmatrix"
		/>,
	])
}

