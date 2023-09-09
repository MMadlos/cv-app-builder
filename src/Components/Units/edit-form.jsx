function FormInput({ id, onChange, value, dataKey, placeholder, labelName, type = "text" }) {
	return (
		<>
			<label htmlFor={id}>{labelName}</label>
			<input
				onChange={onChange}
				value={value}
				type={type}
				id={id}
				data-key={dataKey}
				placeholder={placeholder}
			/>
		</>
	)
}

export default FormInput
