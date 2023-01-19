import { useState } from "react";
import "./App.css"


const GoalForm = (props) => {
  const [goalObj, setGoalObj]  = useState({goal:"", by: ""})
  const handleSubmit= (e) =>{
      e.preventDefault();
      if(goalObj.goal === "" || goalObj.by === ""){
        return;
      }
      props.setNewGoal(goalObj)
      console.log(goalObj)
  }
  return <div>
    <input type="text" placeholder="Goal" value ={ goalObj.goal} onChange={(e) => setGoalObj({...goalObj, goal: e.target.value})} />
    <input type="text" placeholder="By" value = {goalObj.by} onChange={(e) => setGoalObj({...goalObj, by: e.target.value})} />
    <button onClick={handleSubmit}>Add</button>
  </div>
}
const FormData = (props) => {
  
  const goalsList = props.data.map(obj => <li>My goal is to {obj.goal} by {obj.by}.</li>)
  return <ul>
      {goalsList}
  </ul>
}

const App  = () =>{
  const [data, setData] = useState([{goal: "buy fortuner", by: "april"}, {goal: "release song", by: "2024"}])
  const addGoal = (obj) =>{ 
      setData([...data, obj])
  }
  return <div className="App">
      <h3>I am making goal adding app.</h3>
      <GoalForm setNewGoal = {addGoal} />
      <FormData data = {data}/>
    </div>
}

export default App;