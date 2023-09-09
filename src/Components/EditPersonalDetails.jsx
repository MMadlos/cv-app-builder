import FormTitle from "./Units/edit-title"
import FormInput from "./Units/edit-form"

function EditPersonalDetails({ onClickReturn, dataToEdit, onChange, onClickSave }) {
	const { fullName, location, email, linkedin } = dataToEdit

	return (
		<section className="edit-info edit">
			<FormTitle
				title="Editar información"
				onClick={onClickReturn}
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
