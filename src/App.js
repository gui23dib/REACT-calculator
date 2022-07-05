import "./index.css"
import { useState } from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

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
    setCalc(eval(calc).toString());
  }

  const deleteValue = () => {
    if(calc === ''){
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  }

  return (
    <div className="App">
      <div className="fullCalculator">
        <div className="display">
          {result ? <span> ({result}) </span> : ''}
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
  );
}

export default App;
