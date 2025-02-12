import AllEggs from "../../../static/allEggs.mp3"
import {create} from 'zustand'

const playAllEggs = (audioFile) => {
	const audio = new Audio(audioFile)
	setTimeout(() => {
		audio.play()
	}, 500)
}

const useEggStore = create((set) => ({
	egg1: {
		discovered: false,
		text: "Tell me, Doctor, where are we going this time?"
	},
	egg2: {
		discovered: false,
		text: "Damn! Got to fix that thing"
	},
	egg3: {
		discovered: false,
		text: "You space bastard! You killed our pine!"
	},
	egg4: {
		discovered: false,
		text: "I finally invent something that works!"
	},
	eggsDiscovered: 0,
	eggsTotal: 4,
	currentEggTitle: '',
	showAchievement: false,
	setEggToTrue: (eggName) => set((state) => {
		const egg = state[eggName];
		if (state[eggName].discovered === false) {
			set({showAchievement: true})

			setTimeout(() => {
				set({showAchievement: false})
			}, 5000);

			return {
				[eggName]: {
					...egg,
					discovered: true
				},
				currentEggTitle: egg.text,
				eggsDiscovered: state.eggsDiscovered + 1 // Yeah, I know. This should be dynamic ... ain't nobody got time for that :)
			};
		}

		if (state.eggsDiscovered >= state.eggsTotal) {
			playAllEggs(AllEggs)
		}
		return state
	}),
}))

export default useEggStore
