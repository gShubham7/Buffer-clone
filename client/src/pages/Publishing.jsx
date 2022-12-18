import React, { useEffect } from "react";
import AltNavbar from "../components/shubham/AltNavbar";
import SideBar from "../components/shubham/SideBar";
import { Box, Flex, Image } from "@chakra-ui/react";
import CalendarComponent from "../components/shubham/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/posts/post.action";
import { Navigate } from "react-router-dom";
import axios from "axios";
import PublishingRoutes from "../routes/PublishingRoutes";
import FacebookPage from "./FacebookPage";

export const Publishing = () => {
  const { isAuth } = useSelector((store) => store.auth);
  
  return (
    <div>
      <Image src="./publish.gif" h="90vh"/>
    </div>
  );
};
