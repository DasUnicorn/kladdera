import React from "react";

import styles from "./Navbar.module.css";

class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			buttonText: "Login",
		};
	}

	render() {
		return (
			<nav className="">
				<ul className="">
					<li className=""><a href="#">Home</a></li>
					<li className=""><a href="#">Info</a></li>
					<li className={styles.button}>{this.state.buttonText}</li>
				</ul>
			</nav>
		)
	}
}

export default Navbar;