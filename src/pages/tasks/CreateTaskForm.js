import React, { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const CreateTaskForm = () => {
    const [title, setTitle] = useState('');
    const [energyLevel, setEnergyLevel] = useState(5);
    const [isRepeating, setIsRepeating] = useState(false);
    const [repeatFrequency, setRepeatFrequency] = useState('D');
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token');


        let validationErrors = {
            title: "",
            energyLevel: "",
        };

        // Check if titel is empty
        if (!title.trim()) {
            validationErrors.title = "Title is required.";
        }

        // Check if energyLevel is or out of range
        if (energyLevel.length < 1 || energyLevel.length > 10) {
            validationErrors.energyLevel = "EnergyLevel must be between 1 and 10.";
        }

        setErrors(validationErrors);

        if (Object.values(validationErrors).every(error => error === "")) {
            try {
                const response = await api.post('/task/', {
                title,
                energy_level: energyLevel,
                is_repeating: isRepeating,
                repeat_frequency: isRepeating ? repeatFrequency : null,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setNotification("Creation of the Task successful!");
            setTimeout(() => {
                navigate('/');
            }, 3000);
            } catch (error) {
                setNotification("Could not create the task. Please try again.");
            }
        }
    };

 return (
    <div className="flex flex-col items-center md:justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div className="w-full bg-blue-dark rounded-lg shadow p-8 dark:border sm:max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gold">Create a new Task</h1>
        {notification && <p className="bg-orange text-blue-dark text-xs p-1 rounded-lg">{notification}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-bold text-gold">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.title && <p className="bg-orange text-blue-dark text-xs p-1 rounded-lg">{errors.title}</p>}
          </div>
          <div>
            <label htmlFor="energyLevel" className="block text-sm font-bold text-gold">Energy Level</label>
            <p className="text-sm font-medium text-gold italic"> The energy level describes how difficult this task is for you personally.
            It goes from 1 (very easy, I can do it just like that) to 10 (very difficult, just the idea makes me tremble)</p>
            <select
              id="energyLevel"
              value={energyLevel}
              onChange={(event) => setEnergyLevel(event.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
            {errors.energyLevel && <p className="bg-orange text-blue-dark text-xs p-1 rounded-lg">{errors.energyLevel}</p>}
          </div>
          <div>
            <label htmlFor="isRepeating" className="block text-sm font-bold text-gold">Repeating Task</label>
            <input
              type="checkbox"
              id="isRepeating"
              checked={isRepeating}
              onChange={(event) => setIsRepeating(event.target.checked)}
              className="mt-1 block"
            />
          </div>
          {isRepeating && (
            <div>
              <label htmlFor="repeatFrequency" className="block text-sm font-bold text-gold">Repeat Frequency</label>
              <select
                id="repeatFrequency"
                value={repeatFrequency}
                onChange={(event) => setRepeatFrequency(event.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="D">Daily</option>
                <option value="W">Weekly</option>
                <option value="M">Monthly</option>
                <option value="Y">Yearly</option>
              </select>
            </div>
          )}
          <button type="submit" 
          className="w-full text-blue-dark bg-orange hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >Submit</button>
        </form>
      </div>
    </div>
 );
};

export default CreateTaskForm;
