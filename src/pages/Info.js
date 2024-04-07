import React from 'react';
import { Link } from "react-router-dom";

function Info() {
	return (
		<div className="bg-gold border-t-2 border-blue-dark">
			<div className="mx-10 md:mx-40 pt-6 pb-20">
				<h1 className="py-5 text-blue-dark">About Us</h1>
				<div className="flex justify-center bg-orange rounded w-1/2">
					<p className="py-6 text-blue-dark">Noone can reach their full potential every day.</p>
				</div>
				<h2 className="text-blue-dark">What we offer you</h2>
				<h3 className="text-blue-dark">Adaptive Task Classification</h3>
				<p className="text-blue-dark">Our platform intelligently categorizes tasks based on the effort required, 
				allowing you to prioritize effectively and manage your workload according to your energy reserves.
    			Say goodbye to overwhelming to-do lists—our system ensures that you always have a 
    			clear understanding of what needs to be done, 
    			without feeling bogged down by tasks that exceed your current capacity.</p>
    			<h3 className="text-blue-dark">Automatic Goal Setting</h3>
    			<p className="text-blue-dark">Our platform automatically sets achievable goals based on your energy level, empowering you to make steady
    			progress towards your objectives, no matter how much or how little energy you have.</p>
    			<h3 className="text-blue-dark">Flexible Energy Management</h3>
    			<p className="text-blue-dark">Life doesn&apos;t follow a predictable pattern, and neither do our energy levels. With our platform, 
    			you can adjust your energy level at any moment, ensuring that your task management strategy remains 
    			responsive to your changing needs.
    			Whether you&apos;re feeling motivated and ready to tackle challenging tasks or in need of a break to focus on self-care, 
    			our system adapts to your energy fluctuations with ease.</p>
    			<h3 className="text-blue-dark">Prioritizing Self-Care</h3>
    			<p className="text-blue-dark">We understand that productivity should never come at the expense of your well-being. On slow energy days, 
    			our platform encourages you to prioritize self-care and basic needs, ensuring that you maintain a healthy balance 
    			between work and rest.
    			By acknowledging the importance of self-care, our platform empowers you to recharge 
    			and replenish your energy reserves, so you can approach your tasks with renewed focus 
    			and determination.</p>
    			<h3 className="text-blue-dark">Real-Time Adjustments</h3>
    			<p className="text-blue-dark pb-7">Life is full of surprises, and so are our energy levels. Whether you&apos;re suddenly hit with a burst of inspiration 
    			or feeling drained after a long day, our platform allows you to adjust your energy level in real-time, ensuring that 
    			your task management strategy remains agile and responsive.</p>
				<Link to="/signup" className="button text-blue-dark bg-orange headingfont text-lg text-bold w-44">Sign Up</Link>
    		</div>
		</div>
	)
}

export default Info;