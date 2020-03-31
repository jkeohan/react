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

        questionArr.length > qNum ? setQNum(qNum + 1) : checkForHighScore()

        setIsAnswered(false)
    }

    const checkForHighScore = () => {
        setGameOver(true)
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

    /*const qDisplay = ( <>
            <h2>Question {qNum}</h2>
            <Question qData={questionArr[qNum - 1]} nextQuestion={nextQuestion} />
        </> )*/

    const endDisplay = ( <>
            <h2>Thanks for playing!</h2>
            <h3>Check out the high scores:</h3>
            <Link to="/leaderboard">
                Leaderboard
            </Link>
        </> )
    
    return (
        <div className="gameboard">
            {/*!gameOver ? {qDisplay} : (isHighScore ? <HighScore /> : {endDisplay})*/}
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
}

export default Gameboard