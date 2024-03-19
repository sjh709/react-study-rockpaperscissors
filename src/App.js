import { useState } from 'react';
import './App.css';
import Box from './component/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandScissors,
  faHandBackFist,
  faHand,
} from '@fortawesome/free-solid-svg-icons';

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg',
  },
  paper: {
    name: 'Paper',
    img: 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://content.etilize.com/Alternate-Image1/1073503247.jpg',
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(choice[computerChoice]);
    setResult(judgement(choice[userChoice], choice[computerChoice]));
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    return itemArray[randomItem];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else {
      if (user.name === 'Scissors') {
        return computer.name === 'Rock' ? 'lose' : 'win';
      }
      if (user.name === 'Rock') {
        return computer.name === 'Scissors' ? 'win' : 'lose';
      }
      if (user.name === 'Paper') {
        return computer.name === 'Scissors' ? 'lose' : 'win';
      }
    }
  };

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} result={result} />
        <Box
          title='Computer'
          item={computerSelect}
          result={
            result === 'win' ? 'lose' : result === 'lose' ? 'win' : result
          }
        />
      </div>
      <div className='main'>
        <button className='item-button' onClick={() => play('scissors')}>
          <FontAwesomeIcon icon={faHandScissors} />
        </button>
        <button className='item-button' onClick={() => play('rock')}>
          <FontAwesomeIcon icon={faHandBackFist} />
        </button>
        <button className='item-button' onClick={() => play('paper')}>
          <FontAwesomeIcon icon={faHand} />
        </button>
      </div>
      <h1 className='main'>{result}</h1>
    </div>
  );
}

export default App;
