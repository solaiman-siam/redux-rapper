import { selectFilter, selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks"

function Tasks() {


    const tasks = useAppSelector(selectTask);
    const filter = useAppSelector(selectFilter)


    console.log(tasks);
    console.log(filter);


  return (
    <div>Tasks</div>
  )
}

export default Tasks