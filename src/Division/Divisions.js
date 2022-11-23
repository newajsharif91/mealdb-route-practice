import React from "react";
import "./Division.css";

const Divisions = ({ divisions }) => {
  return (
    <div className="divisions mt-8 p-8">
      <h1>Division Name : {divisions.divisionbn} </h1>
    </div>
  );
};

export default Divisions;
