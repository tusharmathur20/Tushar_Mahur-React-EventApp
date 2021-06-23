import React from "react";
import Main from "./Components/Main";
import { GlobalProvider } from "./context/GlobalState";
// import "./Components/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Main />
      </GlobalProvider>
    </div>
  );
}

export default App;
