import React, {useEffect} from "react"
import "./_timecircuits.scss"
import GoBackToTheFuture from "./images/gbttf.inline.svg"

export default function TimeCircuits() {

	const timeCircuits = (yearCircuit, monthCircuit, yearsArray, timecircuits) => {
		const yearsAsNumbers = yearsArray.map(Number);
		const yearsFiltered = new Set(yearsAsNumbers)

		const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
		let allMonthsArray = []

		// -- min and max year (with array duplication)
		const yearMax = Math.max(...[...yearsFiltered])
		//const yearMin = Math.min(...[...yearsFiltered])

		yearCircuit.innerHTML = yearMax

		let scrollCounter = 0
		let currentNumber = yearMax
		let loop = 0
		let index = 0

		// TODO - dynamic on resize
		let height = document.body.offsetHeight - window.innerHeight

		// -- .size because it's a SET
		let interval = Math.floor(height / yearsFiltered.size)

		let sectionsHeight = Math.floor(height / (interval / 12))
		let sectionsCount = Math.floor(height / sectionsHeight)

		// -- create new array with all the months for all the "sections"
		for (loop = 0; loop <= sectionsHeight; loop++) {
			if (loop >= months.length) {
				index = loop - (months.length * Math.floor(loop / months.length))
				allMonthsArray.push(months[index])

			} else {
				allMonthsArray.push(months[loop])

			}
		}

		window.addEventListener("scroll", () => {
			scrollCounter = window.scrollY

			// -- months
			let resultMonths = Math.floor(scrollCounter / (sectionsCount + 1)) // 0 index compensation
			console.log('resultMonths', typeof resultMonths);

			if (resultMonths in allMonthsArray) {
				monthCircuit.innerHTML = allMonthsArray[resultMonths]
			}

			// -- years
			let result = Math.floor(scrollCounter / interval)

			if ((result !== currentNumber) && (result !== yearsFiltered.size)) {
				// TODO - data attr + css
				yearCircuit.innerHTML = [...yearsFiltered.values()][result]
				currentNumber = [...yearsFiltered.values()][result]
				timecircuits.classList.remove("go-up")

			} else {
				currentNumber = yearMax
				timecircuits.classList.add("go-up")
			}
		})
	}

	useEffect(() => {
		const timecircuits = document.querySelector(".timecircuits")
		const yearCircuit = document.querySelector(".timecircuits__year .timecircuits__inner")
		const monthCircuit = document.querySelector(".timecircuits__month .timecircuits__inner")
		const projectItem = document.querySelectorAll(".project-item")
		const yearsArray = []

		projectItem.forEach(item => {
			yearsArray.push(item.dataset.year)
		})

		timecircuits.addEventListener("click", () => {
			let originalYear = yearCircuit.innerHTML
			let originalMonth = monthCircuit.innerHTML

			timecircuits.classList.add("is-glitching")
			yearCircuit.innerHTML = "1885"
			monthCircuit.innerHTML = "JAN"

			setTimeout(() => {
				timecircuits.classList.remove("is-glitching")
				yearCircuit.innerHTML = originalYear
				monthCircuit.innerHTML = originalMonth
			}, 300)
		})

		timeCircuits(yearCircuit, monthCircuit, yearsArray, timecircuits)

		window.addEventListener("resize", function () {
			timeCircuits(yearCircuit, monthCircuit, yearsArray, timecircuits)
		});
	})

	return (
		<>
			<div className="timecircuits">
				<div className="timecircuits__month">
					{/*TODO: [NTH] Timecircuits - dynamic month?*/}
					<span className="timecircuits__inner">JAN</span>
				</div>
				<div className="timecircuits__year">
					{/*TODO: [NTH] Timecircuits - dynamic year*/}
					<span className="timecircuits__inner">2022</span>
				</div>
			</div>
			<a href="#main" className="timecircuits__back-to-the-future" title="GO UP. To the future!">
				<GoBackToTheFuture/>
			</a>
		</>
	)
}
