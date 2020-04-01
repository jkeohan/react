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

    return (
        <div className="options">
            <div>
                <h2>Current Game Options:</h2>
                Category: {props.catIndexFromMain ? props.categoryArr[props.catIndexFromMain] : 'Any Category'}
                <br/>
                Difficulty: {props.difficultyFromMain ? props.difficultyFromMain : 'Any Difficulty'}
            </div>
            <div>
                <h2>Set New Options:</h2>
                <div>
                    Select Category:
                    <select name="category" onChange={handleCategoryChange}>
                        <option value="">Any Category</option>
                        {categoryOptions}
                    </select>
                </div>
                <div>
                    Select Difficulty:
                    <select onChange={handleDifficultyChange}>
                        <option value="">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
            </div>
            <Link to="/">
                <button onClick={handleClick}>New Game With Selected Options</button>
            </Link>
        </div>
    )
}

export default Options