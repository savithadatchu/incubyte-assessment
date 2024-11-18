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
      <h1>String Calculator</h1>
      <textarea
        value={input}
        onChange={handleChange}
        placeholder="Enter numbers here"
      />
      <button className="add-button" onClick={handleCalculate}>Calculate</button>
      {result !== null && <h2>Result: {result}</h2>}
      {error && <h2 style={{ color: 'red' }}>{error}</h2>}
    </div>
  );
}

export default App
