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
	return (
		<main>
			<aside>
				<button
					id="print"
					onClick={handleOnClickPrint}>
					<i className="fa-solid fa-print"></i>
				</button>
			</aside>
			<PersonalDetails />
			<Experience />
			<Education />
		</main>
	)
}

export default App
