import React from 'react'

function Leaderboard(props) {
    //console.log('Leaderboard - props.gameView',props.gameView)
    
    let scoreList = []
    
    if (props.highScores) {

        let fontSize = props.gameView ? 24 : 42

        scoreList = props.highScores.map((highScore, i) => {
            let dots = ' . . . '   
            for (let j = highScore.name.length; j < 10; j += 2) {
                dots += '. '
            }
            if (i > 0) {
                let mult = (i < 3 ? 2 : 1)
                props.gameView ? fontSize -= 1 * mult : fontSize -= 3 * mult
            }     
            return (
                <li style={{fontSize: `${fontSize}px`}} key={i}>
                    <span className="bold">{`${i + 1}) `}</span>
                    {highScore.name} {dots} {highScore.score}
                </li>
            ) 
        })
    }

    if (props.gameView) {
        return (
            <div className="leaderboard" id="in-game-leaderboard">
                <h3>Leaderboard</h3>
                <ul>
                    {scoreList}
                </ul>
            </div>
        )
    } else {
        return ( <>
            <div className="leaderboard" id="full-leaderboard">
                <h2>Wall of Glory</h2>
                <ul>
                    {scoreList}
                </ul>
            </div>
            <img id="leaderboard-img" src="https://res.cloudinary.com/dnj7porin/image/upload/v1585808926/crowdBG_ex9dzj.png" />
        </> )
    }
}

export default Leaderboard