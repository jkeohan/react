import React, { useState } from 'react'

function HighScore(props) {
    const [name, setName] = useState('')
    
    const handleChange = e => {
        setName(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault();
    //    props.submitHighScore(name, props.score)
    }
    
    return (
        <div className="high-score">
            <h2>You got a high score!</h2>
            <h1>{props.score}</h1>
            <h3>Enter your name below:</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    value={name}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default HighScore