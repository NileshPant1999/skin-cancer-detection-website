import React from "react"
import "./Header.css"

function Header() {
	return (
		<div class="main">
			<nav class='nav__main'>
				<ul class="navbar">
					<li>Home</li>
					<li>About</li>
					<li>Services</li>
					<li>Team</li>
				</ul>
				<img className="nav__logo" src="https://image.shutterstock.com/image-vector/medical-pharmacy-logo-design-template-260nw-287587964.jpg" />
			</nav>
		</div>
	)
}

export default Header