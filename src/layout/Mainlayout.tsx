import Navbar from "@/components/shared/Navbar"
import { Outlet } from "react-router"


function Mainlayout() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
        <Navbar/>
        <div className="max-w-[1200px] mx-auto">
        <Outlet/>
        </div>
    </div>
  )
}

export default Mainlayout