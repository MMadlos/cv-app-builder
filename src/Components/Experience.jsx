import CardExperience from "./Units/CardExperience"

function Experience({ experienceData }) {
	const { position, companyName, startDate, endDate, description, id } = experienceData

	return (
		<section className="experience">
			<h2>Experiencia laboral</h2>
			<div className="cards-container">
				<CardExperience
					key={1}
					position={position}
					companyName={companyName}
					startDate={startDate}
					endDate={endDate}
					description={description}
				/>
				<div className="separator"></div>
				<CardExperience
					key={2}
					position={position}
					companyName={companyName}
					startDate={startDate}
					endDate={endDate}
					description={description}
				/>
				<div className="separator"></div>
				<CardExperience
					key={3}
					position={position}
					companyName={companyName}
					startDate={startDate}
					endDate={endDate}
					description={description}
				/>
			</div>
		</section>
	)
}

export default Experience
