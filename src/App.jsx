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

	const handleOnClickReturn = () => setIsDataEdit(false)
	const handleOnClickPrint = () => window.print()
	const handleOnClickResetData = () => setData(exampleData)

	function handleOnClickAdd(e) {
		const section = e.target.closest("section").className
		setSectionToEdit(section)
		setIsDataEdit(true)
		setFormType("add")

		const emptyTemplate = {}
		const getExampleStructure = data[section][0]
		for (let key in getExampleStructure) {
			emptyTemplate[key] = ""
		}

		setDataToEdit(emptyTemplate)
	}

	const handleOnClickEdit = (e) => {
		const section = e.target.closest("section").className
		setSectionToEdit(section)
		setIsDataEdit(true)
		setFormType("edit")

		if (section === "personal") return setDataToEdit(data[section])

		const key = section === "education" ? e.target.closest(".card-education").dataset.key : e.target.parentNode.dataset.key
		const ID = parseInt(key)

		data[section].map((sectionData) => sectionData.id === ID && setDataToEdit(sectionData))
	}

	function handleOnChange(e) {
		const { key } = e.target.dataset

		const isCheckBox = e.target.type === "checkbox"
		const isTextArea = e.target === "textarea"

		const value = isCheckBox ? e.target.checked : isTextArea ? e.target.textContent : e.target.value

		setDataToEdit({ ...dataToEdit, [key]: value })
	}

	function handleOnClickSave() {
		const currentData = {}

		for (let sectionName in data) {
			if (sectionName !== sectionToEdit) {
				currentData[sectionName] = data[sectionName]
				continue
			}

			if (sectionToEdit === "personal") {
				currentData[sectionName] = dataToEdit
				continue
			}

			let newData = []

			if (formType === "add") {
				dataToEdit.id = data[sectionName].length
				newData = [...data[sectionName], dataToEdit]
			}
			if (formType === "edit") {
				data[sectionName].forEach((education) => {
					const isSameID = education.id === dataToEdit.id
					newData.push(isSameID ? dataToEdit : education)
				})
			}
			currentData[sectionName] = newData
		}
		setData(currentData)
		setIsDataEdit(false)
	}

	function handleOnClickDelete() {
		const newData = {}
		for (let sectionName in data) {
			if (sectionName !== sectionToEdit) newData[sectionName] = data[sectionName]
			if (sectionName === sectionToEdit) {
				newData[sectionName] = []
				data[sectionName].forEach((information) => {
					information.id !== dataToEdit.id && newData[sectionName].push(information)
				})
			}
		}
		setData(newData)
		setIsDataEdit(false)
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
			<Experience
				data={isDataEdit && sectionToEdit === "experience" ? dataToEdit : data.experience}
				isEdit={sectionToEdit === "experience" && isDataEdit}
				titleType={formType}
				showDeleteBtn={formType === "edit"}
				onClickEdit={handleOnClickEdit}
				onClickReturn={handleOnClickReturn}
				onClickAdd={handleOnClickAdd}
				onChange={handleOnChange}
				onClickSave={handleOnClickSave}
				onClickDelete={handleOnClickDelete}
			/>
			<Education
				data={isDataEdit && sectionToEdit === "education" ? dataToEdit : data.education}
				isEdit={sectionToEdit === "education" && isDataEdit}
				titleType={formType}
				showDeleteBtn={formType === "edit"}
				onClickEdit={handleOnClickEdit}
				onClickReturn={handleOnClickReturn}
				onClickAdd={handleOnClickAdd}
				onChange={handleOnChange}
				onClickSave={handleOnClickSave}
				onClickDelete={handleOnClickDelete}
			/>
		</main>
	)
}

export default App
