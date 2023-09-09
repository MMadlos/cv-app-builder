import { useState } from "react"

import "./styles/Reset.css"
import "./styles/App.css"
import { examplePersonalInfo, exampleExperienceInfo, emptyExperience } from "./example-data"

import PersonalDetails from "./Components/PersonalDetails"
import EditPersonalDetails from "./Components/EditPersonalDetails"

import Experience from "./Components/Experience"
import EditExperience from "./Components/EditExperience"

function App() {
	const [isInfoEditing, setInfoEditing] = useState(false)
	const [personalInfo, setPersonalInfo] = useState(examplePersonalInfo)
	const [editedInfo, setEditedInfo] = useState(examplePersonalInfo)

	function toggleEditInfo() {
		setInfoEditing(!isInfoEditing)
	}

	function handleInfo(e) {
		const { key } = e.target.dataset
		setEditedInfo({ ...editedInfo, [key]: e.target.value })
	}

	function handleSaveInfo() {
		for (let field in editedInfo) {
			if (editedInfo[field] === "") {
				editedInfo[field] = examplePersonalInfo[field]
			}
		}

		setPersonalInfo(editedInfo)
		setInfoEditing(false)
	}

	const [experienceInfo, setExperienceInfo] = useState(exampleExperienceInfo)
	const [experienceToEdit, setExperienceToEdit] = useState(emptyExperience)
	const [experienceID, setExperienceID] = useState(0)

	function handleEditExperience(e) {
		const { key } = e.target.parentNode.dataset

		setExperienceToEdit(experienceInfo[key])
		setExperienceID(parseInt(key))
	}

	function handleExperience(e) {
		const { key } = e.target.dataset
		const isCheckBox = e.target.type === "checkbox"

		const value = isCheckBox ? e.target.checked : e.target.value

		setExperienceToEdit({ ...experienceToEdit, [key]: value })
	}

	function handleSaveExp() {
		const newExperience = []
		experienceInfo.forEach((experience, index) => {
			if (index === experienceID) {
				newExperience.push(experienceToEdit)
			} else {
				newExperience.push(experience)
			}
		})

		setExperienceInfo(newExperience)
	}

	return (
		<>
			<main>
				{/* {isInfoEditing ? (
					<EditPersonalDetails
						onClickReturn={toggleEditInfo}
						dataToEdit={editedInfo}
						onChange={handleInfo}
						onClickSave={handleSaveInfo}
					/>
				) : (
					<PersonalDetails
						personalInfo={personalInfo}
						onClick={toggleEditInfo}
					/>
				)} */}

				<EditExperience
					editExperience={experienceToEdit}
					onChange={handleExperience}
					onClickSaveExp={handleSaveExp}
				/>
				<Experience
					experienceData={experienceInfo}
					onClickEdit={handleEditExperience}
				/>
			</main>
		</>
	)
}

export default App

// OLD CODE
/*
import { examplePersonalInfo, exampleExperienceInfo } from "./example-data"

import Form from "./Components/Form"
import Form_PersonalDetails from "./Components/Form/Form_PersonalDetails"
import Form_Experience from "./Components/Form/Form_Experience"

import PersonalDetails from "./Components/PersonalDetails"
import Experience from "./Components/Experience"

import { useState } from "react"

function App() {
	const [personalInfo, setPersonalInfo] = useState(examplePersonalInfo)

	const [experienceEdit, setExperienceEdit] = useState(exampleExperienceInfo)

	const [experienceInfo, setExperienceInfo] = useState([])
	const [experienceID, setExperienceID] = useState(0)

	function handlePersonalInfo(event) {
		const { key } = event.target.dataset
		setPersonalInfo({ ...personalInfo, [key]: event.target.value })
	}

	function handleExperienceInfo(event) {
		const { key } = event.target.dataset
		setExperienceEdit({ ...experienceEdit, [key]: event.target.value })
	}

	function handleAddExperience() {
		// Aumentar en 1 el ID
		setExperienceID(experienceID + 1)

		// Crear un nuevo objeto
		const experienceTemplate = {
			id: experienceID + 1,
			companyName: "Company Name",
			position: "Your role in the company",
			dateStart: "Start date",
			dateEnd: "End date",
			description: "A briev description",
		}

		// Añadir un nuevo objeto al array (template)
		setExperienceInfo([...experienceInfo, experienceEdit])
		setExperienceEdit(experienceTemplate)
	}

	return (
		<>
			<aside>
				<Form>
					<Form_PersonalDetails personalInfo={personalInfo} onChange={handlePersonalInfo} />

					<Form_Experience onChange={handleExperienceInfo} onClick={handleAddExperience} value={experienceEdit} />
				</Form>
			</aside>
			<main>
				<PersonalDetails personalInfo={personalInfo} />
				<Experience experienceInfo={experienceInfo} experienceEditing={experienceEdit} />
			</main>
		</>
	)
}


*/
