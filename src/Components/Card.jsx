export default function Cards(props) {

    const { card, gameCards, setGameCards, attempts, setAttempts, setTries } = props;

    function addAttempt() {
        if(card.isFlipped || card.isMatched){
            return
        }
        const newCards = gameCards.map((c) => {
            if (c.id === card.id){
                return {...c, isFlipped:true};
            }else {
                return c;
            }

        });
        setGameCards(newCards)
        console.log(card)

        if (attempts.includes(card)) {
            setAttempts([]),
            setTries(0)
            console.log("tried that");
        } else {
            setAttempts(a => [...a, card]);
            setTries(t=> t + 1)
            console.log(attempts)
        }

    }

    return (
        <div className={`card ${card.isFlipped ? "flipped" : "" }`} onClick={addAttempt}>
            <div className="card-front">
                <img className="card-image" src={card.value} alt="" />
            </div>
            <div className="card-back"></div>

        </div>
    );
}