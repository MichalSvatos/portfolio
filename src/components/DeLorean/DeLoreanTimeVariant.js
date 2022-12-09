import React from "react"
import "./_delorean.scss"

export default function DeLoreanTimeVariant({timeperiod, customClass = ""}) {
	return (
		<div className="delorean__holder">
			<div className="delorean__mask">
				<div className={`delorean__container delorean__container--${timeperiod} ${customClass}`}>
					<div className="delorean__car"></div>

					{timeperiod === "present" && <>
						<div className="delorean__headlights"></div>
						<div className="delorean__hover-conversion"></div>
					</>}

					{timeperiod === "past" && <>
						<div className="delorean__headlights"></div>
						<div className="delorean__hover-conversion"></div>
						<div className="delorean__shadow"></div>
					</>}

					{timeperiod === "history" && <>
						<div className="delorean__shadow"></div>
					</>}
				</div>
			</div>
		</div>
	)
}