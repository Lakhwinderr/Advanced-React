import DivBlock from "./DivBlock";
import "./App.css";
import { ThemeProvider } from "./ThemeContext";


const App = () => {
  
  return (
    <div className="app">
      <h1>Learning Context API</h1>
      <ThemeProvider>
        <DivBlock/>
      </ThemeProvider>
    </div>
  );
};

export default App;
