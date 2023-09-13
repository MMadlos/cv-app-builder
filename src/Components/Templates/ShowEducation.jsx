import TitleSection from "../Units/TitleSection"
import CardEducation from "../Units/CardEducation"
import { exampleEducation } from "../../example-data"

function ShowEducation() {
	function onClickAdd() {}

	return (
		<section className="education">
			<TitleSection
				isEdit={false}
				sectionName="education"
				onClickAdd={onClickAdd}
			/>

			<div className="cards-container">
				{exampleEducation.map((education) => {
					return (
						<CardEducation
							key={education.id}
							educationData={education}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default ShowEducation
