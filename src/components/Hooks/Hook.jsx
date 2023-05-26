import React from "react";
import useValidator from "../CustomHooks/useValidator";

const Hook = () => {
  let data = "hfdkhkjhfkhf";
  const validate = useValidator(data);

  return (
    <div>
      <h1>{validate}</h1>
    </div>
  );
};

export default Hook;
