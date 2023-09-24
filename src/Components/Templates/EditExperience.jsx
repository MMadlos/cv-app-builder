import FormInput from "../Units/FormInput"
import TitleSection from "../Units/TitleSection"
import Button from "../Units/Buttons"

function EditExperience({ titleType, dataToEdit, onChange, onClickSave, onClickReturn, onClickDelete, isEdit, showDeleteBtn }) {
	const { companyName, position, currentPosition, startDate, endDate, description } = dataToEdit

	return (
		<section
			className="edit experience"
			data-section="experience">
			<TitleSection
				titleType={titleType}
				isEdit={isEdit}
				sectionName="experience"
				onClickReturn={onClickReturn}
			/>

			<div className="form">
				<FormInput
					id="companyName"
					labelName="Company's name"
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
						labelName="Current position"
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
					disabled={currentPosition}
				/>

				<FormInput
					type="textarea"
					id="description"
					labelName="Description"
					value={description}
					onChange={onChange}
				/>
			</div>

			<div className="btn-container">
				<Button
					type={titleType}
					id="save-info"
					onClick={onClickSave}
				/>
				{showDeleteBtn && (
					<Button
						type="delete"
						onClick={onClickDelete}
					/>
				)}
			</div>
		</section>
	)
}

export default EditExperience
