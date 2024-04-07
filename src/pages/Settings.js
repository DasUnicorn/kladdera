import React, { useState, useEffect } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import Task from "../components/Task"

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [moods, setMoods] = useState([]);
    const navigate = useNavigate();


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
        const fetchMoods = async () => {
            try {
                const response = await api.get('/mood/', {
                    headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setMoods(response.data);

            } catch (error) {
                console.error('Failed to fetch moods:', error);
            }
        };

        fetchTasks();
        fetchMoods();
    }, []);

    const handleDeleteTask = (taskId) => {
         navigate(`/deleteTask/${taskId}`);
    };

    const handleEditTask = (taskId) => {
        navigate(`/editTask/${taskId}`);
    };

    const handleDeleteMood = (moodId) => {
         navigate(`/deleteMood/${moodId}`);
    };

    const handleEditMood = (moodId) => {
        navigate(`/editMood/${moodId}`);
    };

    const handleTaskUpdate = (updatedTask) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    };

    const sortedTasks = tasks.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    const sortedMoods = moods.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <>
    <h1 className="text-gold">Settings</h1>
    <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full p-5">
            <h2 className="text-gold">Tasks</h2>
            {sortedTasks.map((task) => (
            <div key={task.id} className="w-full">
                <Task task={task} onTaskUpdate={handleTaskUpdate}/>
                <button
                    className="text-gold m-2 bg-blue-dark hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                    onClick={() => handleEditTask(task.id)}>Edit</button>
                <button 
                    className="text-gold bg-blue-dark hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                    onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
            ))}
        </div>
        <div className="flex flex-col w-full">
            <h2 className="text-gold">Feelings</h2>
            {sortedMoods.map((mood) => (
            <div key={mood.id} className="w-full">
                <div className="flex flex-row bg-blue-dark rounded-lg p-4 m-4 justify-around">
                    <p className="text-gold">{mood.date}</p>
                    <p className="text-gold">{mood.mood}</p>
                    <p className="text-gold">{mood.note}</p>
                </div>
                <button
                    className="text-gold m-2 bg-blue-dark hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                    onClick={() => handleEditMood(mood.id)}>
                    Edit
                </button>
                <button 
                    className="text-gold bg-blue-dark hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                    onClick={() => handleDeleteMood(mood.id)}>
                    Delete
                </button>
            </div>
            ))}
        </div>
    </div>
    </>
 );
};

export default TaskList;