import React from "react";
import MainComponent from "./MainComponent";
import LoginContextProvider from "./context/LoginContextProvider";

const App = () => {
  return (
    <LoginContextProvider>
      <MainComponent />
    </LoginContextProvider>
  );
};

export default App;
