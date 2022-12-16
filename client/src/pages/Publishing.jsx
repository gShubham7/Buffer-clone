import React, { useEffect } from "react";
import AltNavbar from "../components/shubham/AltNavbar";
import SideBar from "../components/shubham/SideBar";
import { Flex } from "@chakra-ui/react";
import CalendarComponent from "../components/shubham/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/posts/post.action";
import { Navigate } from "react-router-dom";

export const Publishing = () => {
  const { isAuth } = useSelector((store) => store.auth);
  // useEffect(() => {
  //   getPosts();
  // }, []);

  return (
    <div>
      <AltNavbar />
      <Flex justifyContent="space-between">
        <SideBar />
        <CalendarComponent />
      </Flex>
    </div>
  );
};
