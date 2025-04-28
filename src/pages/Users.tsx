import AddUserDialog from "@/components/module/users/AddUserDialog"
import { deleteUser, selectUsers } from "@/redux/features/user/userSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { MdDeleteOutline } from "react-icons/md";

function Users() {

  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch()

  


  return (
    <div>
        <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Users</h3>
        <div>
           <AddUserDialog/>
        </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-8">

          {
            users.map(user => (
              <div className="flex items-center justify-between border p-4 rounded-lg" key={user.id}> <h3>Name: {user.name}</h3> <MdDeleteOutline color="green" onClick={() => dispatch(deleteUser(user.id))} className="cursor-pointer" size={28} /> </div>
            ))
          }

        </div>
    </div>
  )
}

export default Users