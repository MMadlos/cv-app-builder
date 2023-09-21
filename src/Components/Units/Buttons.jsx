function Button({ type, id, onClick }) {
	const isReturn = type === "return"
	const isDelete = type === "delete"

	const textBtn = {
		edit: "Guardar",
		delete: "Eliminar",
		add: "Añadir",
		return: "",
	}

	return (
		<button
			id={id}
			className={isDelete ? "delete-experience" : isReturn ? "not-button" : ""}
			onClick={onClick}>
			{textBtn[type]}
			{isReturn && <i className="fa-solid fa-chevron-left"></i>}
		</button>
	)
}

export default Button
