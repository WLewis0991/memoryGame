import { useState, useRef, useEffect } from 'react'
import Scoreboard from './Components/Scoreboard.jsx'
import Cards from './Components/Card.jsx'
import Header from './Components/Header.jsx'
import PlayAgain from './Components/PlayAgainModal.jsx'

function App() {
  const [gameCards, setGameCards] = useState([]);
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [attempts, setAttempts] = useState([]);
  const dialogRef = useRef(null);

  // ✅ Generate cards (clean + reusable)
  function generateCards() {
    const cards = [];

    for (let i = 0; i < 4; i++) {
      const randomId = Math.floor(Math.random() * 500);
      const card = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomId}.png`;
      cards.push(card, card);
    }

    return cards
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);
  }

  // ✅ Initial load
  useEffect(() => {
    setGameCards(generateCards());
  }, []);

  // ✅ Win condition (NO more if in render)
  useEffect(() => {
    if (score === 4 && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [score]);

  // ✅ Reset game properly
  function resetGame() {
    setScore(0);
    setTries(0);
    setAttempts([]);
    setGameCards(generateCards());

    dialogRef.current?.close();
  }

  return (
    <>
      <div className='game-container'>
        <Header />
        <Scoreboard tries={tries} score={score} />

        <div className='card-grid'>
          {gameCards.map((card) => (
            <Cards
              key={card.id}
              card={card}
              attempts={attempts}
              setAttempts={setAttempts}
              setTries={setTries}
              gameCards={gameCards}
              setGameCards={setGameCards}
              setScore={setScore}
            />
          ))}
        </div>
      </div>

      {/* ✅ Dialog */}
      <dialog className="dialog" ref={dialogRef}>
        <div className="dialog-content">
          <PlayAgain  resetGame={resetGame}/>
        </div>
      </dialog>
    </>
  );
}

export default App;