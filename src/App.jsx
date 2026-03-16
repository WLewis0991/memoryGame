import { useState, useEffect} from 'react'
import Scoreboard from './Components/Scoreboard.jsx'
import Cards from './Components/Card.jsx';

function App() {
  const [gameCards, setGameCards] = useState([]);

  const [tries, setTries] = useState(0)
  const [attempts, setAttempts] = useState([])

function renderGame() {
  const cards = [];

  // Generate 8 random Pokémon cards, each duplicated
  for (let i = 0; i < 6; i++) {
    const card = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(Math.random() * 500)}.png`;
    cards.push(card);
    cards.push(card);
  }

  // Map to objects with metadata
  const finalCards = cards.map((value, index) => ({
    id: index,
    value,
    isflipped: false,
    isMatched: false,
  }));

  // Shuffle function (Fisher–Yates)
  for (let i = finalCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [finalCards[i], finalCards[j]] = [finalCards[j], finalCards[i]];
  }

  // Set the shuffled cards in state
  setGameCards(finalCards);
}

  function increaseTries() {
    setTries(t=> t + 1)
  }

  useEffect(() => {
    renderGame();
  }, []);

  return (
    <>
    <div className='game-container'>
      <Scoreboard tries={tries} setTries={setTries}/>
      <div className='card-grid'>
        {gameCards.map((card, index) =>
          <Cards card={card} key={index} attempts={attempts} setAttempts={setAttempts} setTries={setTries} gameCards={gameCards} setGameCards={setGameCards}/>
        )}
      </div>
    </div>
    </>
  )
}

export default App
