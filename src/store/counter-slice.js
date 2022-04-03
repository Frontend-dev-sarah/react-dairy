import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    enableCounter: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        add(state, action) {
            state.counter = state.counter + action.payload
        },
        reduce(state, action) {
            state.counter = state.counter - action.payload
        },
        enableCounter(state) {
            state.enableCounter = !state.enableCounter
        }
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice;
