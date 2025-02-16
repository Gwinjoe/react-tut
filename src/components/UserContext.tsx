import {useState, createContext} from "react"
import UserProvider from "./UserProvider"

export const UserProfile = createContext();

const UserContext = () => {
	const [profile, setProfile] = useState({
		name: "Gwin",
		age: 22,
		occupation: "Full-stack developer"
	})
	
	return (
		<UserProfile.Provider value={{profile, setProfile}}>
			<UserProvider/>
		</UserProfile.Provider>
	) 
}


export default UserContext;
