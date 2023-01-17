import { useTheme } from "./ThemeContext";

const SecondDiv = () => {
    const darkTheme = useTheme();
    const myStyle = {
        backgroundColor: !darkTheme ? "#99A3A4" : "#FDEDEC",
        width: "250px",
        height: "100px",
        marginTop: "10px"
    }
    return <div style ={myStyle}>
        {darkTheme ? "true" : "false"}
    </div>
}

export default SecondDiv