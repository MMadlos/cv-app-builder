function FormInput({ id, onChange, value, dataKey, placeholder, labelName, type = "text", checked, disabled = false }) {
	return (
		<>
			<label htmlFor={id}>{labelName}</label>
			{type === "textarea" ? (
				<textarea
					name={id}
					id={id}
					rows="5"
					placeholder="Describe tus funciones en la empresa"
					data-key={dataKey ?? id}
					value={value}
					onChange={onChange}></textarea>
			) : (
				<input
					onChange={onChange}
					value={value}
					type={type}
					id={id}
					data-key={dataKey ?? id}
					placeholder={placeholder ?? labelName}
					checked={checked}
					disabled={disabled}
				/>
			)}
		</>
	)
}

export default FormInput
