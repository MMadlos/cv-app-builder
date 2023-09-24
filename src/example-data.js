const examplePersonalInfo = {
	name: "Firstname Lastname",
	location: "City, Country",
	email: "Firstname_Lastname@example.com",
	linkedin: "linkedin/firstname-lastname",
}

const exampleExperienceInfo = [
	{
		id: 0,
		companyName: "Linkedin",
		position: "Manager",
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
		companyName: "Meta",
		position: "Team Lead",
		currentPosition: true,
		startDate: "1997",
		endDate: "2023",
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
