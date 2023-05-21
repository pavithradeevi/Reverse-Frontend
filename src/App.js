import React, { useState } from 'react';
import './App.css';


function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/[^A-Za-z]/g, ''); // Remove non-alphabet characters
    setInputText(inputValue);
  };

  const handleReverseClick = async () => {
    try {
      const response = await fetch('https://reversed.onrender.com/reverse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();
      setOutputText(data.reversedText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="wrap">
      

      <h1 class="h1">REVERSED ORDER</h1>
      
      <label class="label">Input : 
        
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        pattern="[A-Za-z]+"
        placeholder="Enter alphabets only"
      /><br/>
      </label>
      <label class="label">Output :

      <input
        type="text"
        value={outputText}
        onChange={() => {}}
        placeholder="Reversed text"
      /><br/>
      </label>
      <button class="button" onClick={handleReverseClick}>Submit</button>
    </div>
  );
}

export default App;
