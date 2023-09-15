import ShowEducation from "../Templates/ShowEducation"
import EditEducation from "../Templates/EditEducation"

import { exampleEducation, emptyEducation } from "../../example-data"
import { useState } from "react"

function Education() {
	const [showForm, setShowForm] = useState(false)
	const [educationData, setEducationData] = useState(exampleEducation)
	const [educationID, setEducationID] = useState(0)
	const [dataToEdit, setDataToEdit] = useState(emptyEducation)
	const [isEdit, setIsEdit] = useState(false)
	const [showDeleteBtn, setShowDeleteBtn] = useState(false)

	function handleOnClickEdit(e) {
		const { key } = e.target.parentNode.parentNode.dataset
		const newEducationID = parseInt(key)
		setEducationID(newEducationID)
		setShowForm(true)
		setIsEdit(true)
		setShowDeleteBtn(true)

		educationData.map((education) => {
			if (education.id === newEducationID) {
				return setDataToEdit(education)
			}
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
					educationData={educationData}
					onClickAdd={handleOnClickAdd}
					onClickEdit={handleOnClickEdit}
				/>
			)}
		</>
	)
}

export default Education
