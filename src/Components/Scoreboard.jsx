
export default function Scoreboard(props){

    const {tries, score} = props

    return(<>
    <div>
        <p>Memory Card Game</p>
    </div>
    <div>
        <p>Score: {score}</p>
    </div>
    <div>
        <p>Turns: {tries}</p>
    </div>
    
    </>)
}