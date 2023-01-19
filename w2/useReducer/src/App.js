import React from "react";

function App() {
  const reducer = (state, action)=>{
    if(action.type === "buy" && state.money > 0)return {money: state.money -= 10}
    if(action.type === "sell")return {money: state.money += 10}
    return state
  }
  const initialState = {money : 100}
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return <div>
    <h1>I am learning useReducer hook.</h1>
    <h2>Current money : {state.money}</h2>
    <button onClick={() => dispatch({type: "buy"})}>Buy veggies</button>
    <button onClick={() => dispatch({type: "sell"})}> Sell a meal</button>
  </div>
}

export default App;
