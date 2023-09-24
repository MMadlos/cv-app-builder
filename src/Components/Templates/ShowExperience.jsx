import CardExperience from "../Units/CardExperience"
import TitleSection from "../Units/TitleSection"

function ShowExperience({ titleType, experienceData, onClickEdit, onClickAdd }) {
	const sortedExperience = experienceData.sort((a, b) => b.startDate - a.startDate)

	return (
		<section className="experience">
			<TitleSection
				titleType={titleType}
				isEdit={false}
				sectionName="experience"
				onClickAdd={onClickAdd}
			/>

			<div className="cards-container">
				{sortedExperience.map((experience) => {
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

export default ShowExperience
