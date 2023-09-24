import Button from "./Buttons"

const titleList = {
	experience: {
		edit: "Edit experience",
		add: "Add experience",
		show: "Experience",
	},
	personal: {
		edit: "Edit personal information",
	},
	education: {
		edit: "Edit education",
		add: "Add education",
		show: "Education",
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
