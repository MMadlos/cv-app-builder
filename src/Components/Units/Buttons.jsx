function Button({ type, id, onClick, datasetEditSection }) {
	if (type === "save") {
		return (
			<button
				id={id}
				onClick={onClick}>
				Guardar
			</button>
		)
	}
	if (type === "delete") {
		return (
			<button
				className="delete-experience"
				onClick={onClick}>
				Eliminar
			</button>
		)
	}
	if (type === "add") {
		return <button onClick={onClick}>Añadir</button>
	}
	if (type === "return") {
		return (
			<button
				className="not-button"
				onClick={onClick}
				data-edit-section={datasetEditSection}>
				<i className="fa-solid fa-chevron-left"></i>
			</button>
		)
	}
}

export default Button
