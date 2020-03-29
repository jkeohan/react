import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">
        <span className="title">Trivia</span>
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
