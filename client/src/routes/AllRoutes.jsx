import { Flex } from "@chakra-ui/react";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Channels } from "../components/anjali/Channels";
import Footer from "../components/prakash/Components/Footer/Footer";
import Navbar from "../components/prakash/Components/Navbar/Navbar";
import AltNavbar from "../components/shubham/AltNavbar";
import CalendarComponent from "../components/shubham/Calendar";
import SideBar from "../components/shubham/SideBar";
import FacebookPage from "../pages/FacebookPage";
import Home from "../pages/Home";
import InstagramPage from "../pages/InstagramPage";
import LinkedinPage from "../pages/LinkedinPage";
import Login from "../pages/Login";
import Pricing from "../pages/PricePage";
import { Publishing } from "../pages/Publishing";
import Register from "../pages/Register";
import AdminPrivateAuth from "./AdminPrivateAuth";
import PublishingRoutes from "./PublishingRoutes";

const AllRoutes = () => {
  const location = useLocation();

  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/admin"
  ) {
    return (
      <Routes>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>               
      </Routes>
    );
  } else if (location.pathname === "/channels") {
    return (
      <>
        <>
          <AltNavbar />
        </>
        <>
          <Routes>
            <Route exact path="/channels" element={<Channels />}></Route>
          </Routes>
        </>
      </>
    );
  } else if (
    location.pathname === "/publishing" ||
    location.pathname === "/publishing/calender" ||
    location.pathname === "/publishing/facebook" ||
    location.pathname === "/publishing/instagram" ||
    location.pathname === "/publishing/linkedin"
  ) {
    return (
      <>
        <AltNavbar />
        <Flex justifyContent="space-around">
          <SideBar />
          <PublishingRoutes />
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <>
          <Navbar />
        </>
        <>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/pricing" element={<Pricing />}></Route>
          </Routes>
        </>
        <>
          <Footer />
        </>
      </>
    );
  }
};

// const AllRoutes = ()=>{
//   return(
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/pricing" element={<Pricing/>}/>
//       {/* <Route path="/blogs" element={<Blogs/>}/> */}
//       <Route path="/publishing" element={<Publishing/>}>
//         <Route path="/calender" element={<CalendarComponent/>}/>
//         <Route path="/facebook" element={<FacebookPage/>}/>
//         <Route path="/instagram" element={<InstagramPage/>}/>
//         <Route path="/linkedin" element={<LinkedinPage/>}/>
//         <Route path="/channels" element={<Channels/>}/>
//       </Route>
      
//     </Routes>
//   )
// }

export default AllRoutes;