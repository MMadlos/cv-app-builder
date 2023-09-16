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
	const [titleType, setTitleType] = useState("")

	function handleOnClickEdit(e) {
		const { key } = e.target.parentNode.dataset

		setExperienceToEdit(experienceInfo[key])
		setExperienceID(parseInt(key))
		setShowForm(true)
		setIsEditForm(true)
		setShowDeleteBtn(true)
		setTitleType("edit")
	}

	function handleOnChangeEdit(e) {
		const { key } = e.target.dataset
		const isCheckBox = e.target.type === "checkbox"
		const isTextArea = e.target === "textarea"

		const value = isCheckBox ? e.target.checked : isTextArea ? e.target.textContent : e.target.value

		setExperienceToEdit({ ...experienceToEdit, [key]: value })
	}

	function handleOnClickSave() {
		let newExperience = []

		if (showDeleteBtn) {
			experienceInfo.forEach((experience, index) => {
				const isSameID = index === experienceID
				newExperience[index] = isSameID ? experienceToEdit : experience
			})
		} else {
			experienceToEdit.id = experienceInfo.length
			newExperience = [...experienceInfo, experienceToEdit]
		}

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
		setTitleType("add")
	}

	if (showForm) {
		return (
			<EditExperience
				titleType={titleType}
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
			titleType={"show"}
			isEdit={isEditForm}
			experienceData={experienceInfo}
			onClickEdit={handleOnClickEdit}
			onClickAddExp={handleOnClickAdd}
		/>
	)
}

export default Experience
