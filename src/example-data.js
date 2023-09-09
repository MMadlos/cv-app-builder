const examplePersonalInfo = {
	fullName: "FirstName LastName",
	location: "City, Country",
	email: "firstName_lastName@emailprovider.com",
	linkedin: "linkedin/firstname-lastname",
}

const exampleExperienceInfo = [
	{
		id: 0,
		companyName: "Nombre empresa",
		position: "Nombre de la posición",
		currentPosition: false,
		startDate: "2020",
		endDate: "2023",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium voluptatibus unde, cumque omnis sed? ",
	},
	{
		id: 1,
		companyName: "Google",
		position: "Team Lead",
		currentPosition: true,
		startDate: "2020",
		endDate: "2023",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium voluptatibus unde, cumque omnis sed? ",
	},
]

const emptyExperience = {
	id: 1,
	companyName: "",
	position: "",
	currentPosition: false,
	startDate: "",
	endDate: "",
	description: "",
}

export { examplePersonalInfo, exampleExperienceInfo, emptyExperience }
