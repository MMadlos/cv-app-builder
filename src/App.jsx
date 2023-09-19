import "./styles/Reset.css"
import "./styles/App.css"

import Aside from "./Components/Sections/Aside"
import PersonalDetails from "./Components/Sections/PersonalDetails"
import Experience from "./Components/Sections/Experience"
import Education from "./Components/Sections/Education"

function App() {
	return (
		<main>
			<Aside />
			<PersonalDetails />
			<Experience />
			<Education />
		</main>
	)
}

export default App
