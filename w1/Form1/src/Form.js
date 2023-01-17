import {useState} from "react"


import "./Form.css"
const Form = () => {

        
    const [score, setScore] = useState(10);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(Number(score) < 5 && message.length < 10){
            prompt("Please tell us why the food was poor.")
        }
        else{
            alert("Form submitted!")
        }
        setMessage("")
        setScore(10)
    }
    return <div>
        <fieldset className="field">
                      <h2>Feedback</h2>
                      <label htmlFor="">Score: {score}⭐</label>
                      <input type="range" min = "1" max = "10" value={score} onChange = {(e) => setScore(e.target.value)}/>
                      <label htmlFor="">Comment:</label>
                      <textarea name="" id="" cols="30" rows="10" value={message} onChange = {(e) => setMessage(e.target.value)}></textarea>
                      <button onClick={handleSubmit}>Submit</button>
        </fieldset>
    </div>
}

export default Form;