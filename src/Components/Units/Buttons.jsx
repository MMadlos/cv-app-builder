function Button({ type, id, onClick }) {
	if (type === "edit") {
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
				id={id}
				className="delete-experience"
				onClick={onClick}>
				Eliminar
			</button>
		)
	}
	if (type === "add") {
		return (
			<button
				id={id}
				onClick={onClick}>
				Añadir
			</button>
		)
	}
	if (type === "return") {
		return (
			<button
				id={id}
				className="not-button"
				onClick={onClick}>
				<i className="fa-solid fa-chevron-left"></i>
			</button>
		)
	}
}

export default Button
