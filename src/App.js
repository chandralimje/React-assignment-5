import React, { createContext } from "react";
import "./App.css";
import CompoX from "./components/ContextApi/CompoX";
// import Hook from "./components/Hooks/Hook";
// import CompA from "./components/PropDrilling/CompA";

let FruitName = createContext();
let CarName = createContext();

function App() {
  // let date = "21/04/2023 Friday";

  return (
    <div>
      {/* <Hook /> */}
      {/* <CompA data={date} /> */}
      <FruitName.Provider value="Mango">
        <CarName.Provider value="TOYOTA">
          <CompoX />
        </CarName.Provider>
      </FruitName.Provider>
    </div>
  );
}

export default App;
export { FruitName, CarName };
