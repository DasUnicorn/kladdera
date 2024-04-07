import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import art from '../img/art.svg';
import { isLoggedIn, clearAuthTokens } from 'axios-jwt';
import api from '../api';
import Task from "../components/Task"
import MoodForm from "../components/MoodForm"

export default function Home() {
	const [tasks, setTasks] = useState([]);

 	useEffect(() => {
    const fetchTasks = async () => {
      	try {
        	const response = await api.get('/task/', {
          		headers: {
            		Authorization: `Bearer ${localStorage.getItem('token')}`,
          		},
        	});
        	setTasks(response.data);
      	} catch (error) {
        	console.error('Failed to fetch tasks:', error);
      		}
      	};
    fetchTasks();
 	}, []);

 	const handleTaskUpdate = (updatedTask) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    };

  	// Add emoji selection:
  	const [maxPoints, setMaxPoints] = useState(10);
    const handlePointsChange = (e) => {
    	setMaxPoints(parseInt(e.target.value, 10));
 	};

  	// Filter and reduce tasks, to match current energy level
	const displayedTasks = tasks.filter(task => task.completed_at === null)
    	.reduce((acc, task) => {
      		if (acc.sumEnergyLevel + task.energy_level <= maxPoints) {
        		acc.sumEnergyLevel += task.energy_level;
        		acc.tasks.push(task);
      		}
      	return acc;
    	}, { sumEnergyLevel: 0, tasks: [] }).tasks;

	const tasklist =
	<>
	<div className="lg:h-screen flex flex-col-reverse lg:flex-row lg:items-center">
		<div className="bg-blue-dark py-2 px-4 lg:mb-4 lg:py-16 lg:px-7 lg:mx-10 rounded-lg">
			<h2 className="text-gold">Logged in as ..email..</h2>
			<hr className="border-1 border-gold" />
			<div className="flex flex-row py-2">
				<img src="" alt=""/>
				<p className="text-gold">Your task stats</p>
			</div>
			<div className="flex flex-row py-2">
				<img src="" alt=""/>
				<p className="text-gold">Your mood stats</p>
			</div>
			<div className="flex flex-row py-2">
				<img src="" alt=""/>
				<p className="text-gold">Your settings</p>
			</div>
		</div>
		<div className="flex flex-col w-full">
			<div className="flex flex-col lg:flex-row">
				<div className="flex justify-center">
					<div className="bg-gold rounded-full p-2 lg:p-2 lg:m-2">
						<select value={maxPoints} onChange={handlePointsChange} className="bg-blue-dark text-5xl p-4 lg:p-6 rounded-full appearance-none">
      						<option value="20">💪</option>
      						<option value="15">😄</option>
      						<option value="10">🙂</option>
      						<option value="6">😐</option>
      						<option value="3">😣</option>
    					</select>
					</div>
				</div>
				<div className="bg-blue-dark rounded-lg py-3 px-5 lg:py-7 lg:px-20">
					<h1 className="text-gold py-0">Your Tasks for today:</h1>
					<p className="text-gold">You can do this!</p>
				</div>
			</div>
			<div className="py-4 px-3 m-5 flex flex-col">
	    		{displayedTasks.map((task) => (
		        	<Task task={task} onTaskUpdate={handleTaskUpdate}/>
		    	))}
			</div>
	    </div>
	    <div className="p-4">
	    	<MoodForm/>
	    </div>
    </div>
    </>;


	const home = 
	<>
		<header className="bg-blue-dark py-16 border-gold border-solid border-b-2 flex flex-col items-center">
			<h1 className="text-gold text-bold text-s logo py-6 md:text-6xl">Kladderadatsch</h1>
			<Link to="/signup" className="button text-blue-dark bg-gold headingfont text-lg text-bold">Sign Up</Link>
			<div className="flex-row flex py-1">
				<p className="text-gold pe-1">or </p>
				<Link to="/login" className="text-gold underline">Login</Link>
			</div>
		</header>

		<div className="flex flex-col mx-11 items-center pb-4">
			<div className="flex flex-col md:flex-row justify-evenly">
				<img src={art} alt="" className="w-[150px] md:w-[300px] self-start" />
				<div className="flex flex-col pt-5 md:px-10 md:w-1/2">
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

			<div className="flex flex-col md:flex-row md:w-3/4 py-5">
				<div className="flex flex-col md:px-7">
					<h2 className="text-gold py-5">Features</h2>
					<p className="text-gold pb-6">Curious to learn more about our revolutionary to-do tracker? Click below to discover how we're redefining productivity with empathy.
					From customizable task classifications to adaptive features that accommodate your energy levels, 
					find out how our platform can empower you to navigate life's challenges with greater ease.</p>
					<Link to="/info" className="button text-blue-dark bg-gold headingfont text-lg text-bold me-5 w-44">Learn More</Link>
				</div>
				<div className="flex flex-col md:px-7">
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
		</>;

	return (
		<>
		{isLoggedIn() ? tasklist : home}
		</>
	)
}