import { useDispatch, useSelector } from "react-redux";
import { TasksSliceActions } from '../store/tasksSlice/TasksSlice';

export function TaskList() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const taskList = useSelector((state) => state.TasksSlice.taskList);
    const filter = useSelector((state) => state.TasksSlice.filter);

    // state setters
    const checkTask = (taskId) => dispatch(TasksSliceActions.checkTask({ taskId }));

    // handlers
    const handleUpdateCheckTask = (taskId) => { taskId !== undefined && checkTask(taskId); } 

    // utils
    const getBtnClasses = (isDone) => {
        switch(isDone) {
            case true:
                return "text-thin border border-green-600 p-1 rounded-full flex justify-center items-center w-5 h-5 flex mt-1";
            case false:
                return "text-thin border border-slate-500 p-1 rounded-full flex justify-center items-center w-5 h-5 flex mt-1";
        }
    }
    const getIconClasses = (isDone) => {
        switch(isDone) {
            case true:
                return "fill-green-600";
            case false:
                return "hidden";
        }
    }
    const getTextClasses = (isDone) => {
        switch(isDone) {
            case true:
                return "text-3xl font-sans font-thin antialiased text-slate-300 line-through decoration-1 decoration-slate-300";
            case false:
                return "text-3xl font-sans font-thin antialiased text-slate-500";
        }
    }
    const filtersMatch = (taskObg) => {
        switch(filter) {
            case 'none':
                return true;
            case 'isDone':
                return taskObg.isDone === true;
            case 'isNotDone':
                return taskObg.isDone === false;
        }
    }

    return (
        <div className="w-full h-full px-10 my-4 flex flex-col overflow-y-auto">
            <ul className="flex flex-col w-full h-full gap-y-3">
                { 
                    taskList.length === 0 &&  
                        <div className="w-full h-full flex justify-center items-center text-1xl font-thin tracking-normal text-slate-300">your tasks will be here...</div>
                }

                {
                    taskList.length > 0 && taskList.map((taskObj, id) =>
                        filtersMatch(taskObj) && 
                        <li 
                            key={id}
                            className="w-full flex gap-x-3 items-center"
                        >
                            <button 
                                onClick={ () => handleUpdateCheckTask(id) }
                                className={ getBtnClasses(taskObj.isDone) }
                            >
                                <img className={ getIconClasses(taskObj.isDone) } width="24" height="24" src="https://img.icons8.com/material-outlined/24/checkmark--v1.png" alt="checkmark--v1"/>
                            </button>
                            <p className={ getTextClasses(taskObj.isDone) }>{ taskObj.text }</p>
                        </li>   
                    )
                }
            </ul>
        </div>
    )
}