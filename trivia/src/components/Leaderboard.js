import React from 'react'

function Leaderboard(props) {
    //console.log('Leaderboard - props.gameView',props.gameView)
    
    let scoreList = []
    
    if (props.highScores) {
        scoreList = props.highScores.map((highScore) => {
            return <li>{`${highScore.name} . . . ${highScore.score}`}</li> 
        })
    }

    if (props.gameView) {
        return (
            <div className="leaderboard" id="in-game-leaderboard">
                <h2>Leaderboard</h2>
                <ul>
                    {scoreList}
                </ul>
            </div>
        )
    } else {
        return (
            <div className="leaderboard">
                <h1>Leaderboard</h1>
                <ul>
                    {scoreList}
                </ul>
            </div>
        )
    }
}

export default Leaderboard