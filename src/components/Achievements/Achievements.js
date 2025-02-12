import React from 'react'
import "./_achievement.scss"
import useEggStore from "./ToggleEgg"

const Achievements = () => {
	const {
		currentEggTitle,
		eggsDiscovered,
		eggsTotal,
		showAchievement
	} = useEggStore()

	return (
		<>
			<div className={`achievement-wrapper ${showAchievement ? 'is-visible' : ''}`}>
				{eggsDiscovered >= eggsTotal &&
					<div className="achievement-done">
						<div className="achievement-done__inner">
							<div className="achievement-done__text">
								<span>Time well spent!</span>
								<span>Sorry, no rewards in Hill Valley.</span>
							</div>
						</div>
					</div>
				}
				<div className="achievement">
					<div className="achievement__body">
						<div className="achievement__header">
							<div className="achievement__achv">ACHV</div>
							<div className="achievement__california">California</div>
							<div className="achievement__count">{eggsDiscovered} of 4</div>
						</div>
						<div className="achievement__plate">
							OUTATIME
						</div>
						<div className="achievement__footer">
							{currentEggTitle ? currentEggTitle : 'The Golden State'}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Achievements;