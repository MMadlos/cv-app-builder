import TitleSection from "../Units/TitleSection"
import CardEducation from "../Units/CardEducation"

function ShowEducation() {
	function onClickAdd() {}
	const testData = {
		title: "Titulo",
		center: "Ejemplo",
		date: "2023",
	}
	return (
		<section className="education">
			<TitleSection
				isEdit={false}
				sectionName="education"
				onClickAdd={onClickAdd}
			/>

			<div className="cards-container">
				<CardEducation
					dataKey={1}
					educationData={testData}
				/>
			</div>
			<div className="cards-container">
				<CardEducation
					dataKey={2}
					educationData={testData}
				/>
			</div>
		</section>
	)
}

export default ShowEducation
