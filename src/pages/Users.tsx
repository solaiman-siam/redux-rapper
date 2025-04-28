import AddUserDialog from "@/components/module/users/AddUserDialog"

function Users() {


  


  return (
    <div>
        <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Users</h3>
        <div>
           <AddUserDialog/>
        </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-8">
        </div>
    </div>
  )
}

export default Users