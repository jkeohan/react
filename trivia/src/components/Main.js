import React, { useState, useReducer } from 'react'
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
    const [isHighScore, setIsHighScore] = useState(false)
    
    const checkForHighScore = () => {
        console.log('checking for high score at Main')
    }

    const submitScore = name => {
        console.log('Main - submitScore - name', name)
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
                    isHighScore={isHighScore}
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
                    isHighScore={isHighScore}
                />
            } />
            <Redirect to="/" />
        </Switch>
        </main>
    )
}

export default Main