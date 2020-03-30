import React, { useState, useEffect, useContext } from 'react'
import { DataContext } from './Gameboard'

function Answer(props) {

    const game = useContext(DataContext) // using context negated issue of props not updating

    const [bgColor, setBgColor] = useState('')
    const [mark, setMark] = useState('')

    useEffect(() => {
        setBgColor('')
        setMark('')
    }, [props])

    const handleClick = () => {
        if(!game.isAnswered) {
            if (props.isCorrect) {
                setBgColor('#69c07e')
                setMark('&#10004;')
            } else {
                setBgColor('#DD3030')
                setMark('&#10008;')
            }
            game.calcScore(props.isCorrect)
        }
    }

    return <li className="answer" onClick={handleClick} style={{backgroundColor: bgColor}}
                dangerouslySetInnerHTML={{__html: `${props.answer} ${mark}`}} />
}

export default Answer