// import { useState } from "react"

import "./styles/Reset.css"
import "./styles/App.css"

import PersonalDetails from "./Components/Sections/PersonalDetails"
import Experience from "./Components/Sections/Experience"

function App() {
	return (
		<main>
			<PersonalDetails />
			<Experience />
		</main>
	)
}

export default App
