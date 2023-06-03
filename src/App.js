import React,{useState} from 'react';

const App = () => {

    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState("");
    const [message, setMessage] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        if(weight === 0 || height === 0){
            alert("Please enter value")
        }
        else{
            let bmi = (weight/(height*height)*703)
            setBmi(bmi.toFixed(1));

            if(bmi<25){
                setMessage("You are underweight")
            }
            else if(bmi>=25 && bmi<30){
                setMessage("You are Healthy")
            }
            else{
                setMessage("You are overweight")
            }
        }
    }

    const reset = () => {
        window.location.reload();
    }

  return (
    <div className="app">
        <div className="container">
            <h2>BMI CALCULATOR</h2>
            <form onSubmit={formSubmit}>
                <div>
                    <label htmlFor="">Weight (lbs)</label>
                    <input type="text" placeholder='Enter Weight' value={weight} onChange={(e)=>{setWeight(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="">Height (in)</label>
                    <input type="text" placeholder='Enter Height' value={height} onChange={(e)=>{setHeight(e.target.value)}} />
                </div>
                <div>
                    <button className="btn" type='submit'>Submit</button>
                    <button className="btn btn-outline" onClick={reset} type='submit'>Reset</button>
                </div>
                <div className="center">
                    <h3>Your BMI is: {bmi}</h3>
                    <p>{message}</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default App