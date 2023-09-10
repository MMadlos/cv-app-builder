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

function TitleSection({ isEdit = false, sectionName, onClickReturn, onClickAdd }) {
	const title = titles[sectionName].isEdit[isEdit]

	return isEdit ? (
		<div className="title">
			<button
				className="not-button"
				onClick={onClickReturn}
				data-edit-section={sectionName}>
				<i className="fa-solid fa-chevron-left"></i>
			</button>
			<h1>{title}</h1>
		</div>
	) : (
		<div className="title-container">
			<h2>{title}</h2>
			<button onClick={onClickAdd}>Añadir</button>
		</div>
	)
}

export default TitleSection
