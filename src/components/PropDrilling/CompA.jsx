import React from "react";
import CompB from "./CompB";

const CompA = ({ data }) => {
  return (
    <div>
      <CompB data={data} />
    </div>
  );
};

export default CompA;
