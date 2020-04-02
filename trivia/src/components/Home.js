import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return(
        <div className="home">
            <h2>Click below to play...</h2>
            <Link to="/game">
                <img src="https://www.ignitesocialmedia.com/wp-content/uploads/2018/02/YpJilaXXT8qJR6HQVKFM_ISM_Trivia.gif" />
            </Link>
            <p>Something witty will surely go here.</p>
        </div>
    )
}

export default Home