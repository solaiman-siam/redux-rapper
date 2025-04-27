import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
interface IInitialState {
    tasks: ITask[],
    filter: 'all' | 'hight' | 'medium' | 'low'
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "rjP3LTgs9nCPTvWFs9hWD",
      isComplete: false,
      title: "sdfsdf",
      priority: "Medium",
      description: "asdfsdf",
      dueDate: "2025-04-22T18:00:00.000Z",
    },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "description" | "dueDate" | "priority" | "title">;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isComplete: false,
    ...taskData,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    deleteTask: (state) => {
      state.tasks.pop();
    },
  },
});
export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
