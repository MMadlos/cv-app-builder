function FormTitle({ title, onClick, dataKey }) {
	return (
		<div className="title">
			<button
				className="not-button"
				onClick={onClick}
				data-edit-section={dataKey}>
				<i className="fa-solid fa-chevron-left"></i>
			</button>
			<h1>{title}</h1>
		</div>
	)
}

export default FormTitle
