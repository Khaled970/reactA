import React, { useState } from 'react';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
  const [randomNum, setRandomNum] = useState(getRandomIntInclusive(0, 10));
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const checkNumber = () => {
    if (userInput < randomNum) {
      alert('Bigger! Try again.');
    } else if (userInput > randomNum) {
      alert('Smaller! Try again.');
    } else {
      alert('Correct!');
    }
  };

  return (
    <div>
      <p>Guess a number between 0 and 10:</p>
      <input type="number" value={userInput} onChange={handleUserInput} />
      <button onClick={checkNumber}>Check</button>
    </div>
  );
}

export default App;
    
