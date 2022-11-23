import React from "react";
import { useLoaderData } from "react-router-dom";
import "./District.css";

const Distric = () => {
  const district = useLoaderData();
  console.log(district);
  return (
    <div>
      <div>
        {" "}
        <h1>All District Name:</h1>
      </div>
      <div>
        {district.data.map((districts) => (
          <div className="districts mt-8 p-8">
            <h1>Name : {districts.districtbn}</h1>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Distric;
