import React from 'react'

function Leaderboard(props) {
    //console.log('Leaderboard - props.gameView',props.gameView)
    if (props.gameView) {
        return (
            <div className="leaderboard" id="in-game-leaderboard">
                <h2>Leaderboard</h2>
            </div>
        )
    } else {
        return (
            <div className="leaderboard">
                <h1>Leaderboard</h1>
            </div>
        )
    }
}

export default Leaderboard