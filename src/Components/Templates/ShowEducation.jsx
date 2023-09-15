import TitleSection from "../Units/TitleSection"
import CardEducation from "../Units/CardEducation"

function ShowEducation({ educationData, onClickAdd, onClickEdit }) {
	const sortedEducation = educationData.sort((a, b) => b.date - a.date)

	return (
		<section className="education">
			<TitleSection
				isEdit={false}
				sectionName="education"
				onClickAdd={onClickAdd}
			/>

			<div className="cards-container">
				{sortedEducation.map((education) => {
					return (
						<CardEducation
							key={education.id}
							educationData={education}
							onClick={onClickEdit}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default ShowEducation
