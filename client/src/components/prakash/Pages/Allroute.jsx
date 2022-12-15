import {Routes, Route} from "react-router-dom"
import Home from "./Home/home"

function Allroutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    )
}

export default Allroutes;