import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom"; 
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Navbar.module.css";
import axios from "axios"
import { isLoggedIn, clearAuthTokens } from 'axios-jwt';

const Navbar = () => {

	function handleLogout() {
		clearAuthTokens()
	} 

	const loggedInIcons = 
		<>
			<li key="settings">
				<NavLink
				  to="/editTasks"
				  className="font-montserrat leading-normal text-lg font-bold"
					>
				  Settings
				</NavLink>
			</li>
			<li key="logout">
				<NavLink
					to="/login"
				  className="font-montserrat leading-normal text-lg font-bold"
				  onClick={handleLogout}
					>
				  Logout
				</NavLink>
			</li>
		</>;

  const loggedOutIcons = (
    <>
      <li key="About Us">
				<NavLink
				  to="/info"
				  className="font-montserrat leading-normal text-lg font-bold"
					>
				  About Us
				</NavLink>
			</li>
			<li key="Sign Up">
				<NavLink
				  to="/signup"
				  className="font-montserrat leading-normal text-lg font-bold"
					>
				  Sign Up
				</NavLink>
			</li>
			<li key="Login">
				<NavLink
				  to="/login"
				  className="font-montserrat leading-normal text-lg font-bold"
					>
				  Login
				</NavLink>
			</li>
    </>
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
	<>
	  <div className="sm:px-8 px-4 py-2 z-10 w-full bg-gold text-blue-dark">
		<nav className="flex justify-between items-center max-container text-blue-dark">
		  <NavLink to="/" className={styles.logo}>
			Kladderadatsch
		  </NavLink>
		  <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
			  <li key="Home">
					<NavLink
				  to="/"
				  className="font-montserrat leading-normal text-lg font-bold"
					>
				  Home
					</NavLink>
			  </li>
			  {isLoggedIn() ? loggedInIcons : loggedOutIcons}
		  </ul>
		  <div
			className="hidden max-lg:block cursor-pointer"
			onClick={() => {
			  setIsMenuOpen(!isMenuOpen);
			}}
		  >
			<RxHamburgerMenu className="text-4xl" />
		  </div>
		</nav>
	  </div>
	  {isMenuOpen && (
		<div>
		  <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100 bg-gold z-50">
			<div
			  className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
			  onClick={() => {
				setIsMenuOpen(!isMenuOpen);
			  }}
			>
			  <AiOutlineClose className="text-4xl" />
			</div>
			<ul className=" lg:hidden flex flex-col items-center justify-center h-full">
			  <li key="Home">
					<NavLink
				  to="/"
				  className="font-montserrat leading-normal text-lg font-bold"
					>
				  Home
					</NavLink>
			  </li>
			  {isLoggedIn() ? loggedInIcons : loggedOutIcons}
			</ul>
		  </nav>
		</div>
	  )}
	</>
  );
};
export default Navbar;