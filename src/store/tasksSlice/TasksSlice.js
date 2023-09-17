import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";

export const TasksSlice = createSlice (
    {
        name: "TasksSlice",

        initialState: defaultState,

        reducers: {
            addTask(state, actions) { state.taskList.push( {text: actions.payload.task, isDone: false} ) },
            removeTask(state, actions) { state.taskList = state.taskList.filter(elem => elem !== actions.task) },
            updateTaskInputValue(state, actions) {state.taskInputValue = actions.payload.newValue},
            checkTask(state, actions) { state.taskList[actions.payload.taskId].isDone = !state.taskList[actions.payload.taskId].isDone },
            dropFilter(state) {state.filter = 'none'},
            setFilterDone(state) {state.filter = 'isDone'},
            setFilterNotDone(state) {state.filter = 'isNotDone'},
            clearCompleteTasks(state) {state.taskList = state.taskList.filter(elem => !elem.isDone)},
        }
    }
)

export const TasksSliceActions = TasksSlice.actions;

