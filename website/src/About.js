import React from 'react'
import "./About.css"

function About({ text }) {
    return (
        <div className="about__main">
            <div className='about__heading'>
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default About
