import { ITask } from "@/types";
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2 } from "lucide-react";

interface IProps {
    tasks : ITask
}

function TaskCard({tasks} : IProps) {
  return (
    <div className="p-4  border-[0.5px] border-gray-600 rounded-md ">
      <div className="flex items-center justify-between ">
      <div>
        <h4 className="text-lg font-medium">{tasks.title}</h4>
      </div>
      <div className="flex items-center gap-2">
        <span className="cursor-pointer"><Trash2 color="red" /></span>
        <Checkbox />
      </div>
      </div>
      <div className="pt-4 ">
        
        <p>{tasks.description}</p>
      </div>
    </div>
  );
}

export default TaskCard;
