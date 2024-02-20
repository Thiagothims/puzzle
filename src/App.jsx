import { useCallback, useState, useEffect } from 'react';
import { wordsList } from './data/words';
import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';
import EndGame from './components/EndGame/EndGame';
import './App.css';

const stages = [
  {id:1, name: 'start'},
  {id:2, name: 'game'},
  {id:3, name: 'end'}
]

function App() {
  const [gameStage, setStageGame] = useState(stages[0].name);
  const [ words, setWords ] = useState(wordsList);

  return (
    <div className='app'>
      {gameStage == 'start' && <StartScreen /> }
      {gameStage == 'game' && <Game/>}
      {gameStage == 'end' && <EndGame/>}
    </div>
  )
}

export default App
