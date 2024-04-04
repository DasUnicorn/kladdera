import React, { useState } from 'react';
import axios from 'axios';

const CreateTaskForm = () => {
 const [title, setTitle] = useState('');
 const [energyLevel, setEnergyLevel] = useState(1);
 const [isRepeating, setIsRepeating] = useState(false);
 const [repeatFrequency, setRepeatFrequency] = useState('D');

 const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    console.log();

    try {
      const response = await axios.post('/task/', {
        title,
        energy_level: energyLevel,
        is_repeating: isRepeating,
        repeat_frequency: isRepeating ? repeatFrequency : null,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);

    } catch (error) {
      console.error(error);

    }
 };

 return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-blue-dark rounded-lg shadow p-8 dark:border sm:max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gold">Create a new Task</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gold">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(element) => setTitle(element.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="energyLevel" className="block text-sm font-medium text-gold">Energy Level</label>
            <select
              id="energyLevel"
              value={energyLevel}
              onChange={(element) => setEnergyLevel(element.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="isRepeating" className="block text-sm font-medium text-gold">Repeating Task</label>
            <input
              type="checkbox"
              id="isRepeating"
              checked={isRepeating}
              onChange={(element) => setIsRepeating(element.target.checked)}
              className="mt-1 block"
            />
          </div>
          {isRepeating && (
            <div>
              <label htmlFor="repeatFrequency" className="block text-sm font-medium text-gold">Repeat Frequency</label>
              <select
                id="repeatFrequency"
                value={repeatFrequency}
                onChange={(element) => setRepeatFrequency(element.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="D">Daily</option>
                <option value="W">Weekly</option>
                <option value="M">Monthly</option>
                <option value="Y">Yearly</option>
              </select>
            </div>
          )}
          <button type="submit" className="w-full text-blue-dark bg-orange hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
        </form>
      </div>
    </div>
 );
};

export default CreateTaskForm;
