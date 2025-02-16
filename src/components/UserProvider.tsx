import {useState, useContext} from "react"
import {UserProfile} from "./UserContext"

const UserProvider = () => {
	const {profile, setProfile} = useContext(UserProfile)

	const [name, setName] = useState("")
	const [age, setAge] = useState()
	const [occupation, setOccupation] = useState("")
	

	const handleClick = () => {
		setProfile({
			name: name,
			age: age,
			occupation: occupation,
		})

		setAge()
		setName("")
		setOccupation("")
	}
	return (
		<div>
			<div>
				<h1>Name: {profile.name}</h1>
				<h2>Age: {profile.age}</h2>
				<h3>Occupation: {profile.occupation} </h3>
			</div>	
			
			<input type="text" placeholder="Enter yourname" onChange={(e)=> setName(e.target.value)}/>
			<input type="number" placeholder="Enter your Age" onChange={(e)=> setAge(e.target.value)}/>
			
			<input type="text" placeholder="Enter your Occupation" onChange={(e)=> setOccupation(e.target.value)}/>
		
		<button onClick={handleClick}>Update Info</button>
		</div>

	)
}

export default UserProvider;
