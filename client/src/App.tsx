import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import RootStore from "./store";
import Authorized from "./routes/authorized";

import "./App.css";

const App: React.FC = () => {
  return (
    <Provider store={RootStore}>
      <BrowserRouter>
        <Authorized />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
