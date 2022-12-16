import Home from "../components/prakash/Homepage/home"
import {Routes, Route} from "react-router-dom"


function Allroute(){
    return(
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        </Routes>

    )
}

export default Allroute;