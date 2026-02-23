import React from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";

const Pdp = () => {
  const { id } = useParams();

  

  return (
    <>
      <Navbar hideSearchBar={true} />
    </>
  );
};

export default Pdp;
