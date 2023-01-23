import React, { useEffect } from "react";


const DataFetcher = ({url, render}) => {
  const [data, setData] = React.useState([])

  useEffect(() => {
    if(url.includes("desserts")){
      setData(["cake", "ice-cream", "brownie"])
    }
    else{
      setData(["soda", "juice", "water", "coffee"])
    }
  }, [])
  
  return render(data)
}

const DessertsCount = () => {
  return <DataFetcher
    url = "www.littlelemon.com/desserts"
    render = {(data) => <p>{data.length} desserts.</p>}
  ></DataFetcher>
}


const DrinksCount = () => {
  return <DataFetcher
    url = ""
    render = {(data) => <p>{data.length} drinks.</p>}
  ></DataFetcher>
}

const App = () => {
  return (
    <>
      <h1>Learning rendering props</h1>
      <h2>How I can pass in the second component in the main component.</h2>
      <DessertsCount/>
      <DrinksCount/>
    </>
  );
};
export default App;
