import CardExperience from "./Units/experience-card"

function Experience() {
	return (
		<section className="experience">
			<h2>Experiencia laboral</h2>
			<div className="cards-container">
				<CardExperience
					position="Nombre de la posición"
					companyName="Nombre empresa"
					startDate="2000"
					endDate="2020"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium voluptatibus unde, cumque omnis sed? "
				/>
				<div className="separator"></div>
				<CardExperience
					position="Nombre de la posición"
					companyName="Nombre empresa"
					startDate="2000"
					endDate="2020"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium voluptatibus unde, cumque omnis sed? Exercitationem delectus itaque sint beatae ipsam nisi reiciendis? Cupiditate, eos voluptatibus. Officia dolore corrupti sunt!"
				/>
				<div className="separator"></div>
				<CardExperience
					position="Nombre de la posición"
					companyName="Nombre empresa"
					startDate="2000"
					endDate="2020"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium voluptatibus unde, cumque omnis sed? Exercitationem delectus itaque sint beatae ipsam nisi reiciendis? "
				/>
			</div>
		</section>
	)
}

export default Experience
