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

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(choice[computerChoice]);
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    return itemArray[randomItem];
  };

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} />
        <Box title='Computer' item={computerSelect} />
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
    </div>
  );
}

export default App;
