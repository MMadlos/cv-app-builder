import FormInput from "./Units/edit-form"
import TitleSection from "./Units/TitleSection"

function EditPersonalDetails({ onClickReturn, dataToEdit, onChange, onClickSave }) {
	const { fullName, location, email, linkedin } = dataToEdit

	return (
		<section className="edit-info edit">
			<TitleSection
				isEdit={true}
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
					dataKey="location"
					placeholder="Paris, Francia"
				/>
				<FormInput
					id="email"
					labelName="Email"
					onChange={onChange}
					value={email}
					dataKey="email"
					placeholder="paquito_peras@ejemplo.com"
					type="email"
				/>
				<FormInput
					id="linkedin"
					labelName="Linkedin"
					onChange={onChange}
					value={linkedin}
					dataKey="linkedin"
					placeholder="paquito_peras@ejemplo.com"
				/>
			</div>

			<button
				id="save-info"
				onClick={onClickSave}>
				Guardar
			</button>
		</section>
	)
}

export default EditPersonalDetails
