export default function Cards(props) {

    const { setScore, card, gameCards, setGameCards, attempts, setAttempts, setTries } = props;
    function addAttempt() {
    // Ignore clicks on flipped or matched cards
    if (card.isFlipped || card.isMatched) return;

    let newCards = [...gameCards];

    // Flip the clicked card
    newCards = newCards.map(c =>
        c.id === card.id ? { ...c, isFlipped: true } : c
    );

    // Update attempts
    let newAttempts = [...attempts, card];

    // Check for a match if this is the second card
    if (newAttempts.length === 2) {
        const [first, second] = newAttempts;
        if (first.value === second.value) {
        // Mark both cards as matched
        newCards = newCards.map(c =>
            c.value === first.value ? { ...c, isMatched: true } : c,
            setScore(s => s + 1)
        );
        } else {
        // Not matched: flip back after a short delay
        setTimeout(() => {
            setGameCards(prev =>
            prev.map(c =>
                c.isFlipped && !c.isMatched ? { ...c, isFlipped: false } : c
            )
            );
        }, 1000);
        }
        newAttempts = [];
        setTries(t => t + 1);
    } else {
        // First attempt, just increment tries
        setTries(t => t + 1);
    }

    // Commit state updates
    setGameCards(newCards);
    setAttempts(newAttempts);
    }
return (
  <div
    className={`card ${card.isFlipped || card.isMatched ? "flipped" : ""}`}
    onClick={addAttempt}
  >
    <div className="card-inner">

      <div className="card-front">
        <img
          className="card-image"
          src={card.value}
          alt=""
        />
      </div>

      <div className="card-back"></div>

    </div>
  </div>
);
}