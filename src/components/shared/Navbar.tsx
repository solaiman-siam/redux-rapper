import { Link } from "react-router"
import { ModeToggle } from "../mode-toggle"


function Navbar() {
  return (
    <div className="flex max-w-[1200px] mx-auto py-8 items-center justify-between ">
      <div className="w-28">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/053/442/918/small_2x/collection-of-go-green-eco-friendly-icons-with-leaf-motifs-promoting-environmental-sustainability-png.png" alt="" />
      </div>
      <div className="flex items-center gap-4">
        <Link to={''}>Home</Link>
        <Link to={''}>About</Link>
        <Link to={''}>Features</Link>
      <ModeToggle/>
      </div>
    </div>
  )
}

export default Navbar