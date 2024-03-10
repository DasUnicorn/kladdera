import React from 'react';
import { Link } from "react-router-dom";
import art from '../img/art.svg';

export default function Home() {
	return (
		<>
		<header className="bg-blue-dark py-16 border-gold border-solid border-b-2 flex flex-col items-center">
			<h1 className="text-gold text-bold logo py-6 text-6xl">Kladderadatsch</h1>
			<Link to="/signup" className="button text-blue-dark bg-gold headingfont text-lg text-bold">Sign Up</Link>
			<div className="flex-row flex py-1">
				<p className="text-gold pe-1">or </p>
				<Link to="/login" className="text-gold underline">Login</Link>
			</div>
		</header>

		<div className="flex flex-col items-center mx-11">
			<div className="flex flex-row">
				<img src={art} alt="" className="w-[300px]" />
				<div className="flex flex-col pt-3 px-5">
					<h2 className="text-gold">Our Mission</h2>
					<p className="text-gold">Your value as a human being does not depend up on your productivity.</p>
					<p className="text-gold">We are a to-do tracker that takes your energy reserves 
					into account and classifies tasks according to effort.</p>
				</div>
			</div>

			<p className="text-gold">We want to rethink “productivity” and give you the opportunity to work on your tasks, 
			even when your energy reserves fluctuate significantly. </p>
			<p className="text-gold">Our Goal:</p>
			<p className="text-gold">Get stuff done.</p>
			<p className="text-gold">No matter how much.</p>
			<div>
				<Link to="/signup" className="button text-blue-dark bg-gold headingfont text-lg text-bold me-5">Sign Up</Link>
				<Link to="/Infos" className="button text-blue-dark bg-gold headingfont text-lg text-bold">More Infos</Link>
			</div>
		</div>
		</>
	)
}