function CardExperience({ position, companyName, startDate, endDate, description }) {
	return (
		<div className="experience-card">
			<h3>{position}</h3>
			<h4>{companyName}</h4>
			<p>{`(${startDate} - ${endDate})`}</p>
			<p>{description}</p>
		</div>
	)
}

export default CardExperience
