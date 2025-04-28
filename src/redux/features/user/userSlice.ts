import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { deleteTask } from "../task/taskSlice";


interface IInitialState {
    userList : IUser[]
}

const initialState : IInitialState = {
    userList: [
        {
            id: '55455',
            name: 'Siam Khan'
        }
    ]
}

const userSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<Omit<IUser, 'id'>>) => {
            const id = nanoid()
            const userData = {id, ...action.payload}

            state.userList.push(userData)
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.userList = state.userList.filter(user => user.id !== action.payload)
        }

    },
    extraReducers: (builder) => {
        builder.addCase(deleteTask, (state, action) => {
            console.log(state.userList);
            console.log(action.payload);
        })
    }
})

export const selectUsers = (state : RootState) => {
    return state.users.userList
}


export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer