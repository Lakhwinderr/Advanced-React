import React from "react";

function useConsoleLog(varName) {
    React.useEffect(() => {
        console.log(varName)
    }, [varName])
}

export default useConsoleLog;