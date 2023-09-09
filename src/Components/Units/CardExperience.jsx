function CardExperience({ experienceData, dataKey, onClick }) {
	const { position, companyName, startDate, endDate, description, currentPosition } = experienceData

	const showEndDate = currentPosition ? "Now" : endDate

	return (
		<div
			className="experience-card"
			data-key={dataKey}>
			<h3>{position}</h3>
			<i
				className="fa-solid fa-pencil"
				onClick={onClick}></i>

			<div className="company-container">
				<h4>{companyName}</h4>
				<p>{`(${startDate} - ${showEndDate})`}</p>
			</div>
			<p>{description}</p>
		</div>
	)
}

export default CardExperience
