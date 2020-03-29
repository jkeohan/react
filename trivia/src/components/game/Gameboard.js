import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Question from './Question'
import Score from './Score'
import HighScore from './HighScore'
import './game.css'

function Gameboard () {
    const [questionArr, setQuestionArr] = useState(false)
    const [qNum, setQNum] = useState(1)
    const [gameOver, setGameOver] = useState(false)
    const [score, setScore] = useState(0)
    const [isHighScore, setIsHighScore] = useState(false)

    const calcScore = isCorrect => {
        let change = 0
        if (isCorrect) {
            switch (questionArr[qNum - 1].difficulty) {
                case 'hard': 
                    change += 100
                case 'medium':
                    change += 100
                default:
                    change += 100
            }
        } else {
            change -= 50
        }
        setScore(score + change)
    }

    const nextQuestion = () => {
        questionArr.length > qNum ? setQNum(qNum + 1) : checkForHighScore()
    }

    const checkForHighScore = () => {
        setGameOver(true)
        // make API call to leaderboard
        // check if score > lowest high score
    }
    
    useEffect(() => {
        const makeApiCall = async () => {
            const url = `https://opentdb.com/api.php?amount=10`
            const res = await fetch(url)
            const json = await res.json()
            console.log('Gameboard - makeApiCall - json.results', json.results)
            setQuestionArr(json.results)
        }
        makeApiCall()
    }, [])
    
    if (!questionArr) {
        return <></>
    }

    const qDisplay = ( <>
            <h2>Question {qNum}</h2>
            <Question data={questionArr[qNum - 1]} />
        </> )

    const endDisplay = ( <>
            <h2>Thanks for playing!</h2>
            <h3>Check out the high scores:</h3>
            <Link to="/leaderboard">
                Leaderboard
            </Link>
        </> )
    
    return (
        <div className="gameboard">
            <h1>Game</h1>
            {!gameOver ? {qDisplay} : (isHighScore ? <HighScore /> : {endDisplay})}
        </div>
    )
}

export default Gameboard