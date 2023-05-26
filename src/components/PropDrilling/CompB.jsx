import React from "react";
import CompC from "./CompC";

const CompB = ({ data }) => {
  return (
    <div>
      <CompC data={data} />
    </div>
  );
};

export default CompB;
