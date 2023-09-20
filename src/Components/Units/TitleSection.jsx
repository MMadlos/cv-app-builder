import Button from "./Buttons"

const titles = {
	experience: {
		edit: "Editar experiencia",
		add: "Añadir experiencia",
		show: "Experiencia",
	},
	personal: {
		edit: "Editar información",
	},
	education: {
		edit: "Editar formación",
		add: "Añadir formación",
		show: "Formación",
	},
}

function getTitle(titleList, sectionName, titleType) {
	return titleList[sectionName][titleType]
}

function TitleSection({ titleType, sectionName, onClickReturn, onClickAdd }) {
	const title = getTitle(titles, sectionName, titleType)

	if (titleType === "edit" || titleType === "add") {
		return (
			<div className="title">
				<Button
					type="return"
					onClick={onClickReturn}
				/>
				<h1>{title}</h1>
			</div>
		)
	}

	return (
		<div className="title-container">
			<h2>{title}</h2>
			<Button
				type="add"
				onClick={onClickAdd}
			/>
		</div>
	)
}

export default TitleSection
