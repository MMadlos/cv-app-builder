import Button from "./Buttons"

const titles = {
	experience: {
		isEdit: {
			true: "Editar experiencia",
			false: "Experiencia",
		},
	},
	personal: {
		isEdit: {
			true: "Editar información personal",
		},
	},
}

function getTitle(titleList, sectionName, isEdit) {
	return titleList[sectionName].isEdit[isEdit]
}

function TitleSection({ isEdit = false, sectionName, onClickReturn, onClickAdd }) {
	const title = getTitle(titles, sectionName, isEdit)

	if (isEdit) {
		return (
			<div className="title">
				<Button
					type="return"
					className="not-button"
					onClick={onClickReturn}
					datasetEditSection={sectionName}
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
