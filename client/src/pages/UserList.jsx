import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StickyHeadTable from "../components/shubham/components/UserTable";

const UserList = () => {  
  return (
    <div style={{ width: "50vw", margin: "auto" }}>
      <StickyHeadTable />
    </div>
  );
};

export default UserList;
