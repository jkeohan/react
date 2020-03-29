import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Gameboard from './game/Gameboard'
import Instructions from './Instructions'
import Options from './Options'
import Leaderboard from './Leaderboard'


function Main() {

    return (
        <main>
        <Switch>
            <Route exact path="/" component={Gameboard} />
            <Route path="/instructions" component={Instructions} />
            <Route path="/options" component={Options} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Redirect to="/" />
        </Switch>
        </main>
    )
}

export default Main