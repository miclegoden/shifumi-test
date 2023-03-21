import logo from './logo.svg';
import './App.css';
import {useState} from "react"

const choices = [
  {
    name: 'rock',
    icon: '✊'
  },
  {
    name: 'paper',
    icon: '✋'
  },
  {
    name: 'scissors',
    icon: '✌️'
  }
];

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  function handleChoice(choice) {
    const computerIndex = Math.floor(Math.random() * 3);
    setPlayerChoice(choice);
    setComputerChoice(choices[computerIndex].name);
  }

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <p>Choose your weapon:</p>
      <div className="choices">
        {choices.map((choice, index) => (
          <button key={index} onClick={() => handleChoice(choice.name)}>
            {choice.icon}
          </button>
        ))}
      </div>
      {playerChoice && (
        <div className="result">
          <p>You chose {playerChoice}</p>
          <p>The computer chose {computerChoice}</p>
          <p>
            Result:{' '}
            {playerChoice === computerChoice ? 'Tie' : getResult(playerChoice, computerChoice)}
          </p>
        </div>
      )}
    </div>
  );
}

function getResult(playerChoice, computerChoice) {
  switch (playerChoice) {
    case 'rock':
      return computerChoice === 'scissors' ? 'Win' : 'Lose';
    case 'paper':
      return computerChoice === 'rock' ? 'Win' : 'Lose';
    case 'scissors':
      return computerChoice === 'paper' ? 'Win' : 'Lose';
    default:
      return null;
  }
}

export default App;
