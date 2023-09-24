// import { useState } from "react"
// import { exampleExperienceInfo, emptyExperience } from "../../example-data"
import ShowExperience from "../Templates/ShowExperience"
import EditExperience from "../Templates/EditExperience"

function Experience({ data, titleType, isEdit, onClickEdit, onClickAdd, onClickReturn, onChange, onClickSave, showDeleteBtn, onClickDelete }) {
	// const [experienceInfo, setExperienceInfo] = useState(exampleExperienceInfo)
	// const [experienceToEdit, setExperienceToEdit] = useState(emptyExperience)
	// const [experienceID, setExperienceID] = useState(0)
	// const [showForm, setShowForm] = useState(false)
	// const [isEditForm, setIsEditForm] = useState(false)
	// const [showDeleteBtn, setShowDeleteBtn] = useState(false)
	// const [titleType, setTitleType] = useState("")

	// function handleOnClickEdit(e) {
	// 	const { key } = e.target.parentNode.dataset
	// 	const ID = parseInt(key)
	// 	setExperienceID(ID)
	// 	setShowForm(true)
	// 	setIsEditForm(true)
	// 	setShowDeleteBtn(true)
	// 	setTitleType("edit")

	// 	experienceInfo.map((experience) => {
	// 		if (experience.id === ID) return setExperienceToEdit(experience)
	// 	})
	// }

	/*
	function handleOnChangeEdit(e) {
		const { key } = e.target.dataset
		const isCheckBox = e.target.type === "checkbox"
		const isTextArea = e.target === "textarea"

		const value = isCheckBox ? e.target.checked : isTextArea ? e.target.textContent : e.target.value

		setExperienceToEdit({ ...experienceToEdit, [key]: value })
	}
	*/

	/*
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

	*/

	// function handleOnClickReturn() {
	// 	setShowForm(false)
	// 	setIsEditForm(false)
	// }

	// function handleOnClickAdd() {
	// 	setIsEditForm(true)
	// 	setShowForm(true)
	// 	setExperienceToEdit(emptyExperience)
	// 	setShowDeleteBtn(false)
	// 	setTitleType("add")
	// }

	// function handleOnClickDelete() {
	// 	const confirmation = window.confirm("Are you sure?")
	// 	if (!confirmation) return

	// 	let newExperience = []
	// 	experienceInfo.forEach((experience) => {
	// 		if (experience.id !== experienceID) newExperience.push(experience)
	// 	})
	// 	setExperienceInfo(newExperience)
	// 	setShowForm(false)
	// }

	return isEdit ? (
		<EditExperience
			dataToEdit={data}
			titleType={titleType}
			onChange={onChange}
			onClickReturn={onClickReturn}
			onClickSave={onClickSave}
			onClickDelete={onClickDelete}
			showDeleteBtn={showDeleteBtn}
		/>
	) : (
		<ShowExperience
			titleType={"show"}
			experienceData={data}
			onClickEdit={onClickEdit}
			onClickAdd={onClickAdd}
		/>
	)
}

export default Experience
