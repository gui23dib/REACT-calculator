import "./index.css"
import { useState } from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [lightmode, setLightmode] = useState(true);
  
  const operators = ['/', '*', '+', '-', '.'];
  
  const updateCalc = (value) => {
    if(
      (operators.includes(value) && calc === '') ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
     ) {
      return;
     }
  
     setCalc(calc + value);
  
    if(!operators.includes(value)){
       setResult(eval(calc + value).toString());
     }
  
   }
  
   const createButtons = () => {
    const values = [];
  
     for(let i = 1; i < 10; i++) {
         values.push(
             <button key={i} onClick={() => updateCalc(i.toString())}>
               {i}
            </button>
        )
    }
    
    return values;
  }
  
  const calculateFinal = () => {
    setCalc(eval(calc).toString()); //can use Function("return " + calc)().toString() instead of eval
  }
  
  const deleteValue = () => {
     if(calc === '' && result !== ''){
      setResult('');
      return;
     }
  
    const value = calc.slice(0, -1);
    setCalc(value);
    }

  const handleLightmode = () => {
    if(lightmode === true){
      return setLightmode(false);
    } else {
      return setLightmode(true);
    }
  }

  return (
    <div className="App">
      <div className={ lightmode ? "LightApp" : "DarkApp"}>
        <div className="fullCalculator">

          <div className="topMenu">
          <svg className="bulbIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"/></svg>
          <label className="switch">
            <input type="checkbox" onClick={handleLightmode}/>
            <span class="slider round"></span>
          </label>
          </div>

          <div className="display">
            { result ? <span> ({result}) </span> : ''}
            { calc || "0"}
          </div>
          <div className="keyboardOperators">
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>
          
            <button onClick={deleteValue}>DEL</button>
          </div>
          <div className="keyboardValues">
            { createButtons() }
            <button onClick={() => updateCalc('0')}> 0 </button>
            <button onClick={() => updateCalc('.')}> . </button>
            <button onClick={calculateFinal}> = </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
