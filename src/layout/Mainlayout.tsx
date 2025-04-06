import Navbar from "@/components/shared/Navbar"
import { Outlet } from "react-router"


function Mainlayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Mainlayout