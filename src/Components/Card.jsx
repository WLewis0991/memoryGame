export default function Cards(props) {

    const { card, attempts, setAttempts, setTries } = props;

    function addAttempt() {

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
        <div className="card" onClick={addAttempt}>
            <div className="card-front">
                <img className="card-image" src={card} alt="" />
            </div>
            <div className="card-back"></div>

        </div>
    );
}