import React, { useContext } from "react";
import { FruitName, CarName } from "../../App";

const CompoZ = () => {
  const fName = useContext(FruitName);
  const cName = useContext(CarName);

  return (
    <div>
      <h1>FruitName : {fName} </h1>
      <h1>CarName : {cName} </h1>
      {/* <FruitName.Consumer>
        {(value) => {
          return (
            <>
              <h1>FruitName : {value}</h1>
              <CarName.Consumer>
                {(value) => {
                  return (
                    <>
                      <h1>CarName : {value}</h1>
                    </>
                  );
                }}
              </CarName.Consumer>
            </>
          );
        }}
      </FruitName.Consumer> */}
    </div>
  );
};

export default CompoZ;
