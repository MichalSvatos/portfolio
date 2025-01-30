import AllEggs from "../../../static/allEggs.mp3"

export const areAllEggsTrue = (eggs) => {
	return Object.values(eggs).every(value => value === true)
}

export const toggleEgg = (eggName) => {
	// Are eggs already set in storage?
	let eggs = JSON.parse(sessionStorage.getItem('eggs'))

	// Set eggs if not set
	if (!eggs) {
		eggs = {
			egg1: false,
			egg2: false,
			egg3: false,
			egg4: false,
		}
		sessionStorage.setItem('eggs', JSON.stringify(eggs))
		const event = new CustomEvent('storage-update')
		window.dispatchEvent(event)
	}

	if (eggs[eggName] === false) {
		eggs[eggName] = true
		sessionStorage.setItem('eggs', JSON.stringify(eggs))
		const event = new CustomEvent('storage-update', {
			detail: { whichEgg: eggName }
		})
		window.dispatchEvent(event)

		if (areAllEggsTrue(eggs)) {
			// All eggs found
			const audio = new Audio(AllEggs)

			const playAudioAfterDelay = async (delay) => {
				return new Promise((resolve) => {
					setTimeout(() => {
						audio.play().catch(error => {
							console.error("Error playing audio:", error)
						})
						resolve()
					}, delay)
				})
			}

			playAudioAfterDelay(2000)
		}

	}
}
