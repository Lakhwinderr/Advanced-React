import React, { useEffect } from "react";

//always start the HOC with "with" keyword

const withMousePositon = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        console.log("position is changing");
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", handleMousePositionChange);
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);
    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};
const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PointMouseTracker = withMousePositon(PointMouseLogger);
const App = () => {
  return (
    <>
      <h1>Learning Higher Order Components</h1>
      <h2>Here, I will extract the mouse position on the screen.</h2>
      <PointMouseTracker />
    </>
  );
};
export default App;
