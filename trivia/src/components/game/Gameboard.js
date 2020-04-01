import React, { useEffect, useState, createContext } from 'react'
import { Link } from 'react-router-dom'
import Question from './Question'
import HighScore from './HighScore'
import Leaderboard from '../Leaderboard'
import './game.scss'

export const DataContext = createContext()

function Gameboard(props) {
    const [questionArr, setQuestionArr] = useState(false)
    const [qNum, setQNum] = useState(1)
    const [isAnswered, setIsAnswered] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [score, setScore] = useState(0)
    const [isHighScore, setIsHighScore] = useState(false)
    const [nextVis, setNextVis] = useState('hidden')
    const [nextOpacity, setNextOpacity] = useState(0)

    console.log('Gameboard - isAnswered', isAnswered)

    const calcScore = isCorrect => {
        setIsAnswered(true)

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
        console.log('Gameboard - calcScore - change', change)
        setScore(score + change)
        
        setNextVis('visible')
        setNextOpacity(1)
    }

    const nextQuestion = () => {
        setNextVis('hidden')
        setNextOpacity(0)

        qNum < 10 ? setQNum(qNum + 1) : checkForHighScore()

        setIsAnswered(false)
    }

    const checkForHighScore = () => {
        setGameOver(true)
        console.log('checking for high score')
        // make API call to leaderboard
        // check if score > lowest high score
    }
    
    useEffect(() => {
        const makeApiCall = async () => {
            const catNum = props.catIndex ? parseInt(props.catIndex) + 9 : ''
            const url = `https://opentdb.com/api.php?amount=10&category=${catNum}&difficulty=${props.difficulty}`
            console.log('Gameboard - makeApiCall - url', url)
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

    const qDisplay = (
        <div className="gameboard">
            <h2>Question {qNum}</h2>
            <DataContext.Provider value={ {calcScore, isAnswered} }>
                <Question qData={questionArr[qNum - 1]} {...props} />
            </DataContext.Provider>
            <span id="score">Score: {score}</span>
            <button style={{visibility: nextVis, opacity: nextOpacity}}
                onClick={nextQuestion}>Next</button>
            <Leaderboard gameView={true} />
        </div>
    )

    const endDisplay = (
        <div className="game-over">
            <h2>Final score:</h2>
            <h1>{score}</h1>
            <h3>Thanks for playing!</h3>
            <Link to="/leaderboard">
                Check the Leaderboard
            </Link>
            <Link to="/new">
                <button>Start A New Game</button>
            </Link>
        </div>
    )
    
    return !gameOver ? qDisplay : (isHighScore ? <HighScore score={score} /> : endDisplay)
}

export default Gameboard