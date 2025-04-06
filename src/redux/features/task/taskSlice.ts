import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    task: ITask[]
}

const initialState : IInitialState = {
    task: [
        {
            id: 'adasfsdfj',
            title: 'slkjasd',
            description: 'lkasdffj',
            dueDate: '21-25-2021',
            isComplete: false,
            priority: 'High'
        },
    ]
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})



export default taskSlice.reducer