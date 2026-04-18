import { Link } from "react-router"
import { ModeToggle } from "./mode-toggle"

function Navbar(){
  return <div className="flex items-center justify-center py-5">
  <ul className="flex gap-4">
    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/users"}>Users</Link></li>
    <li><Link to={"/tasks"}>Tasks</Link></li>
    <li><Link to={"/lab"}>Laboratory</Link></li>
    <ModeToggle/>
  </ul>
  </div>
}
export default Navbar