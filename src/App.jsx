import { useState } from "react"

import "./styles/Reset.css"
import "./styles/App.css"

import PersonalDetails from "./Components/Sections/PersonalDetails"
import Experience from "./Components/Sections/Experience"
import Education from "./Components/Sections/Education"

import { examplePersonalInfo, exampleExperienceInfo, exampleEducation } from "./example-data"

function App() {
	const [personalData, setPersonalData] = useState(examplePersonalInfo)
	const [experienceData, setExperienceData] = useState(exampleExperienceInfo)
	const [educationData, setEducationData] = useState(exampleEducation)

	function handleOnClickPrint() {
		window.print()
	}

	function handleOnClickResetData() {
		location.reload()
	}

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
			<PersonalDetails data={personalData} />
			<Experience data={experienceData} />
			<Education data={educationData} />
		</main>
	)
}

export default App
