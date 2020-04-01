import React, { useState, useReducer, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
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

        if (highScores) {
            let index;
            highScores.forEach((highScore, i) => {
                if (highScore.score >= score) {
                    index = i
                }
            })
            let newHighScores = [...highScores]
            newHighScores.splice(index + 1, 0, {'name' : name, 'score' : score})
            setHighScores(newHighScores)
        }
        localStorage.setItem("leaderboard", JSON.stringify(highScores))
    }

    return (
        <main>
        <Switch>
            <Route exact path="/" render={() =>
                <Gameboard 
                    catIndex={catIndex}
                    difficulty={difficulty}
                    categoryArr={categoryArr}
                    score={score}
                    dispatch={dispatch}
                    submitScore={submitScore}
                    checkForHighScore={checkForHighScore}
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
                    score={score}
                    highScores={highScores}
                />
            } />
            <Redirect to="/" />
        </Switch>
        </main>
    )
}

export default Main