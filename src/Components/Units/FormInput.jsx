function FormInput({ id, onChange, value, dataKey, placeholder, labelName, type = "text" }) {
	if (type === "textarea") {
		return (
			<textarea
				name={id}
				id={id}
				rows="5"
				placeholder="Describe tus funciones en la empresa"
				data-key={dataKey ?? id}
				value={value}
				onChange={onChange}></textarea>
		)
	}

	return (
		<>
			<label htmlFor={id}>{labelName}</label>
			<input
				onChange={onChange}
				value={value}
				type={type}
				id={id}
				data-key={dataKey ?? id}
				placeholder={placeholder ?? labelName}
			/>
		</>
	)
}

export default FormInput
