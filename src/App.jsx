import "./styles/Reset.css"
import "./styles/App.css"

import { useState } from "react"

import Aside from "./Components/Sections/Aside"
import PersonalDetails from "./Components/Sections/PersonalDetails"
import Experience from "./Components/Sections/Experience"
import Education from "./Components/Sections/Education"

import { exampleData } from "./example-data"

function App() {
	const [data, setData] = useState(exampleData)
	const [dataToEdit, setDataToEdit] = useState(exampleData)
	const [isDataEdit, setIsDataEdit] = useState(false)
	const [sectionToEdit, setSectionToEdit] = useState("")

	const [formType, setFormType] = useState("") // ["edit", "add"]

	const handleOnClickReturn = () => {
		setIsDataEdit(false)
	}

	function handleOnClickAdd() {
		// TODO
	}

	const handleOnClickEdit = (e) => {
		const section = e.target.closest("section").className
		setSectionToEdit(section)
		setIsDataEdit(true)
		setFormType("edit")

		if (section === "personal") setDataToEdit(data[section])
		if (section === "education") {
			const { key } = e.target.closest(".card-education").dataset
			const ID = parseInt(key)
			const { education } = data

			education.map((educationData) => educationData.id === ID && setDataToEdit(educationData))
		}
	}

	function handleOnChange(e) {
		const { section } = e.target.closest("section").dataset
		const { key } = e.target.dataset

		const keyToSearch = section !== "education" ? key : key.split("-")[0]

		setDataToEdit({ ...dataToEdit, [keyToSearch]: e.target.value })

		// if (section === "personal") {
		// 	setDataToEdit({ ...dataToEdit, [key]: e.target.value })
		// }

		// if (section === "education") {
		// 	const keyToSearch = key.split("-")[0]
		// 	setDataToEdit({ ...dataToEdit, [keyToSearch]: e.target.value })
		// }
	}

	function handleOnClickSave() {
		const currentData = {}
		for (let section in exampleData) {
			currentData[section] = exampleData[section]
			if (section === sectionToEdit) {
				currentData[section] = dataToEdit
			}
		}
		setData(currentData)
		setIsDataEdit(false)
	}

	function handleOnClickPrint() {
		window.print()
	}

	function handleOnClickResetData() {
		setData(exampleData)
	}

	return (
		<main>
			<Aside
				onClickPrint={handleOnClickPrint}
				onClickReset={handleOnClickResetData}
			/>
			<PersonalDetails
				data={isDataEdit && sectionToEdit === "personal" ? dataToEdit : data.personal}
				onClickReturn={handleOnClickReturn}
				dataToEdit={dataToEdit}
				onChange={handleOnChange}
				onClickSave={handleOnClickSave}
				onClickEdit={handleOnClickEdit}
				isEdit={sectionToEdit === "personal" && isDataEdit}
			/>
			<Experience />
			<Education
				data={isDataEdit && sectionToEdit === "education" ? dataToEdit : data.education}
				isEdit={sectionToEdit === "education" && isDataEdit}
				titleType={formType}
				showDeleteBtn={formType === "edit"}
				onClickEdit={handleOnClickEdit}
				onClickReturn={handleOnClickReturn}
				onClickAdd={handleOnClickAdd}
				onChange={handleOnChange}
			/>
		</main>
	)
}

export default App
