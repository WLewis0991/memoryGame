
export default function Scoreboard(props){

    const {tries, setTries} = props

    return(<>
    <div>
        <p>Memory Card Game</p>
    </div>
    <div>
        <p>Score: 0</p>
    </div>
    <div>
        <p>Turns: {tries}</p>
    </div>
    
    </>)
}