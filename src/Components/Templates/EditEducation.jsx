import TitleSection from "../Units/TitleSection"
import FormInput from "../Units/FormInput"
import Button from "../Units/Buttons"

function EditEducation({ onClickReturn, dataToEdit, onChange, onClickSave, onClickDelete }) {
	const { title, center, date } = dataToEdit
	return (
		<section className="edit experience">
			<TitleSection
				isEdit={true}
				sectionName="education"
				onClickReturn={onClickReturn}
			/>

			<div className="form">
				<FormInput
					id="title-education"
					labelName="Title"
					value={title}
					onChange={onChange}
				/>
				<FormInput
					id="center-education"
					labelName="Center's Name"
					value={center}
					onChange={onChange}
				/>
				<FormInput
					id="date-education"
					labelName="Certified date"
					value={date}
					onChange={onChange}
				/>
			</div>

			<div className="btn-container">
				<Button
					type="save"
					id="save-info"
					onClick={onClickSave}
				/>
				<Button
					type="delete"
					onClick={onClickDelete}
				/>
			</div>
		</section>
	)
}

export default EditEducation
