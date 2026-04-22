import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectFilter, selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  console.log(tasks); //returns an array
  console.log(filter); //returns "all"
  return (
    <div className="w-7xl mx-auto">
      <div className="flex justify-between item-center">
        <h1 className="font-bold text-4xl mb-4">Tasks</h1>
        <Tabs defaultValue="all" className="ml-auto gap-2">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger onClick={()=> dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>

        <AddTaskModal />
      </div>
      {tasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
};
export default Tasks;
