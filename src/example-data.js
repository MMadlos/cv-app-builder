const examplePersonalInfo = {
	fullName: "Paquito Peras",
	location: "Madrid, Spain",
	email: "paquito_peras@example.com",
	linkedin: "linkedin/paquito-peras",
}

const exampleExperienceInfo = [
	{
		id: 0,
		companyName: "Nombre empresa",
		position: "Nombre de la posición",
		currentPosition: false,
		startDate: "2013",
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
	{
		id: 2,
		companyName: "Google",
		position: "Team Lead",
		currentPosition: true,
		startDate: "1997",
		endDate: "2023",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium voluptatibus unde, cumque omnis sed? ",
	},
]

const emptyExperience = {
	id: null,
	companyName: "",
	position: "",
	currentPosition: false,
	startDate: "",
	endDate: "",
	description: "",
}

export { examplePersonalInfo, exampleExperienceInfo, emptyExperience }
