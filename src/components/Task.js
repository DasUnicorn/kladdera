import React, { useContext, useState } from "react";
import api from '../api';

const Task = ({ task }) => {
	const { id, title, energy_level, is_repeating, completed_at, repeat_frequency, user } = task;

	const handleTaskCompletion = async (taskId, title, energy, repeating, frequency, user) => {
        try {
            const newCompletedAt = completed_at ? null : new Date().toISOString(); // Toggle completion status
            const response = await api.put(`/task/${taskId}/`, {
                id: taskId,
                title: title,
                energy_level: energy,
                completed_at: newCompletedAt, // Use the toggled value
                is_repeating: repeating,
                repeat_frequency: frequency,
                user: user
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };


  	return (
		<>
	  	<div key={id} className="flex items-center mb-4 justify-between bg-gold rounded-lg py-3 px-4 lg:w-7/12">
		    <p className="text-m font-bold text-blue-dark ps-2">{energy_level}</p>
		    <p className="text-m font-bold text-blue-dark">{title}</p>
		    <input
		        type="checkbox"
		       	className="form-checkbox h-5 w-5 text-blue-600 rounded"
             	checked={completed_at !== null}
             	readOnly
		        onClick={() => handleTaskCompletion(id, title, energy_level, is_repeating, repeat_frequency, user)}
		    />
		</div>
		</>
  	);
};
export default Task;