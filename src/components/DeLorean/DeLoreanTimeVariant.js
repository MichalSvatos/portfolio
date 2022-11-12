import React from "react"
import "./_delorean.scss"

export default function DeLoreanTimeVariant({timeperiod, customClass = ""}) {
	return (
		<div className="delorean__holder">
			<div className="delorean__mask">
				<div className={`delorean__container delorean__container--${timeperiod} ${customClass}`}>
					<div className="delorean__car"></div>
				</div>
			</div>
		</div>
	)
}
