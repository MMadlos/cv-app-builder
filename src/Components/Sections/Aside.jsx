function Aside() {
	function handleOnClickPrint() {
		window.print()
	}

	function handleOnClickResetData() {
		location.reload()
	}

	return (
		<aside>
			<button
				id="print"
				onClick={handleOnClickPrint}>
				<i className="fa-solid fa-print" />
				Preview / Print
			</button>
			<button
				id="reset-data"
				onClick={handleOnClickResetData}>
				Reset data
			</button>
		</aside>
	)
}

export default Aside
