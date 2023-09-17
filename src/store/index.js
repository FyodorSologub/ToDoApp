// redux
import { configureStore } from "@reduxjs/toolkit";

// slices
import { TasksSlice } from "./tasksSlice/TasksSlice";

export const store = configureStore(
    {
        reducer: {
            TasksSlice: TasksSlice.reducer,
        },
    }
);