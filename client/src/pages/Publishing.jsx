import React from "react";
import AltNavbar from "../components/shubham/AltNavbar";
import SideBar from "../components/shubham/SideBar";
import { Flex } from "@chakra-ui/react";
import CalendarComponent from "../components/shubham/Calendar";

export const Publishing = () => {
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
