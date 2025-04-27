import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
    tasks : ITask
}

function TaskCard({tasks} : IProps) {

  const dispatch = useAppDispatch()


  return (
    <div className="p-4  border-[0.5px] border-gray-600 rounded-md ">
      <div className="flex items-center justify-between ">
      <div className="flex items-center gap-2">
        <div className={cn("w-4 h-4 rounded-full", {
          'bg-green-400' : tasks.priority === 'Low',
          'bg-yellow-400' : tasks.priority === 'Medium',
          'bg-red-400' : tasks.priority === 'High'
        })}>
        </div>
        <h4 className="text-lg font-medium">{tasks.title}</h4>
      </div>
      <div className="flex items-center gap-2">
        <span onClick={() => dispatch(deleteTask())} className="cursor-pointer"><Trash2 size={20} color="red" /></span>
       <Checkbox defaultValue={tasks.isComplete} className="size-5"/> 
      </div>
      </div>
      <div className="pt-4 ">
        <p>{tasks.description}</p>
      </div>
    </div>
  );
}

export default TaskCard;
