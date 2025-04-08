import TaskCard from "@/components/module/task/TaskCard";
import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks"

function Tasks() {


    const tasks = useAppSelector(selectTask);
    // const filter = useAppSelector(selectFilter)/



  return (
    <div className="max-w-[1220px] mx-auto">
      <h3 className="pb-4">Tasks</h3>
      <div className="space-y-4">
        {
          tasks.map(task => (
            <TaskCard tasks={task} key={task.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Tasks