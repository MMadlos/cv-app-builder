import CardExperience from "./Units/CardExperience"
import TitleSection from "./Units/TitleSection"

function Experience({ experienceData, onClickEdit, onClickAddExp }) {
	return (
		<section className="experience">
			<TitleSection
				sectionName="experience"
				onClickAdd={onClickAddExp}
			/>

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
