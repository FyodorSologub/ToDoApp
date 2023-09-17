import { TaskCreation } from "../features/TaskCreation"
import { TaskList } from "../features/TaskList"
import { TaskFilters } from "../features/TasksFilters"

export function Main() {
    return (
        <div className="bg-slate-100 h-screen w-screen flex flex-col justify-center items-center">
            <h1 className="font-sans text-6xl antialiased font-thin tracking-wide text-center mb-5 md:mb-8 text-slate-600">todos</h1>
            <div className="relative flex flex-col w-full md:w-4/6 lg:w-3/6 h-full md:h-4/6 bg-white shadow-lg rounded-md">
                <TaskCreation />
                <TaskList />
                <TaskFilters />
            </div>
        </div>
    )
}