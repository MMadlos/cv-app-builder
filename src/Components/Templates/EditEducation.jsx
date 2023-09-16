import TitleSection from "../Units/TitleSection"
import FormInput from "../Units/FormInput"
import Button from "../Units/Buttons"

function EditEducation({ titleType, dataToEdit, onChange, onClickReturn, onClickSave, onClickDelete, isEdit, showDeleteBtn }) {
	const { title, center, date } = dataToEdit
	return (
		<section className="edit experience">
			<TitleSection
				titleType={titleType}
				isEdit={isEdit}
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
					labelName="Date"
					value={date}
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

export default EditEducation
