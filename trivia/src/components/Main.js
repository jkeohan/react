import React, { useState, useReducer, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Gameboard from './game/Gameboard'
import Instructions from './Instructions'
import Options from './Options'
import Leaderboard from './Leaderboard'
import categoryArr from './categoryArr'

const reducer = (state,action) => {
    switch(action.type) {
      case "ADD" :
        return state += 100 * action.value
      case "SUB" :
        return state -= 50
      case "RESET" :
        return state = 0
      default:
       return state
    }
  }

function Main() {

    const [catIndex, setCatIndex] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [score, dispatch] = useReducer(reducer, 0)
    const [highScores, setHighScores] = useState([])
    const [scoreIndex, setScoreIndex] = useState(-1)

    useEffect(() => {
        let storage = localStorage.getItem("leaderboard")
        if (storage) {
            setHighScores(JSON.parse(storage))
        }
        console.log('Main - useEffect - highScores', highScores)
    }, [])
    
    const checkForHighScore = () => {
        console.log('checking for high score at Main')

        let scoreTest = false
        if (highScores.length > 9) {
            if (score > highScores[highScores.length - 1].score) {
                scoreTest = true;
            }
        } else {
            scoreTest = true
        }
        console.log('Main - checkForHighScore - scoreTest',scoreTest)
        return scoreTest
    }

    const submitScore = name => {
        console.log('Main - submitScore - name', name)
        const newHighScores = [...highScores]
        let index = 0;

        if (highScores) {
            highScores.forEach((highScore, i) => {
                if (highScore.score >= score) {
                    index = i + 1
                }
            })
            newHighScores.splice(index, 0, {'name' : name, 'score' : score})
            if (newHighScores.length > 10) {
                newHighScores.pop()
            }
        } else {
            newHighScores = [{'name' : name, 'score' : score}]
        }
        setHighScores(newHighScores)
        setScoreIndex(index)
        localStorage.setItem("leaderboard", JSON.stringify(newHighScores))
    }

    return (
        <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" render={() =>
                <Gameboard 
                    catIndex={catIndex}
                    difficulty={difficulty}
                    categoryArr={categoryArr}
                    score={score}
                    dispatch={dispatch}
                    submitScore={submitScore}
                    checkForHighScore={checkForHighScore}
                    highScores={highScores}
                />
            } />
            <Route path="/instructions" component={Instructions} />
            <Route path="/options" render={() =>
                <Options
                    catIndexFromMain={catIndex}
                    setCatIndexFromMain={setCatIndex}
                    difficultyFromMain={difficulty}
                    setDifficultyFromMain={setDifficulty}
                    categoryArr={categoryArr}
                />
            } />
            <Route path="/leaderboard" render={() =>
                <Leaderboard
                    highScores={highScores}
                    scoreIndex={scoreIndex}
                />
            } />
            <Redirect to="/" />
        </Switch>
        </main>
    )
}

export default Main