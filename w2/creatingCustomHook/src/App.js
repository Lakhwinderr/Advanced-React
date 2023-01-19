import React from "react";
import useConsoleLog from "./useConsoleLog";
function App() {
  const [count, setCount] = React.useState(0)
  useConsoleLog(count);
  const increment = () => {
    setCount((c) => c + 1)
  }
 return <div>
    <h2>I am creating my own custom hook.</h2>
    <h2>Count: {count}</h2>
    <button onClick={increment}>Plus 1</button>
 </div>
}

export default App;
