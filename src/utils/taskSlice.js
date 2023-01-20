import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    listT:[]
}

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