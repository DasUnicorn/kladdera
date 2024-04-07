import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const DeleteTask = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState({});
    const [title, setTitle] = useState('');
    const [energy, setEnergy] = useState(0);
    const [repeating, setRepeating] = useState(false);
    const [frequency, setFrequency] = useState('');
    const [user, setUser] = useState('');
    const [notification, setNotification] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await api.get(`/task/${taskId}/`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setTask(response.data);
                setTitle(response.data.title);
                setEnergy(response.data.energy_level);
                setRepeating(response.data.is_repeating);
                setFrequency(response.data.repeat_frequency);
                setUser(response.data.user);
            } catch (error) {
                setNotification("Could not fint the task. Please try again.");
                
            }
        };

        fetchTask();
    }, [taskId]);

    const handleDeleteTask = async (taskId) => {
        try {
            await api.delete(`/task/${taskId}/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setNotification("Deletion of the Task successful!");
            setTimeout(() => {
                navigate('/editTasks/');
            }, 3000);
        } catch (error) {
            setNotification("Could not delete the task. Please try again.");
        }
    };

    const handleReturnToList = () => {
        navigate(`/editTasks/`);
    };

 return (
    <>
    <div className="p-5 h-screen">
        <h1 className="text-gold">Delete the Task</h1>
        {notification && <p className="bg-orange text-blue-dark text-xs p-1 rounded-lg">{notification}</p>}
        <p className="text-gold">Are you sure you want to delete {task.title}?</p>
        <button 
            className="m-2 text-blue-dark bg-gold hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => handleReturnToList(task.id)}>No, keep it</button>
        <button 
            className="m-2 text-blue-dark bg-gold hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => handleDeleteTask(task.id)}>Yes, Delete</button>
    </div>
    </>
 );
};

export default DeleteTask;
