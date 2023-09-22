import ShowEducation from "../Templates/ShowEducation"
import EditEducation from "../Templates/EditEducation"

function Education({ data, isEdit, onClickAdd, onClickEdit, onClickReturn, onChange, onClickSave, titleType, showDeleteBtn, onClickDelete }) {
	return isEdit ? (
		<EditEducation
			titleType={titleType}
			dataToEdit={data}
			onChange={onChange}
			onClickReturn={onClickReturn}
			onClickSave={onClickSave}
			onClickDelete={onClickDelete}
			showDeleteBtn={showDeleteBtn}
		/>
	) : (
		<ShowEducation
			titleType={"show"}
			educationData={data}
			onClickAdd={onClickAdd}
			onClickEdit={onClickEdit}
		/>
	)
}

export default Education
