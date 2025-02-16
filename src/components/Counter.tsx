import react from "react"
import {useReducer} from "react"


const initialState = {count : 0} 
const reducer = (action, state) => {
    switch (action.type) {
        case 'increment': 
            return {...state, count : state.count + 1}
       break;
        case 'decrement' : 
            return {...state, count : state.count - 1}
        break;
        default: 
            return {...state, count :  0}
        break;
    }    
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => {dispatch({type: 'increment'})}}>+</button>
            <button onClick={() => {dispatch({type : "decrement"})}}>-</button>
            <button onClick={() => {dispatch({type: "reset"})}}>reset</button>
        </div>
    )
}

export default Counter;
