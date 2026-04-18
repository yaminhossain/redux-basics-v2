import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils";
import type { ITask } from "@/types"
import { Trash2 } from "lucide-react"

interface IProps {
  task: ITask;
}

function TaskCard({ task }: IProps) {
  return <div className="border rounded-md p-4 mb-4">
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <div className={cn("bg-green-400 size-3 rounded-full", {
          "bg-green-500": task.priority === "Low",
          "bg-yellow-500": task.priority === "Medium",
          "bg-red-500": task.priority === "High",
        })}></div>
        <p>{task.title}</p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <Button variant={"link"} className="p-0 text-red-500"><Trash2 /></Button>
        <Checkbox />
      </div>
    </div>
    <p>{task.description}</p>
  </div>

}

export default TaskCard