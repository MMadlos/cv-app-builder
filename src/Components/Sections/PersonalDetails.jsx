import EditPersonalDetails from "../Templates/EditPersonalDetails"
import ShowPersonalDetails from "../Templates/ShowPersonalDetails"

function PersonalDetails({ data, onClickReturn, dataToEdit, onChange, onClickSave, onClickEdit, isEdit }) {
	return isEdit ? (
		<EditPersonalDetails
			titleType="edit"
			onClickReturn={onClickReturn}
			dataToEdit={dataToEdit}
			onChange={onChange}
			onClickSave={onClickSave}
		/>
	) : (
		<ShowPersonalDetails
			titleType="show"
			personalInfo={data}
			onClick={onClickEdit}
		/>
	)
}

export default PersonalDetails
