import DivBlock from "./DivBlock";
import "./App.css";
import React, { useState } from "react";

export const ThemeContext = React.createContext();
const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(previousTheme => !previousTheme);
  }

  return (
    <div className="app">
      <h1>Learning Context API</h1>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <DivBlock></DivBlock>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
