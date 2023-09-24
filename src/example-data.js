const examplePersonalInfo = {
	name: "Paquito Peras",
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

const exampleEducation = [
	{
		id: 0,
		title: "Administración y dirección de empresas",
		center: "UAB",
		date: "2019",
	},
	{
		id: 1,
		title: "Máster en UX/UI Design, Product Design",
		center: "Nuclio School",
		date: "2023",
	},
]

const emptyEducation = {
	id: null,
	title: "",
	center: "",
	date: "",
}

const exampleData = {
	personal: examplePersonalInfo,
	experience: exampleExperienceInfo,
	education: exampleEducation,
}

export { examplePersonalInfo, exampleExperienceInfo, emptyExperience, exampleEducation, emptyEducation, exampleData }
