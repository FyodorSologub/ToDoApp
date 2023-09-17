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
    const handleUpdateCheckTask = (taskId) => checkTask(taskId);

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
        <div className="w-full h-full px-10 my-5 flex flex-col overflow-y-auto">
            <ul className="flex flex-col w-full h-full gap-y-3">
                { 
                    !taskList.length &&  
                        <div className="w-full h-full flex justify-center items-center text-1xl font-thin tracking-normal text-slate-300">your tasks will be here...</div>
                }
                
                {
                    taskList !== undefined && taskList.map((taskObj, id) =>
                        filtersMatch(taskObj) && 
                        <li 
                            key={id}
                            className="w-full flex gap-x-3 items-center"
                        >
                            <button 
                                onClick={ event => handleUpdateCheckTask(id) }
                                className={ getBtnClasses(taskObj.isDone) }
                            >
                                <svg className={ getIconClasses(taskObj.isDone) } xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                    <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                                </svg>
                            </button>
                            <p className={ getTextClasses(taskObj.isDone) }>{ taskObj.text }</p>
                        </li>   
                    )
                }
                

            </ul>
        </div>
    )
}