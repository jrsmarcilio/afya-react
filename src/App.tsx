/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import GlobalStyles from "./assets/GlobalStyles";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  )
}

export default App;