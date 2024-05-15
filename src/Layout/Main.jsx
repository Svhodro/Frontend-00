import { Outlet } from "react-router-dom"
import Footer from "../pages/Home/Footer/Footer"
import Nav from "../pages/Home/Navber/Nav"


function Main() {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main