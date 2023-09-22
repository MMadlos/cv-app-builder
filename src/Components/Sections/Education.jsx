// import { useState } from "react"

// import { exampleEducation, emptyEducation } from "../../example-data"

import ShowEducation from "../Templates/ShowEducation"
import EditEducation from "../Templates/EditEducation"

function Education({ data, isEdit, onClickAdd, onClickEdit, onClickReturn, onChange, onClickSave, titleType, showDeleteBtn, onClickDelete }) {
	// const [showForm, setShowForm] = useState(false)
	// const [educationData, setEducationData] = useState(exampleEducation)
	// const [educationID, setEducationID] = useState(0)
	// const [dataToEdit, setDataToEdit] = useState(emptyEducation)
	// const [showDeleteBtn, setShowDeleteBtn] = useState(false)
	// const [titleType, setTitleType] = useState("")

	/*

	function handleOnClickEdit(e) {
		const { key } = e.target.parentNode.parentNode.dataset
		const ID = parseInt(key)
		setEducationID(ID)
		setShowForm(true)
		setShowDeleteBtn(true)
		setTitleType("edit")

		educationData.map((education) => {
			if (education.id === ID) return setDataToEdit(education)
		})
	}

	*/

	// function handleOnClickReturn() {
	// 	setShowForm(false)
	// }
	// function handleOnClickAdd() {
	// 	setShowForm(true)
	// 	setDataToEdit(emptyEducation)
	// 	setShowDeleteBtn(false)
	// 	setTitleType("add")
	// }

	/*
	function handleOnClickSave() {
		for (let key in dataToEdit) {
			if (dataToEdit[key] === "") return alert(`${key} is required"`)
		}

		let newEducation = []
		if (showDeleteBtn) {
			educationData.forEach((education) => {
				const isSameID = education.id === educationID
				newEducation.push(isSameID ? dataToEdit : education)
			})
		} else {
			dataToEdit.id = educationData.length
			newEducation = [...educationData, dataToEdit]
		}

		setEducationData(newEducation)
		setShowForm(false)
	}
	*/

	// function handleOnClickDelete() {
	// 	const confirmation = window.confirm("If you delete it, you won't be able to recover it.")
	// 	if (!confirmation) return

	// 	let newEducation = []

	// 	educationData.forEach((education) => {
	// 		if (education.id !== educationID) newEducation.push(education)
	// 	})
	// 	setEducationData(newEducation)
	// 	setShowForm(false)
	// }

	// function handleOnChange(e) {
	// 	const { key } = e.target.dataset

	// 	const keyToSearch = key.split("-")[0]
	// 	setDataToEdit({ ...dataToEdit, [keyToSearch]: e.target.value })
	// }

	// const isEditType = titleType === "edit"

	return isEdit ? (
		<EditEducation
			titleType={titleType}
			dataToEdit={data}
			onChange={onChange}
			onClickReturn={onClickReturn}
			onClickSave={onClickSave}
			onClickDelete={onClickDelete}
			showDeleteBtn={showDeleteBtn}
		/>
	) : (
		<ShowEducation
			titleType={"show"}
			educationData={data}
			onClickAdd={onClickAdd}
			onClickEdit={onClickEdit}
		/>
	)
}

export default Education
