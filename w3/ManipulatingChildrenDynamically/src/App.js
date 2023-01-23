import "./App.css";
import React from "react";
const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };
  return (
    <div className="row">
      {React.Children.map(children, (child, id) => {
        return React.cloneElement(child, {
          style: { ...child.props.style, ...(id > 0 ? childStyle : {}) },
        });
      })}
    </div>
  );
};

const LiveOrders = () => {
  return (
    <div className="liveOrders">
      <Row spacing={15}>
        <p>Samosa</p>
        <p>2</p>
        <p>$5</p>
        <p>13:14</p>
        <p>Lakhwinder</p>
      </Row>
    </div>
  );
};
const App = () => {
  return (
    <>
      <h1>👩‍💻Learning React.children and React.cloneElement</h1>
      <h2>These both are top level API's.</h2>
      <h1>Below is a live order:</h1>
      <LiveOrders></LiveOrders>
    </>
  );
};

export default App;
