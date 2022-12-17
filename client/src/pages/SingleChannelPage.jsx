import React from "react";
import { useParams } from "react-router-dom";

const SingleChannelPage = () => {
  const { ChName } = useParams();
  return <div>{ChName}</div>;
};

export default SingleChannelPage;
