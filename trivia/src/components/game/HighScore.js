import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { Button } from 'reactstrap'

function HighScore(props) {
    const [name, setName] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    
    const handleChange = e => {
        if (e.target.value.length < 13) {
            setName(e.target.value)
        }
    }
    
    const handleSubmit = e => {
        props.submitScore(name)
        setIsSubmitted(true)
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
                (limit: 12 characters)
            </form>
        </div>
    )
}

export default HighScore