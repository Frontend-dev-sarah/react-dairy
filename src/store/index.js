// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import authSlice from "./auth-slice";
import counterSlice from './counter-slice';

const initialState = {
    counter: 0,
    enableCounter: false
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.payload,
            }
        case 'REDUCE':
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case 'ENABLE_COUNTER':
            return {
                ...state,
                enableCounter: !state.enableCounter
            }
        default:
            return state
    }

}

// regular redux setup store
//const store = createStore(reducer);

//redux toolkit setup store
const storeT = configureStore({
    reducer: { authSlice: authSlice.reducer, counterSlice: counterSlice.reducer }
})


// export default store;
export default storeT;