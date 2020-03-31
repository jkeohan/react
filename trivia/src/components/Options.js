import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Options(props) {
    const [catIndex, setCatIndex] = useState('')
    const [difficulty, setDifficulty] = useState('')

    const handleClick = () => {
        props.setCatIndexFromMain(catIndex)
        props.setDifficultyFromMain(difficulty)
    }

    const handleCategoryChange = e => {
        setCatIndex(e.target.value)
    }

    const handleDifficultyChange = e => {
        setDifficulty(e.target.value)
    }

    const categoryOptions = props.categoryArr.map((category, i) => {
        return <option key={i} value={i}>{category}</option>
    })

    return ( <>
        <h1>Options</h1>
        <h2>Current options:</h2>
        <div>
            Category: {props.catIndexFromMain ? props.categoryArr[props.catIndexFromMain] : 'Any Category'}
            <br/>
            Difficulty: {props.difficultyFromMain ? props.difficultyFromMain : 'Any Difficulty'}
        </div>
        <h2>Set options:</h2>
        <span className="option-name">Select Category: </span>
        <select name="category" onChange={handleCategoryChange}>
            <option value="">Any Category</option>
            {categoryOptions}
        </select>
        <br/>
        <span className="option-name">Select Difficulty: </span>
        <select onChange={handleDifficultyChange}>
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
        <br/><br/>
        <Link to="/">
            <button onClick={handleClick}>New Game With Selected Options</button>
        </Link>
    </> )
}

export default Options