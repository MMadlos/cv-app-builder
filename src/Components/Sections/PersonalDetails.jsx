import { useState } from "react"

import EditPersonalDetails from "../Templates/EditPersonalDetails"
import ShowPersonalDetails from "../Templates/ShowPersonalDetails"

import { examplePersonalInfo } from "../../example-data"

function PersonalDetails() {
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
		const newInfo = editedInfo

		setPersonalInfo(newInfo)
		setInfoEditing(false)
	}

	if (isInfoEditing) {
		return (
			<EditPersonalDetails
				titleType="edit"
				onClickReturn={toggleEditInfo}
				dataToEdit={editedInfo}
				onChange={handleInfo}
				onClickSave={handleSaveInfo}
			/>
		)
	}
	return (
		<ShowPersonalDetails
			titleType="show"
			personalInfo={personalInfo}
			onClick={toggleEditInfo}
		/>
	)
}

export default PersonalDetails
