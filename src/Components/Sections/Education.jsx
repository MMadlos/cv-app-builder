import ShowEducation from "../Templates/ShowEducation"
import EditEducation from "../Templates/EditEducation"

import { exampleEducation, emptyEducation } from "../../example-data"
import { useState } from "react"

function Education() {
	const [educationData, setEducationData] = useState(exampleEducation)
	const [dataToEdit, setDataToEdit] = useState(emptyEducation)

	function handleOnClickAdd() {}
	function handleOnClickEdit() {}

	return (
		<>
			<EditEducation dataToEdit={dataToEdit} />
			<ShowEducation
				educationData={educationData}
				onClickAdd={handleOnClickAdd}
				onClickEdit={handleOnClickEdit}
			/>
		</>
	)
}

export default Education
