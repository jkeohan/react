import React, { useState, useEffect, useContext } from 'react'
import { DataContext } from './Gameboard'

function Answer(props) {

    // using context negated issue of props not updating
    const game = useContext(DataContext)

    const [bgColor, setBgColor] = useState('')
    const [mark, setMark] = useState('')

    // this wasn't running on back-to-back true/false questions,
    // so I added a random number to props to ensure a change
    useEffect(() => {
        setBgColor('')
        setMark('')
    }, [props.answer, props.rand])

    useEffect(() => {
        if (game.isAnswered && props.isCorrect) {
            setBgColor('#69c07e')
        }
    }, [game.isAnswered])

    const handleClick = () => {
        if (!game.isAnswered) {
            if (props.isCorrect) {
                setMark('&#10004;')
            } else {
                setBgColor('#DD3030')
                setMark('&#10008;')
            }
            game.calcScore(props.isCorrect)
        }
    }

    return <li onClick={handleClick} style={{backgroundColor: bgColor}}
                dangerouslySetInnerHTML={{__html: `${props.answer} ${mark}`}} />
}

export default Answer