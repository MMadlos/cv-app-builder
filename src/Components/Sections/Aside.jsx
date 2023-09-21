function Aside({ onClickPrint, onClickReset }) {
	return (
		<aside>
			<button
				id="print"
				onClick={onClickPrint}>
				<i className="fa-solid fa-print" />
				Preview / Print
			</button>
			<button
				id="reset-data"
				onClick={onClickReset}>
				Reset data
			</button>
		</aside>
	)
}

export default Aside
