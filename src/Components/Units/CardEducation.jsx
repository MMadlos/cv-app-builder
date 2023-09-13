function CardEducation({ dataKey, onClick, educationData }) {
	const { title, center, date } = educationData
	return (
		<div
			className="card-education"
			data-key={dataKey}>
			<div className="card-title-container">
				<h3>{title}</h3>
				<i
					className="fa-solid fa-pencil"
					onClick={onClick}></i>
			</div>
			<div className="education-container">
				<h4>{center}</h4>
				<p>{date}</p>
			</div>
		</div>
	)
}

export default CardEducation
