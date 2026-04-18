import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[],
  filter: 'all' | "high" | "medium" | "low";
}


const initialState: InitialState = {
  tasks: [
    {
      id: "asdasdASd",
      title: "Developing Frontend",
      description: "The MVP needs to be done with in a week",
      dueDate: "2026-01",
      isCompleted: false,
      priority: "High"
    },
    {
      id: "axaxazaya",
      title: "Backend Init",
      description: "The backend needs to be started",
      dueDate: "2027-01",
      isCompleted: false,
      priority: "Medium"
    },
    {
      id: "xyzsasdtghadas",
      title: "GitHub repo",
      description: "All codes needs to be merged",
      dueDate: "2027-01",
      isCompleted: false,
      priority: "Low"
    }
  ],
  filter: "all"
}
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {}
})

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
}

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
}

export default taskSlice.reducer;