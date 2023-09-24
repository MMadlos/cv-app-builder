import { useState } from "react"
import profilePicture from "../../../public/Agumon2006_DM.jpg"

function ShowPersonalDetails({ personalInfo, onClick }) {
	const { name, location, email, linkedin } = personalInfo
	const [imageProfile, setImageProfile] = useState(profilePicture)

	function handleOnClickPicture() {
		const upload = document.getElementById("upload-picture")
		upload.click()
		upload.addEventListener("change", () => {
			const file = URL.createObjectURL(upload.files[0])
			setImageProfile(file)
		})
	}

	return (
		<section className="personal">
			<div className="personal-details-background"></div>
			<div className="personal-data">
				<div className="avatar-container">
					<img
						className="picture"
						src={imageProfile}
						alt="Image profile"
						onClick={handleOnClickPicture}
					/>
					<i className="fa-solid fa-pencil"></i>
					<input
						type="file"
						id="upload-picture"
						className="hidden"
						accept=".png, .jpg, .jpeg"
					/>
				</div>
				<div className="name">
					<h1>{name ? name : "My name"}</h1>
					<i
						className="fa-solid fa-pencil"
						onClick={onClick}></i>
				</div>
				<div className="additional-data">
					<div>
						<i className="fa-solid fa-location-dot"></i>
						<p>{location}</p>
					</div>

					<div>
						<i className="fa-solid fa-paper-plane"></i>
						<p>{email}</p>
					</div>

					<div>
						<i className="fa-brands fa-linkedin-in"></i>
						<p>{linkedin}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ShowPersonalDetails
