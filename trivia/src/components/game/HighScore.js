import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { Button } from 'reactstrap'

function HighScore(props) {
    const [name, setName] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [limitColor, setLimitColor] = useState('black')
    
    const handleChange = e => {
        if (e.target.value.length < 13) {
            setName(e.target.value)
        }
    }
    
    const handleSubmit = e => {
        if (name.length < 3) {
            e.preventDefault()
            setLimitColor('red')
        } else {
            props.submitScore(name)
            setIsSubmitted(true)
        }    
    }
    
    if (isSubmitted) {
        return <Redirect push to="/leaderboard" />
    }
    
    return (
        <div className="high-score">
            <h2>You got a high score!</h2>
            <h1>{props.score}</h1>
            <h3>Enter your trivia alias below:</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    value={name}
                />
                <Button
                    className="button"
                    style={name ? {display: "inline"} : {display: "none"}}
                    onClick={handleSubmit}>Submit</Button>
                <br/>
                <span style={{color: limitColor}}>
                    (limit: 3–12 characters)
                </span>
            </form>
        </div>
    )
}

export default HighScore