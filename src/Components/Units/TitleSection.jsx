import Button from "./Buttons"

const titleList = {
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

function TitleSection({ titleType, sectionName, onClickReturn, onClickAdd }) {
	const title = titleList[sectionName][titleType]
	const isShowType = titleType === "show"

	return isShowType ? (
		<div className="title-container">
			<h2>{title}</h2>
			<Button
				type="add"
				onClick={onClickAdd}
			/>
		</div>
	) : (
		<div className="title">
			<Button
				type="return"
				onClick={onClickReturn}
			/>
			<h1>{title}</h1>
		</div>
	)
}

export default TitleSection
