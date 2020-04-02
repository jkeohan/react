import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">
        <span className="title">Answer10</span>
      </Link>
      <Link to="/game">
        Game
      </Link>
      <Link to="/instructions">
        Instructions
      </Link>
      <Link to="/options">
        Options
      </Link>
      <Link to="/leaderboard">
        Leaderboard
      </Link>
    </nav>
  )
}

export default Header
