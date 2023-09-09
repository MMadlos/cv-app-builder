function CardExperience({ position, companyName, startDate, endDate, description }) {
	return (
		<div className="experience-card">
			<h3>{position}</h3>
			<i className="fa-solid fa-pencil"></i>

			<div className="company-container">
				<h4>{companyName}</h4>
				<p>{`(${startDate} - ${endDate})`}</p>
			</div>
			<p>{description}</p>
		</div>
	)
}

export default CardExperience
