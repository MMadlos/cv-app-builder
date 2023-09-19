import { useState } from "react"

import { examplePersonalInfo } from "../../example-data"

import EditPersonalDetails from "../Templates/EditPersonalDetails"
import ShowPersonalDetails from "../Templates/ShowPersonalDetails"

function PersonalDetails() {
	const [personalInfo, setPersonalInfo] = useState(examplePersonalInfo)
	const [editedInfo, setEditedInfo] = useState(examplePersonalInfo)
	const [isInfoEditing, setInfoEditing] = useState(false)

	const toggleEditInfo = () => setInfoEditing(!isInfoEditing)

	function handleInfo(e) {
		const { key } = e.target.dataset
		setEditedInfo({ ...editedInfo, [key]: e.target.value })
	}

	function handleSaveInfo() {
		setPersonalInfo(editedInfo)
		setInfoEditing(false)
	}

	return isInfoEditing ? (
		<EditPersonalDetails
			titleType="edit"
			onClickReturn={toggleEditInfo}
			dataToEdit={editedInfo}
			onChange={handleInfo}
			onClickSave={handleSaveInfo}
		/>
	) : (
		<ShowPersonalDetails
			titleType="show"
			personalInfo={personalInfo}
			onClick={toggleEditInfo}
		/>
	)
}

export default PersonalDetails
