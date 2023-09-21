import FormInput from "../Units/FormInput"
import TitleSection from "../Units/TitleSection"
import Button from "../Units/Buttons"

function EditPersonalDetails({ titleType, onClickReturn, dataToEdit, onChange, onClickSave }) {
	const { fullName, location, email, linkedin } = dataToEdit

	return (
		<section
			className="edit-info edit"
			data-section="personal">
			<TitleSection
				titleType={titleType}
				onClickReturn={onClickReturn}
				sectionName="personal"
			/>

			<div className="form">
				<FormInput
					id="name"
					labelName="Nombre"
					onChange={onChange}
					value={fullName}
					dataKey="fullName"
					placeholder="Paquito Peras"
				/>
				<FormInput
					id="location"
					labelName="Localización"
					onChange={onChange}
					value={location}
					placeholder="Paris, Francia"
				/>
				<FormInput
					id="email"
					labelName="Email"
					onChange={onChange}
					value={email}
					placeholder="paquito_peras@ejemplo.com"
					type="email"
				/>
				<FormInput
					id="linkedin"
					labelName="Linkedin"
					onChange={onChange}
					value={linkedin}
					placeholder="linkedin.com/paquito-peras"
				/>
			</div>

			<Button
				type={titleType}
				id="save-info"
				onClick={onClickSave}
			/>
		</section>
	)
}

export default EditPersonalDetails
