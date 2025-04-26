import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    tasks: ITask[],
    filter: 'all' | 'hight' | 'medium' | 'low'
}

const initialState : IInitialState = {
    tasks: [
        
    ],
    filter: 'all'
}




const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action : PayloadAction<ITask>) => {

            state.tasks.push(action.payload)
        }
    }
})
export const selectTask = ((state : RootState) =>{
    return state.todo.tasks
})

export const selectFilter = ((state : RootState) => {
    return state.todo.filter
})

export const {addTask} = taskSlice.actions

export default taskSlice.reducer