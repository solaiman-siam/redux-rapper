import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    tasks: ITask[],
    filter: 'all' | 'hight' | 'medium' | 'low'
}

const initialState : IInitialState = {
    tasks: [
        {
            id: 'asdfsdff',
            title: 'Title of Bangladesh',
            description: 'Here is the total details with most beautiful',
            dueDate: '21-25-2021',
            isComplete: true,
            priority: 'High'
        },
        {
            id: 'jasdfsdf',
            title: 'Title of Pakistan',
            description: 'Hilarious moment of bangladesh and historic',
            dueDate: '21-25-2021',
            isComplete: false,
            priority: 'Low'
        },
    ],
    filter: 'all'
}


export const selectTask = ((state : RootState) =>{
    return state.todo.tasks
})

export const selectFilter = ((state : RootState) => {
    return state.todo.filter
})

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})



export default taskSlice.reducer