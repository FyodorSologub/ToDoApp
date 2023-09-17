import { useDispatch, useSelector } from "react-redux";
import { TasksSliceActions } from '../store/tasksSlice/TasksSlice';

export function TaskFilters() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const taskList = useSelector((state) => state.TasksSlice.taskList);
    const filter = useSelector((state) => state.TasksSlice.filter);

    // state setters
    const dropFilter = () => dispatch(TasksSliceActions.dropFilter());
    const setFilterDone = () => dispatch(TasksSliceActions.setFilterDone());
    const setFilterNotDone = () => dispatch(TasksSliceActions.setFilterNotDone());
    const clearCompleteTasks = () => dispatch(TasksSliceActions.clearCompleteTasks());
    
    // handlers
    const handleChangeFilter = (filter) => {
        switch(filter) {
            case 'none':
                return dropFilter();
            case 'isNotDone':
                return setFilterNotDone();
            case 'isDone':
                return setFilterDone();
        }
    };

    // utils
    const getClasses = (option) => option === filter ?  "text-xs md:text-base font-thin tracking-normal text-slate-500 border hover:border-slate-600 p-2 rounded-sm border-slate-600" : "text-xs md:text-base font-thin tracking-normal text-slate-500 border border-white hover:border-slate-600 p-2 rounded-sm";

    return (
        <div className="w-full px-2 md:px-10 py-2 md:py-7 flex justify-between items-center md:gap-x-2 border-t border-slate-100">
            <div className="w-full">
                <p className="text-xs md:text-base font-thin tracking-normal text-slate-500">{ taskList.filter(elem => !elem.isDone).length ? taskList.filter(elem => !elem.isDone).length : 'no' } tasks left</p>
            </div>
            <div className="w-full flex gap-x-2 justify-center items-center">
                <button onClick={event => handleChangeFilter('none')} className={ getClasses('none') }>All</button>
                <button onClick={event => handleChangeFilter('isNotDone')} className={ getClasses('isNotDone') }>Active</button>
                <button onClick={event => handleChangeFilter('isDone')} className={ getClasses('isDone') }>Completed</button>
            </div>
            <div className="w-full flex justify-end">
                <button onClick={ clearCompleteTasks } className="text-xs md:text-base font-thin tracking-normal text-slate-500">Clear completed</button>
            </div>
        </div>
    )
}