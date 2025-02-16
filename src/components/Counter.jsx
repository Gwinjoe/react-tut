import react from "react"
import {initialState, reducer} from "./counterReducer.js";
import {useReducer} from "react"

export default Counter = () => {
    const [count, setCount] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Counter: {count}</h1>

        </div>
    )
}

