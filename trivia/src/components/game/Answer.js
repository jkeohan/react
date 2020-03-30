import React, { useState } from 'react'

function Answer (props) {

    const [bgColor, setBgColor] = useState('')
    const [mark, setMark] = useState('')

    const handleClick = () => {
        if (props.isCorrect) {
            setBgColor('#69c07e')
            setMark('&#10004;')
        } else {
            setBgColor('#DD3030')
            setMark('&#10008;')
        }
        props.calcScore(props.isCorrect)
    }

    return <li className="answer" onClick={handleClick} style={{backgroundColor: bgColor}}
                dangerouslySetInnerHTML={{__html: `${props.answer} ${mark}`}} />
}

export default Answer