import { useTheme, useThemeUpdate } from "./ThemeContext";
import SecondDiv from "./SecondDiv";

const DivBlock = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const myStyle = {
    backgroundColor: darkTheme ? "#99A3A4" : "#FDEDEC",
    width: "500px",
    height: "200px",
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={myStyle}>
        {/* {darkTheme ? "true" : "false"} */}
       <SecondDiv/>
      </div>
    </div>
  );
};

export default DivBlock;
