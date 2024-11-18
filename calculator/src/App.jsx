import { useState } from 'react'
import './App.css'
import { add } from "./utils/stringCalculator.js"

function App() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    try {
      const result = add(input);
      setResult(result);
      setError('');
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">String Calculator</h1>
        <textarea
          value={input}
          className="input-field"
          onChange={handleChange}
          placeholder="Enter numbers here"
        />
        <button className="add-button" onClick={handleCalculate}>Calculate</button>
        {result !== null && <h2 className="result">Result: {result}</h2>}
        {error && <h2 className="error">{error}</h2>}
      </div>
    </div>
  );
}

export default App
