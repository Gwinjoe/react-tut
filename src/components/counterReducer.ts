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

export {initialState, reducer};
