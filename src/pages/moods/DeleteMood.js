import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const DeleteMood = () => {
    const { moodId } = useParams();
    const [mood, setMood] = useState({});
    const [feeling, setFeeling] = useState('');
    const [note, setNote] = useState('');
    const [date, setDate] = useState('');
    const [user, setUser] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        const fetchMood = async () => {
            try {
                const response = await api.get(`/mood/${moodId}/`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setMood(response.data);
                setFeeling(response.data.mood);
                setDate(response.data.date);
                setNote(response.data.note);
                setUser(response.data.user);
            } catch (error) {
                
            }
        };

        fetchMood();
    }, [moodId]);

    const handleDeleteMood = async (moodId) => {
        try {
            await api.delete(`/mood/${moodId}/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            navigate(`/editTasks/`);
        } catch (error) {
            console.error('Failed to delete Feeling:', error);
        }
    };

    const handleReturnToList = () => {
        navigate(`/editTasks/`);
    };

 return (
    <>
    <div className="py-2 px-5 h-screen">
        <h1 className="text-gold">Delete</h1>
        <p className="text-gold">Are you sure you want to delete <span className="bg-orange">{mood.mood}</span> from {mood.date}?</p>
        <button 
            className="m-2 text-blue-dark bg-gold hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => handleReturnToList(mood.id)}>No, keep it</button>
        <button 
            className="m-2 text-blue-dark bg-gold hover:bg-blue-light hover:text-gold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => handleDeleteMood(mood.id)}>Yes, Delete</button>
    </div>
    </>
 );
};

export default DeleteMood;
