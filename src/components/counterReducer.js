export const initialState = {count : 0} 
export const reducer = (action, state) => {
    switch (action.type) {
        case 'increment': 
            return {...state, state.count + 1}
       break;
        case 'decrement' : 
            return {...state, state.count - 1}
        break;
        default: 
            return {...state, state.count = 0}
        break;
    }    
}
