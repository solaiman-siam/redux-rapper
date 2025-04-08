import Navbar from "@/components/shared/Navbar"
import { Outlet } from "react-router"


function Mainlayout() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Mainlayout