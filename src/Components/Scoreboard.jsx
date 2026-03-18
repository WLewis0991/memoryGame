
export default function Scoreboard(props){

    const {tries, score} = props

    return(<>

    <div className="poke-scoreboard">
        <p>Score: {score}</p>
        <p>Turns: {tries}</p>
    </div>
    
    </>)
}