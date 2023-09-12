import CardExperience from "../Units/CardExperience"
import TitleSection from "../Units/TitleSection"

function ShowExperience({ experienceData, onClickEdit, onClickAddExp, isEdit }) {
	return (
		<section className="experience">
			<TitleSection
				isEdit={isEdit}
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

export default ShowExperience
