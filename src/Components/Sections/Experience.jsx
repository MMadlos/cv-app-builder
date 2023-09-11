import { useState } from "react"
import { exampleExperienceInfo, emptyExperience } from "../../example-data"
import ShowExperience from "../Templates/ShowExperience"
import EditExperience from "../Templates/EditExperience"

function Experience() {
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

	function toggleEditInfo(e) {
		const { editSection } = e.target.parentNode.dataset
		if (editSection === "experience") setExperienceEditing(false)
	}

	function handeAddExperience() {
		setExperienceEditing(true)
		setExperienceToEdit(emptyExperience)

		// Crear state si es edit o si es new
		// If edit -> Modificar
		// If new -> Añadir
	}

	if (isExpEditing) {
		return (
			<EditExperience
				editExperience={experienceToEdit}
				onChange={handleExperience}
				onClickSaveExp={handleSaveExp}
				onClickReturn={toggleEditInfo}
			/>
		)
	}

	return (
		<ShowExperience
			experienceData={experienceInfo}
			onClickEdit={handleEditExperience}
			onClickAddExp={handeAddExperience}
		/>
	)
}

export default Experience
