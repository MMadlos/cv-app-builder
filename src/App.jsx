// import { useState } from "react"

import "./styles/Reset.css"
import "./styles/App.css"

import PersonalDetails from "./Components/Sections/PersonalDetails"
import Experience from "./Components/Sections/Experience"
import Education from "./Components/Sections/Education"

function App() {
	function handleOnClickPrint() {
		window.print()
	}

	function handleOnClickResetData() {}

	return (
		<main>
			<aside>
				<button
					id="print"
					onClick={handleOnClickPrint}>
					<i className="fa-solid fa-print" />
					Preview / Print
				</button>
				<button
					id="reset-data"
					onClick={handleOnClickResetData}>
					Reset data
				</button>
			</aside>
			<PersonalDetails />
			<Experience />
			<Education />
		</main>
	)
}

export default App
