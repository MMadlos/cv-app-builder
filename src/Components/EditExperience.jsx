import FormTitle from "./Units/edit-title"
import FormInput from "./Units/edit-form"

function EditExperience({ editExperience, onChange, onClickSaveExp, onClickReturn }) {
	const { companyName, position, currentPosition, startDate, endDate, description } = editExperience

	return (
		<section className="edit experience">
			<FormTitle
				title="Editar experiencia"
				onClick={onClickReturn}
				dataKey="experience"
			/>

			<div className="form">
				<FormInput
					id="companyName"
					labelName="Company name"
					placeholder="Company name"
					dataKey="companyName"
					value={companyName}
					onChange={onChange}
				/>
				<FormInput
					id="position"
					labelName="Position"
					placeholder="Position"
					dataKey="position"
					value={position}
					onChange={onChange}
				/>

				<div className="checkbox">
					<FormInput
						type="checkbox"
						id="currentPosition"
						data-key="currentPosition"
						checked={currentPosition}
						onChange={onChange}
						labelName="Cargo actual"
					/>
				</div>
				<FormInput
					id="startDate"
					labelName="Start date"
					placeholder="Start date"
					dataKey="startDate"
					value={startDate}
					onChange={onChange}
				/>
				<FormInput
					id="endDate"
					labelName="End date"
					placeholder="End date"
					dataKey="endDate"
					value={endDate}
					onChange={onChange}
				/>

				<textarea
					name="description"
					id="description"
					rows="5"
					placeholder="Describe tus funciones en la empresa"
					data-key="description"
					value={description}
					onChange={onChange}></textarea>
			</div>

			<div className="btn-container">
				<button
					id="save-info"
					onClick={onClickSaveExp}>
					Guardar
				</button>
				<button className="delete-experience">Eliminar experiencia</button>
			</div>
		</section>
	)
}

export default EditExperience
