import React from "react"

export const onRenderBody = ({setHeadComponents, setBodyAttributes, setPreBodyComponents, setPostBodyComponents}) => {
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
			href="/fonts/subset-Almarai-Bold.woff2"
			as="font"
			type="font/woff2"
			crossOrigin="anonymous"
			key="almaraibold"
		/>,
		<link
			rel="preload"
			href="/fonts/subset-DotMatrix.woff2"
			as="font"
			type="font/woff2"
			crossOrigin="anonymous"
			key="dotmatrix"
		/>,
		<link as="script" rel="preload" key="preloader" href="/scripts/preloader.js" />,
		<noscript key="noscript">
			<link rel="stylesheet" href="/styles/noscript-preloader.css" />
		</noscript>
	])
	setBodyAttributes({
		className: "no-js preloader-is-active",
	})
	setPreBodyComponents([
		<div key="preloader-div" id="preloader">
			<div className="preloader__title">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 108 11"><path fill="url(#a)" d="M9.12.28A50.01 50.01 0 0 1 8.9 2.6H6a24.84 24.84 0 0 1-1.42 6.74A21 21 0 0 1 4 10.8H1.09l.97-2.96c.7-2.33 1.01-4.08.97-5.26H.12l.14-1.57V.28h8.85Zm6.1 8.03c-.18.55-.18.55 0 0s.18-.55 0 0Zm-6.58 2.51a27.94 27.94 0 0 0 1.66-4.78c.17-.66.3-1.34.4-2.02A280.8 280.8 0 0 1 11.16.2h1.96l1.1.01-.23 2.18c-.05.47-.14 1.09-.27 1.86l2.46.05c.16-.98.27-1.8.34-2.45.07-.65.1-1.18.1-1.6h2.96l-.12 1.56a40.05 40.05 0 0 1-.37 2.9 26.67 26.67 0 0 1-1.02 4.01c-.21.6-.52 1.32-.92 2.16H14.3c.43-1.16.74-2.01.92-2.56.18-.55.35-1.15.5-1.8l-2.47-.04c-.18.59-.36 1.14-.56 1.66-.2.52-.56 1.42-1.12 2.69H8.64Zm10-4.04c.17-.69.17-.69 0 0-.16.68-.16.68 0 0Zm.77 4.05.59-1.3a43.9 43.9 0 0 0 1.1-4.52 30.89 30.89 0 0 0 .42-3.56c.03-.45.04-.88.03-1.3l2.94.1c-.07 1.24-.14 2.23-.2 2.95a23.8 23.8 0 0 1-1.04 4.96 39.9 39.9 0 0 1-.99 2.67h-2.85Zm13-10.6c.97 0 1.63.12 1.96.37.34.25.49.6.45 1.04-.02.45-.08.93-.18 1.46h-2.7c.2-.7.02-1.05-.55-1.05h-1.52c-.44 0-.69.11-.74.33l-.2.87c-.09.36-.1.6-.04.76.07.14.2.26.4.35.2.09.65.11 1.34.07.7-.04 1.3.02 1.81.2.5.15.87.5 1.1 1.04.23.53.2 1.28-.08 2.23a6.05 6.05 0 0 1-.87 2c-.3.37-.99.68-2.04.93h-3.38c-2.22.08-3.03-.71-2.44-2.37l.44-1h2.66l-.25.76c.02.27.06.45.13.52.06.07.7.1 1.92.06a1.33 1.33 0 0 0 1.23-1.07c.16-.64.09-1.04-.22-1.21-.3-.17-.81-.24-1.52-.2-.71.04-1.37.02-1.98-.05-.6-.07-1.02-.24-1.24-.5-.21-.27-.24-.77-.06-1.49l.41-1.8c.1-.47.2-.84.27-1.1.07-.27.24-.5.5-.71a2 2 0 0 1 1-.4A20.4 20.4 0 0 1 30.3.2c1.1 0 1.8 0 2.11.04Zm5.98 10.6.58-1.3a43.98 43.98 0 0 0 1.11-4.52 31 31 0 0 0 .42-3.56c.03-.45.03-.88.03-1.3l2.93.1c-.07 1.24-.14 2.23-.2 2.95a23.8 23.8 0 0 1-1.04 4.96c-.25.77-.58 1.66-.99 2.67H38.4ZM51.38.23c.98 0 1.63.12 1.97.37.33.25.48.6.45 1.04-.03.45-.1.93-.18 1.46h-2.7c.2-.7.02-1.05-.56-1.05h-1.52c-.44 0-.68.11-.74.33l-.2.87c-.09.36-.1.6-.03.76.06.14.2.26.39.35.2.09.65.11 1.35.07.7-.04 1.3.02 1.8.2.51.15.88.5 1.1 1.04.23.53.2 1.28-.07 2.23a6.06 6.06 0 0 1-.88 2c-.3.37-.98.68-2.03.93h-3.4c-2.21.08-3.02-.71-2.42-2.37l.43-1h2.67l-.26.76c.02.27.06.45.13.52.06.07.7.1 1.93.06a1.32 1.32 0 0 0 1.23-1.07c.16-.64.08-1.04-.23-1.21-.3-.17-.8-.24-1.52-.2-.71.04-1.37.02-1.98-.05-.6-.07-1.02-.24-1.24-.5-.21-.27-.23-.77-.06-1.49l.41-1.8c.1-.47.2-.84.27-1.1.08-.27.24-.5.5-.71a2 2 0 0 1 1-.4A20.4 20.4 0 0 1 49.27.2c1.1 0 1.8 0 2.1.04ZM63.9 8.3c-.18.55-.18.55 0 0s.18-.55 0 0Zm-6.58 2.51a27.96 27.96 0 0 0 1.66-4.78c.17-.66.3-1.34.4-2.02.1-.68.17-1.29.23-1.82l.22-2h3.08l-.23 2.18c-.05.47-.14 1.09-.27 1.86l2.46.05c.16-.98.27-1.8.34-2.45.08-.65.1-1.18.1-1.6h2.96l-.12 1.56a40.05 40.05 0 0 1-.37 2.9 26.67 26.67 0 0 1-1.02 4.01c-.21.6-.52 1.32-.92 2.16H63c.42-1.16.73-2.01.91-2.56.18-.55.35-1.15.5-1.8l-2.47-.04c-.17.59-.36 1.14-.56 1.66-.2.52-.56 1.42-1.11 2.69h-2.94Zm10-4.04c.17-.69.17-.69 0 0-.16.68-.16.68 0 0Zm.73 3.99c.5-1.17.88-2.15 1.16-2.94a24.6 24.6 0 0 0 1.15-4.4c.14-.72.32-1.78.54-3.16h7.65a11.5 11.5 0 0 1-.26 2.2l-4.93-.03c-.1.7-.2 1.28-.29 1.75l4.93.04c-.13.62-.33 1.34-.6 2.15h-4.95a25.8 25.8 0 0 1-.78 2.2l5.05.04a40 40 0 0 1-.98 2.2h-7.71l.02-.05ZM88.53.23a11.7 11.7 0 0 1 .15 3.15c-.06.72-.17 1.47-.34 2.27a31.3 31.3 0 0 1-1.54 5.16h-2.66l.68-1.96.22-.94-2.64-.04-.45 1.43-.66 1.5h-2.73a31.24 31.24 0 0 0 1.47-4.43c.17-.66.3-1.32.4-2 .1-.68.21-1.37.33-2.05.12-.69.4-1.22.87-1.6.46-.39.85-.59 1.16-.6.32-.02.93-.03 1.84-.02.9 0 2.2.04 3.9.13ZM82.7 5.66l2.8.04a15.29 15.29 0 0 0 .55-3.6c-1.36-.09-2.12-.04-2.3.14a1.9 1.9 0 0 0-.41.8c-.1.34-.3 1.2-.6 2.57l-.04.05ZM90.58.22h2.8c.04.9.04 1.92 0 3.1-.06 1.17-.3 2.8-.73 4.91 1-1.48 1.64-2.57 1.95-3.29.3-.71.57-1.42.8-2.14.23-.71.48-1.57.75-2.58h2.88a28.1 28.1 0 0 1-1.76 5.01 16.89 16.89 0 0 1-1.87 3.13 16.3 16.3 0 0 1-2.13 2.45h-3.68c.28-1.48.47-2.56.54-3.24.08-.69.16-1.41.27-2.18.11-.78.17-1.6.18-2.5a164.56 164.56 0 0 0 0-2.58V.22Zm11.52 10.6 1.24-3.49c-.43-.74-.78-1.3-1.06-1.67a52.1 52.1 0 0 1-3.1-5.44h2.63c.33.6.59 1.02.75 1.27.17.25.4.63.7 1.16l.94 1.68.9-4.07h2.69c-.3 1.7-.55 3-.76 3.94a40.96 40.96 0 0 1-2.14 6.66h-2.85l.06-.05Z"/><defs><linearGradient id="a" x1="53" x2="53" y1="-.21" y2="10.79" gradientUnits="userSpaceOnUse"><stop stopColor="#FF4E1E"/><stop offset=".49" stopColor="#FFCA00"/><stop offset="1" stopColor="#FF4E1E"/></linearGradient></defs></svg>
			</div>
			<div className="preloader__flux flux">
				<div className="flux__energy flux__energy-1"></div>
				<div className="flux__energy flux__energy-2"></div>
				<div className="flux__energy flux__energy-3"></div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 243" fill="none">
					<g>
						<circle cx="35.9" cy="35.9" r="31.9" stroke="currentColor" strokeWidth="8" className="flux__big-dot" />
						<circle r="6.1" stroke="currentColor" strokeWidth="5" transform="matrix(-1 0 0 1 35.9 35.9)" className="flux__small-dot" />
						<circle cx="184.6" cy="35.9" r="31.9" stroke="currentColor" strokeWidth="8" className="flux__big-dot" />
						<circle r="6.1" stroke="currentColor" strokeWidth="5" transform="matrix(-1 0 0 1 184.6 35.9)" className="flux__small-dot" />
						<circle cx="110.2" cy="207.6" r="31.9" stroke="currentColor" strokeWidth="8" className="flux__big-dot" />
						<circle r="6.1" stroke="currentColor" strokeWidth="5" transform="matrix(-1 0 0 1 110.2 207.6)" className="flux__small-dot" />
						<circle r="6.1" stroke="currentColor" strokeWidth="5" transform="matrix(-1 0 0 1 110.2 108.4)" className="flux__small-dot flux__small-dot--center" />
						<path stroke="currentColor" strokeWidth="5" d="m114.6 104.5 65.7-65.7M105.3 104.6 39.6 38.9M110.1 114.6v86.5" className="flux__center"/>
						<path fill="currentColor" d="M35.8 114.7h2.5-2.5Zm7.6 9.8a2.5 2.5 0 1 0 0-5v5ZM33.3 41.3v73.4h5V41.3h-5Zm0 73.4c0 3 .5 5.6 2.5 7.5 2 1.8 4.7 2.3 7.6 2.3v-5c-2.5 0-3.6-.4-4.1-1-.5-.4-1-1.4-1-3.8h-5ZM188 207.6V205v2.5Zm9.9-7.7a2.5 2.5 0 0 0-5 0h5ZM114.6 210H188v-5h-73.4v5Zm73.4 0c3 0 5.7-.6 7.5-2.6 1.9-2 2.4-4.7 2.4-7.6h-5c0 2.6-.5 3.7-1 4.2-.4.4-1.4 1-4 1v5ZM184.7 114.7h-2.5 2.5Zm-7.7 9.8a2.5 2.5 0 1 1 0-5v5Zm10.2-83.2v73.4h-5V41.3h5Zm0 73.4c0 3-.6 5.6-2.6 7.5-2 1.8-4.7 2.3-7.6 2.3v-5c2.6 0 3.7-.4 4.2-1 .5-.4 1-1.4 1-3.8h5Z" className="flux__wires" />
					</g>
				</svg>
			</div>
		</div>
	])
	setPostBodyComponents([
		<script src="/scripts/preloader.js" key="preloader-backup" />
	])
}
