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
            navigate(`/editTasks/`);
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    const handleReturnToList = () => {
        navigate(`/editTasks/`);
    };

 return (
    <>
    <div>
        <p>Are you sure you want to delete {task.title}</p>
        <button onClick={() => handleReturnToList(task.id)}>No, keep it</button>
        <button onClick={() => handleDeleteTask(task.id)}>Yes, Delete</button>
    </div>
    </>
 );
};

export default DeleteTask;