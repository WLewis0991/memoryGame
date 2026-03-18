import banner from "../assets/poke-playAgain.png"

export default function PlayAgain(props){

    const {resetGame} = props

    return(<>
        <img className="play-again-banner" src={banner} alt="Play again Banner" />
        <button className="reset-button" onClick={resetGame}></button>
    </>)
}