import React, {useContext} from "react";
import { ThemeContext } from "./App";
import SecondDiv from "./SecondDiv";

const DivBlock = () => {
    const darkTheme = useContext(ThemeContext);
    const myStyle = {
        backgroundColor: darkTheme ? "#99A3A4" : "#FDEDEC",
        width: "500px",
        height: "200px",
        marginTop: "10px",
        display: "flex",
        justifyContent: "center"
    }
    return <div style ={myStyle}>
        {/* {darkTheme ? "true" : "false"} */}
        <SecondDiv/>
    </div>
}

export default DivBlock