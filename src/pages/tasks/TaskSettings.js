import React, { useState, useEffect } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import Task from "../../components/Task"

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
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

        fetchTasks();
    }, []);

    const handleDeleteTask = (taskId) => {
         navigate(`/deleteTask/${taskId}`);
    };

    const handleEditTask = (taskId) => {
        navigate(`/editTask/${taskId}`);
    };

    const handleTaskUpdate = (updatedTask) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    };

    const sortedTasks = tasks.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  return (
    <div className="flex flex-col">
      {sortedTasks.map((task) => (
        <div>
            <Task task={task} onTaskUpdate={handleTaskUpdate}/>
          <button onClick={() => handleEditTask(task.id)}>Edit</button>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
 );
};

export default TaskList;