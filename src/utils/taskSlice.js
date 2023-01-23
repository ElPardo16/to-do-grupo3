import { createSlice } from "@reduxjs/toolkit"

//is defined in the initial state and its content, which in this case is an empty array

const initialState = {
    listT:[]
}

//  renames the state, assigns to the initial state, and creates a reducer list to modify the state 
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        setTask: (state,action) => {
            state.listT = action.payload
        }
    }
})
export default taskSlice.reducer 
export const {setTask}= taskSlice.actions