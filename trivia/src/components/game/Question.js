import React from 'react'
import Answer from './Answer'

function Question (props) {
    
    const answerArr = props.qData.incorrect_answers.map(answer => {
        //console.log('Question - incorrect_answers', answer)
        return [Math.random(), answer, false]
    })

    answerArr.push([Math.random(), props.qData.correct_answer, true])

    answerArr.sort()

    const allAnswers = answerArr.map((aData, i) => {
        //console.log('Question - aData', aData[1], aData[2])
        return <Answer key={i} answer={aData[1]} isCorrect={aData[2]} />
    })

    return ( <>
        <div className="info-wrapper">
            <span className="question-info">
                <h3>Category</h3>
                {props.qData.category}
            </span>
            <span className="question-info">
                <h3>Difficulty</h3>
                {props.qData.difficulty}
            </span>
        </div>
        <hr/>
        <p className="question">{props.qData.question}</p>
        <ul className="answer-list">
            {allAnswers}
        </ul>
        <button onClick={props.nextQuestion}>next</button>
    </> )
}

export default Question