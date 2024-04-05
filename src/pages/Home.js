import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import art from '../img/art.svg';
import { isLoggedIn, clearAuthTokens } from 'axios-jwt';
import api from '../api';

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

  const handleTaskCompletion = async (taskId, title, energy, repeating, frequency, user) => {
    try {
      const response = await api.put(`/task/${taskId}/`, {
        id: taskId,
        title: title,
        energy_level: energy,
        completed_at: new Date().toISOString(), 
        is_repeating: repeating,
        repeat_frequency: frequency,
        user: user
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setTasks(tasks.map(task => task.id === taskId ? { ...task, completed_at: response.data.completed_at } : task));
   } catch (error) {
      console.error('Failed to update task:', error);
   }
  };

	console.log(isLoggedIn())

	const tasklist =
	<div className="flex flex-col">
      {tasks
        .filter(task => task.completed_at === null) // Filter out completed tasks
        .map((task) => (
          <div key={task.id} className="flex items-center mb-4">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={task.completed_at !== null}
              readOnly
              onClick={() => handleTaskCompletion(task.id, task.title, task.energy_level, task.is_repeating, task.repeat_frequency, task.user)}
            />
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">{task.title}</div>
              <div className="text-sm text-gray-500">Energy Level: {task.energy_level}</div>
            </div>
          </div>
        ))}
    </div>;


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