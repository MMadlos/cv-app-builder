import { useState } from "react"

import { exampleEducation, emptyEducation } from "../../example-data"

import ShowEducation from "../Templates/ShowEducation"
import EditEducation from "../Templates/EditEducation"

function Education() {
	const [showForm, setShowForm] = useState(false)
	const [educationData, setEducationData] = useState(exampleEducation)
	const [educationID, setEducationID] = useState(0)
	const [dataToEdit, setDataToEdit] = useState(emptyEducation)
	const [isEdit, setIsEdit] = useState(false)
	const [showDeleteBtn, setShowDeleteBtn] = useState(false)
	const [titleType, setTitleType] = useState("")

	function handleOnClickEdit(e) {
		const { key } = e.target.parentNode.parentNode.dataset
		const ID = parseInt(key)
		setEducationID(ID)
		setShowForm(true)
		setIsEdit(true)
		setShowDeleteBtn(true)
		setTitleType("edit")

		educationData.map((education) => {
			if (education.id === ID) return setDataToEdit(education)
		})
	}

	function handleOnClickReturn() {
		setShowForm(false)
		setIsEdit(false)
	}
	function handleOnClickAdd() {
		setIsEdit(true)
		setShowForm(true)
		setDataToEdit(emptyEducation)
		setShowDeleteBtn(false)
		setTitleType("add")
	}

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

	function handleOnClickDelete() {
		const confirmation = window.confirm("If you delete it, you won't be able to recover it.")
		if (!confirmation) return

		let newEducation = []

		educationData.forEach((education) => {
			if (education.id !== educationID) newEducation.push(education)
		})
		setEducationData(newEducation)
		setShowForm(false)
	}

	function handleOnChange(e) {
		const { key } = e.target.dataset

		const keyToSearch = key.split("-")[0]
		setDataToEdit({ ...dataToEdit, [keyToSearch]: e.target.value })
	}

	return (
		<>
			{showForm ? (
				<EditEducation
					titleType={titleType}
					dataToEdit={dataToEdit}
					onChange={handleOnChange}
					onClickReturn={handleOnClickReturn}
					onClickSave={handleOnClickSave}
					onClickDelete={handleOnClickDelete}
					isEdit={isEdit}
					showDeleteBtn={showDeleteBtn}
				/>
			) : (
				<ShowEducation
					titleType={"show"}
					educationData={educationData}
					onClickAdd={handleOnClickAdd}
					onClickEdit={handleOnClickEdit}
				/>
			)}
		</>
	)
}

export default Education
