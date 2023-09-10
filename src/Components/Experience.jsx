import CardExperience from "./Units/CardExperience"

function Experience({ experienceData, onClickEdit }) {
	return (
		<section className="experience">
			<div className="title-container">
				<h2>Experiencia laboral</h2>
				<button>Añadir</button>
			</div>
			<div className="cards-container">
				{experienceData.map((experience) => {
					return (
						<CardExperience
							key={experience.id}
							experienceData={experience}
							onClick={onClickEdit}
							dataKey={experience.id}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Experience
