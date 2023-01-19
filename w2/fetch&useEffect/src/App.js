import { findByText } from "@testing-library/react";
import { useState, useEffect } from "react";

const App = () => {
  const [fetchedData, setData] = useState({});
  const fetchData = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=29.98&lon=75.72&appid=b047139743ca7e5fca31400eb619cfa0"
    ).then(response => response.json()).then(data => setData(data));
  };

  useEffect(
    fetchData,[]
  )
  const Text = (props) => {
    return Object.keys(props.data).length > 0 ? (
      <div>
        <h3>Weather: {props.data.weather[0].main}</h3>
        <h3>Description: {props.data.weather[0].description}</h3>
        <h3>Temp: {props.data.main.temp}K</h3>
      </div>
    ) : (
      <h3>Data is being fetched....</h3>
    );
  };

  return (
    <div>
      <h1>Using the useEffect Hook and Fetch API</h1>
      <h2>I am creating a weather app.</h2>
      <Text data={fetchedData} />
    </div>
  );
};

export default App;
