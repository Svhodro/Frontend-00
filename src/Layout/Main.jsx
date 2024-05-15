import { Outlet } from "react-router-dom"
import Footer from "../pages/Home/Footer/Footer"


function Main() {
  return (
    <div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main