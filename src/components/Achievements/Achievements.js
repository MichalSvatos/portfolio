import React, {useEffect, useState} from 'react'
import "./_achievement.scss"

const Achievements = () => {

	// Check stored eggs
	const [eggs, setEggs] = useState(() => {
		const storedEggs = sessionStorage.getItem('eggs')
		return storedEggs ? JSON.parse(storedEggs) : {}
	})

	// Corresponding titles (intentionally here, not to spoil the fun saving them in the sessionStorage)
	const eggTitles = {
		egg1: "Tell me, Doctor, where are we going this time?",
		egg2: "Damn! Got to fix that thing",
		egg3: "You space bastard! You killed our pine!",
		egg4: "Look at her sweatshirt, Doc. \"Class of 1984\"?"
	}

	useEffect(() => {
		const updateEggs = () => {
			const storedEggs = sessionStorage.getItem('eggs')
			if (storedEggs) {
				setEggs(JSON.parse(storedEggs))
			}
		};

		// Event listener for custom storage update event
		const handleStorageUpdate = () => {
			updateEggs();
		};

		// Add event listener for custom event
		window.addEventListener('storage-update', (e) => {
			if (e.detail?.whichEgg) {
				let currentEggName = e.detail.whichEgg
				console.log('e.detail.customString', currentEggName)
				setCurrentEgg({name: currentEggName, title: eggTitles[currentEggName]})
			}

			handleStorageUpdate()
		});

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('storage-update', handleStorageUpdate)
		};
	}, [eggs])

	const [currentEgg, setCurrentEgg] = useState({name: '', title: ''})
	const [isAchievementVisible, setIsAchievementVisible] = useState(false)

	useEffect(() => {
		setIsAchievementVisible(true)

		const timer = setTimeout(() => {
			setIsAchievementVisible(false)
		}, 5000)

		return () => clearTimeout(timer);
	}, [currentEgg])

	return (
		<>
			<div className={`achievement-wrapper ${isAchievementVisible && Object.keys(eggs).filter(egg => eggs[egg]).length > 0 ? 'is-visible' : ''}`}>
				<div className="achievement">
					<div className="achievement__body">
						<div className="achievement__header">
							<div className="achievement__achv">ACHV</div>
							<div className="achievement__california">California</div>
							<div className="achievement__count">{Object.keys(eggs).filter(egg => eggs[egg]).length} of {Object.keys(eggs).length}</div>
						</div>
						<div className="achievement__plate">
							OUTATIME
						</div>
						<div className="achievement__footer">
							{currentEgg.title ? currentEgg.title : 'The Golden State'}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Achievements;