import React from 'react'
import "./Card.css"

function Cards() {
    return (

        <div class="row">
            <div class="column">
                <div class="card">
                    <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Jane" width='100%' />
                    <div class="container">
                        <h2>Nilesh Pant</h2>
                        <p class="title">CEO & Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <img src='https://www.w3schools.com/w3images/team1.jpg' alt="Mike" width='100%' />
                    <div class="container">
                        <div className='small__container'>
                            <h2>Nidhi Pawar</h2>
                            <p class="title">Junior Assistant</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>example@example.com</p>
                        </div>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
