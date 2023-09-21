// import { useState } from "react"

// import { examplePersonalInfo } from "../../example-data"

import EditPersonalDetails from "../Templates/EditPersonalDetails"
import ShowPersonalDetails from "../Templates/ShowPersonalDetails"

function PersonalDetails({ data, onClickReturn, dataToEdit, onChange, onClickSave, onClickEdit, isEdit }) {
	// const [personalInfo, setPersonalInfo] = useState(defaultData)
	// const [dataToEdit, setDataToEdit] = useState(defaultData)
	// const [isEdit, setIsEdit] = useState(false)

	// const handleOnClickEdit = () => setIsEdit(!isEdit)

	// function handleOnChange(e) {
	// 	const { key } = e.target.dataset
	// 	setDataToEdit({ ...dataToEdit, [key]: e.target.value })
	// }

	// function handleOnClickSave() {
	// 	setPersonalInfo(dataToEdit)
	// 	setIsEdit(false)
	// }

	return isEdit ? (
		<EditPersonalDetails
			titleType="edit"
			onClickReturn={onClickReturn}
			dataToEdit={dataToEdit}
			onChange={onChange}
			onClickSave={onClickSave}
		/>
	) : (
		<ShowPersonalDetails
			titleType="show"
			personalInfo={data}
			onClick={onClickEdit}
		/>
	)
}

export default PersonalDetails
