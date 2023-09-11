import FormInput from "../Units/FormInput"
import TitleSection from "../Units/TitleSection"
import Button from "../Units/Buttons"

function EditExperience({ editExperience, onChange, onClickSaveExp, onClickReturn }) {
	const { companyName, position, currentPosition, startDate, endDate, description } = editExperience

	return (
		<section className="edit experience">
			<TitleSection
				isEdit={true}
				sectionName="experience"
				onClickReturn={onClickReturn}
			/>

			<div className="form">
				<FormInput
					id="companyName"
					labelName="Company name"
					value={companyName}
					onChange={onChange}
				/>
				<FormInput
					id="position"
					labelName="Position"
					value={position}
					onChange={onChange}
				/>

				<div className="checkbox-container">
					<FormInput
						type="checkbox"
						id="currentPosition"
						checked={currentPosition}
						onChange={onChange}
						labelName="Cargo actual"
					/>
				</div>
				<FormInput
					id="startDate"
					labelName="Start date"
					value={startDate}
					onChange={onChange}
				/>
				<FormInput
					id="endDate"
					labelName="End date"
					value={endDate}
					onChange={onChange}
				/>

				<FormInput
					type="textarea"
					id="description"
					value={description}
					onChange={onChange}
				/>
			</div>

			<div className="btn-container">
				<Button
					type="save"
					id="save-info"
					onClick={onClickSaveExp}
				/>
				<Button type="delete" />
			</div>
		</section>
	)
}

export default EditExperience
