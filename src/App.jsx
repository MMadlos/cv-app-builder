import "./styles/Reset.css"
import "./styles/App.css"

import { useState } from "react"

import Aside from "./Components/Sections/Aside"
import PersonalDetails from "./Components/Sections/PersonalDetails"
import Experience from "./Components/Sections/Experience"
import Education from "./Components/Sections/Education"

import { exampleData } from "./example-data"

function App() {
	const { personal } = exampleData
	const [personalData, setPersonalData] = useState(personal)
	const [newPersonalData, setNewPersonalData] = useState(personal)
	const [isPersonalEdit, setIsPersonalEdit] = useState(false)

	const handleOnClickEdit = () => {
		setNewPersonalData(personalData)
		setIsPersonalEdit(true)
	}
	const handleOnClickReturn = () => setIsPersonalEdit(false)

	function handleOnChange(e) {
		const { key } = e.target.dataset
		setNewPersonalData({ ...newPersonalData, [key]: e.target.value })
	}

	function handleOnClickSave() {
		setPersonalData(newPersonalData)
		setIsPersonalEdit(false)
	}

	function handleOnClickPrint() {
		window.print()
	}

	function handleOnClickResetData() {
		setPersonalData(personal)
	}

	return (
		<main>
			<Aside
				onClickPrint={handleOnClickPrint}
				onClickReset={handleOnClickResetData}
			/>
			<PersonalDetails
				data={personalData}
				onClickReturn={handleOnClickReturn}
				dataToEdit={newPersonalData}
				onChange={handleOnChange}
				onClickSave={handleOnClickSave}
				onClickEdit={handleOnClickEdit}
				isEdit={isPersonalEdit}
			/>
			<Experience />
			<Education />
		</main>
	)
}

export default App
