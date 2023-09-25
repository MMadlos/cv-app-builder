const examplePersonalInfo = {
	name: "Name Lastname",
	location: "City, Country",
	email: "Name_Lastname@example.com",
	linkedin: "linkedin/name-lastname",
}

const exampleExperienceInfo = [
	{
		id: 0,
		companyName: "Linkedin",
		position: "Project Manager",
		currentPosition: false,
		startDate: "2015",
		endDate: "2020",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium voluptatibus unde, cumque omnis sed? ",
	},
	{
		id: 1,
		companyName: "Google",
		position: "Project Manager",
		currentPosition: true,
		startDate: "2020",
		endDate: "2023",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium voluptatibus unde, cumque omnis sed? ",
	},
	{
		id: 2,
		companyName: "Meta",
		position: "Software engineer",
		currentPosition: false,
		startDate: "1997",
		endDate: "2015",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium voluptatibus unde, cumque omnis sed? ",
	},
]

const exampleEducation = [
	{
		id: 0,
		title: "Business Degree",
		center: "BAS",
		date: "2019",
	},
	{
		id: 1,
		title: "Máster Degree",
		center: "EADE",
		date: "2023",
	},
]

const exampleData = {
	personal: examplePersonalInfo,
	experience: exampleExperienceInfo,
	education: exampleEducation,
}

export { examplePersonalInfo, exampleExperienceInfo, exampleData }
