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

		<div className="flex flex-col mx-11 items-center pb-4">
			<div className="flex flex-row justify-evenly">
				<img src={art} alt="" className="w-[300px] self-start" />
				<div className="flex flex-col pt-5 px-10 w-1/2">
					<h1 className="text-gold py-4">Our Mission</h1>
					<p className="text-gold">Your value as a human being does not depend up on your productivity.</p>
					<p className="text-gold">
					In a world that often measures worth by accomplishments and output, 
					we stand for a different ethos—one that prioritizes your well-being 
					over relentless productivity.</p>
					<p className="text-gold">Our platform isn't just about ticking off boxes—it's about honoring 
					your energy levels and respecting your limits. By classifying tasks based on effort required, 
					we empower you to make informed decisions about how to allocate your precious resources. 
					Whether you're feeling energized and ready to tackle ambitious projects or struggling to 
					get out of bed, our system adapts to your needs, providing support and flexibility every 
					step of the way.</p>
					<p className="text-gold italic pt-2">Welcome to a new era of task management—one where your mental 
					and physical health matter just as much as your productivity.</p>
				</div>
			</div>

			<div className="flex flex-row w-3/4 py-5">
				<div className="flex flex-col px-7">
					<h2 className="text-gold py-5">Features</h2>
					<p className="text-gold pb-6">Curious to learn more about our revolutionary to-do tracker? Click below to discover how we're redefining productivity with empathy.
					From customizable task classifications to adaptive features that accommodate your energy levels, 
					find out how our platform can empower you to navigate life's challenges with greater ease.</p>
					<Link to="/info" className="button text-blue-dark bg-gold headingfont text-lg text-bold me-5 w-44">Learn More</Link>
				</div>
				<div className="flex flex-col px-7">
					<h2 className="text-gold py-5">Sign Up for free</h2>
					<p className="text-gold pb-6">Curious to learn more about our revolutionary to-do tracker? 
					Click below to discover how we're redefining productivity with empathy. 
					From customizable task classifications to adaptive features that accommodate 
					your energy levels, find out how our platform can empower you to navigate life's 
					challenges with greater ease.</p>
					<Link to="/signup" className="button text-blue-dark bg-gold headingfont text-lg text-bold w-44">Sign Up</Link>
				</div>
			</div>
		</div>
		</>
	)
}