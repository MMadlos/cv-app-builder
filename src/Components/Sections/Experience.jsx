import { useState } from "react"
import { exampleExperienceInfo, emptyExperience } from "../../example-data"
import ShowExperience from "../Templates/ShowExperience"
import EditExperience from "../Templates/EditExperience"

function Experience() {
	const [experienceInfo, setExperienceInfo] = useState(exampleExperienceInfo)
	const [experienceToEdit, setExperienceToEdit] = useState(emptyExperience)
	const [experienceID, setExperienceID] = useState(0)
	const [showForm, setShowForm] = useState(false)
	const [isEditForm, setIsEditForm] = useState(false)
	const [showDeleteBtn, setShowDeleteBtn] = useState(false)

	function handleOnClickEdit(e) {
		const { key } = e.target.parentNode.dataset

		setExperienceToEdit(experienceInfo[key])
		setExperienceID(parseInt(key))
		setShowForm(true)
		setIsEditForm(true)
		setShowDeleteBtn(true)
	}

	function handleOnChangeEdit(e) {
		const { key } = e.target.dataset
		const isCheckBox = e.target.type === "checkbox"
		const isTextArea = e.target === "textarea"

		const value = isCheckBox ? e.target.checked : isTextArea ? e.target.textContent : e.target.value

		setExperienceToEdit({ ...experienceToEdit, [key]: value })
	}

	function handleOnClickSave() {
		const newExperience = []
		experienceInfo.forEach((experience, index) => {
			const isSameID = index === experienceID
			newExperience[index] = isSameID ? experienceToEdit : experience
		})

		setExperienceInfo(newExperience)
		setShowForm(false)
		setIsEditForm(false)
	}

	function handleOnClickReturn() {
		setShowForm(false)
		setIsEditForm(false)
	}

	function handleOnClickAdd() {
		setIsEditForm(true)
		setShowForm(true)
		setExperienceToEdit(emptyExperience)
		setShowDeleteBtn(false)

		// Crear state si es edit o si es new
		// If edit -> Modificar
		// If new -> Añadir
	}

	if (showForm) {
		return (
			<EditExperience
				isEdit={isEditForm}
				editExperience={experienceToEdit}
				onChange={handleOnChangeEdit}
				onClickSaveExp={handleOnClickSave}
				onClickReturn={handleOnClickReturn}
				showDeleteBtn={showDeleteBtn}
			/>
		)
	}

	return (
		<ShowExperience
			isEdit={isEditForm}
			experienceData={experienceInfo}
			onClickEdit={handleOnClickEdit}
			onClickAddExp={handleOnClickAdd}
		/>
	)
}

export default Experience
