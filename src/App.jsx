// import { useState } from "react"

import "./styles/Reset.css"
import "./styles/App.css"

import PersonalDetails from "./Components/Sections/PersonalDetails"
import Experience from "./Components/Sections/Experience"
import ShowEducation from "./Components/Templates/ShowEducation"

function App() {
	return (
		<main>
			{/* <PersonalDetails /> */}
			{/* <Experience /> */}
			<ShowEducation />
		</main>
	)
}

export default App
