import React from "react"
import "./_time.scss"

export default function Time({ children, timePeriod = 'present'}) {
	return (
		<>
			<div className={`time time--${timePeriod}`}>
				{children}
			</div>
		</>
	)
}
