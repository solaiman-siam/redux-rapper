
import AddTaskDialog from "@/components/module/task/AddTaskDialog";
import { useGetTaskQuery } from "@/redux/api/baseApi";

function Tasks() {


  const {isError, isLoading, data} = useGetTaskQuery(undefined)

  console.log({data, isError, isLoading});



  return (
    <div className="max-w-[1220px] mx-auto">
      <div className="flex justify-between items-center pb-4">
      <h3 className="pb-4 text-lg font-semibold">Tasks</h3>
      <AddTaskDialog/>
      </div>
    
      <div className="space-y-4">
        
      </div>
    </div>
  )
}

export default Tasks