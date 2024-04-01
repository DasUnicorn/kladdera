import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Navbar.module.css";

const Navbar = (Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/info", label: "About Us" },
	{ href: "/login", label: Props.loggedIn ? "Logout" : "Login"},
  ];
  return (
	<>
	  <div className="sm:px-8 px-4 py-2 z-10 w-full bg-gold text-blue-dark">
		<nav className="flex justify-between items-center max-container text-blue-dark">
		  <NavLink to="/" className={styles.logo}>
			Kladderadatsch
		  </NavLink>
		  <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
			{navLinks.map((item) => (
			  <li key={item.label}>
				<NavLink
				  to={item.href}
				  className="font-montserrat leading-normal text-lg font-bold"
				>
				  {item.label}
				</NavLink>
			  </li>
			))}
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
			  {navLinks.map((item) => (
				<li key={item.label}>
				  <a
					href={item.href}
					className="leading-normal text-lg font-bold text-dark-blue"
				  >
					{item.label}
				  </a>
				</li>
			  ))}
			</ul>
		  </nav>
		</div>
	  )}
	</>
  );
};
export default Navbar;