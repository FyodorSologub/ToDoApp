import { useDispatch, useSelector } from "react-redux";
import { TasksSliceActions } from '../store/tasksSlice/TasksSlice';

export function TaskCreation() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const taskInputValue = useSelector((state) => state.TasksSlice.taskInputValue);

    // state setters
    const addTask = (task) => dispatch(TasksSliceActions.addTask({ task }));
    const updateTaskInputValue = (newValue) => dispatch(TasksSliceActions.updateTaskInputValue({ newValue }));

    // handlers
    const handleAddTask = () => {
        if(taskInputValue === undefined) return;

        switch(taskInputValue.length >= 1) {
            case true:
                addTask(taskInputValue); 
                updateTaskInputValue('');
                return;
            case false:
                return;
        }
    }
    const handleUpdateTaskInputValue = (event) => updateTaskInputValue(event.target.value);

    return (
        <div className="px-10 py-7 flex justify-start items-center gap-x-3 bg-zinc-50 ">
            <div className="w-full bg-white">
                <input 
                    value={ taskInputValue }
                    onInput={ handleUpdateTaskInputValue }
                    placeholder="New Task..."
                    className="block border border-slate-20 focus:border-slate-400 rounded-sm w-full text-start bg-transparent focus:outline-none px-4 py-2 text-2xl lg:text-xl font-sans font-thin"
                />
            </div>
            <button onClick={ handleAddTask }>
                <img 
                    className="font-thin leading-5 rotate-90 hover:cursor-pointer flex flex-col w-4 h-4 text-slate-500 hover:text-slate-950" src="https://img.icons8.com/material-sharp/24/plus-math--v1.png" alt="plus-math--v1"
                    
                />
            </button>
            
        </div>
    )
}