import react from "react"
import {useEffect} from "react"
import Counter from "./components/Counter.tsx"
const App = () => {
	useEffect(() => {
	console.log("i am working");
	}, [])
	return (
		<div>
			<h1>UserProfile</h1>
			<p>This is suppose to be working</p>
			<Counter/>
		</div>
	)
}

export default App;
