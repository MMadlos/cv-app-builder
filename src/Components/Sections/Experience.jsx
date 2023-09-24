import ShowExperience from "../Templates/ShowExperience"
import EditExperience from "../Templates/EditExperience"

function Experience({ data, titleType, isEdit, onClickEdit, onClickAdd, onClickReturn, onChange, onClickSave, showDeleteBtn, onClickDelete }) {
	return isEdit ? (
		<EditExperience
			dataToEdit={data}
			titleType={titleType}
			onChange={onChange}
			onClickReturn={onClickReturn}
			onClickSave={onClickSave}
			onClickDelete={onClickDelete}
			showDeleteBtn={showDeleteBtn}
		/>
	) : (
		<ShowExperience
			titleType={"show"}
			experienceData={data}
			onClickEdit={onClickEdit}
			onClickAdd={onClickAdd}
		/>
	)
}

export default Experience
