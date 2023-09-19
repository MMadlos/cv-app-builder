import { useState } from "react"

import EditPersonalDetails from "../Templates/EditPersonalDetails"
import ShowPersonalDetails from "../Templates/ShowPersonalDetails"

function PersonalDetails({ data }) {
	const defaultPersonalInfo = data

	const [isInfoEditing, setInfoEditing] = useState(false)
	const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo)
	const [editedInfo, setEditedInfo] = useState(defaultPersonalInfo)

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
