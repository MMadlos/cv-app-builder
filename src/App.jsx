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

	function toggleEditInfo(e) {
		const { editSection } = e.target.parentNode.dataset
		const setPersonalToEdit = e.target.parentNode.className === "name"

		if (editSection === "personal" || setPersonalToEdit) setInfoEditing(!isInfoEditing)
		if (editSection === "experience") setExperienceEditing(false)
	}

	function handleInfo(e) {
		const { key } = e.target.dataset
		setEditedInfo({ ...editedInfo, [key]: e.target.value })
	}

	function handleSaveInfo() {
		const newInfo = editedInfo

		setPersonalInfo(newInfo)
		setInfoEditing(false)
	}

	const [experienceInfo, setExperienceInfo] = useState(exampleExperienceInfo)
	const [experienceToEdit, setExperienceToEdit] = useState(emptyExperience)
	const [experienceID, setExperienceID] = useState(0)
	const [isExpEditing, setExperienceEditing] = useState(false)

	function handleEditExperience(e) {
		const { key } = e.target.parentNode.dataset

		setExperienceToEdit(experienceInfo[key])
		setExperienceID(parseInt(key))
		setExperienceEditing(true)
	}

	function handleExperience(e) {
		const { key } = e.target.dataset
		const isCheckBox = e.target.type === "checkbox"
		const isTextArea = e.target === "textarea"

		const value = isCheckBox ? e.target.checked : isTextArea ? e.target.textContent : e.target.value

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
		setExperienceEditing(false)
	}

	function handeAddExperience() {
		setExperienceEditing(true)
		setExperienceToEdit(emptyExperience)
	}

	return (
		<main>
			{isInfoEditing ? (
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
			)}

			{isExpEditing ? (
				<EditExperience
					editExperience={experienceToEdit}
					onChange={handleExperience}
					onClickSaveExp={handleSaveExp}
					onClickReturn={toggleEditInfo}
				/>
			) : (
				<Experience
					experienceData={experienceInfo}
					onClickEdit={handleEditExperience}
					onClickAddExp={handeAddExperience}
				/>
			)}
		</main>
	)
}

export default App
