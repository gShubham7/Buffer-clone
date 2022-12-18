import React from "react";
import styles from "./Admin.module.css";
import MainDash from "../components/shubham/components/MainDash/MainDash";
import RightSide from "../components/shubham/components/RigtSide/RightSide";
import Sidebar from "../components/shubham/components/Sidebar";
import { style } from "@mui/system";
import UserList from "./UserList";
import { Route, Routes } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Admin}>
          <div className={styles.AppGlass}>
            <Sidebar />
            <MainDash />
            <RightSide />
          </div>
        </div>
      </div>      
      <UserList />
    </>
  );
};

export default Admin;
