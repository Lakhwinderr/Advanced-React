import { useState, useEffect } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.title = toggle
      ? "Welcome to Little Lemon"
      : "Using the useEffect Hook";
  }, [toggle]);
  return (
    <div>
      <h1>Using the useEffect Hook</h1>
      <button onClick={handleClick}>Toggle</button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
};

export default App;
