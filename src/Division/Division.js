import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Divisions from "./Divisions";

const Division = () => {
  const divisionDataLoad = useLoaderData();
  return (
    <div>
      <h1> BanglaDesh All Distric Name {divisionDataLoad.data.length}</h1>
      {divisionDataLoad.data.map((divisions) => (
        <Divisions
          key={divisionDataLoad.data._id}
          divisions={divisions}
        ></Divisions>
      ))}
    </div>
  );
};

export default Division;
