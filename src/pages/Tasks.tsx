import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook"

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter)

  console.log(tasks); //returns an array
  console.log(filter); //returns "all"
  return <div className="w-7xl mx-auto">
    <div className="flex justify-between item-center">
      <h1 className="font-bold text-4xl mb-4">Tasks</h1>
      <AddTaskModal/>
    </div>
    {tasks.map(task => <TaskCard task={task}/>)}
  </div>
}
export default Tasks