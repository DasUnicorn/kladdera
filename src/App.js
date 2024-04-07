import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Info from './pages/Info';
import Home from './pages/Home';
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";
import CreateTaskForm from "./pages/tasks/CreateTaskForm";
import TaskSettings from "./pages/Settings";
import EditTask from "./pages/tasks/EditTask";
import DeleteTask from "./pages/tasks/DeleteTask";
import EditMood from "./pages/moods/EditMood";
import DeleteMood from "./pages/moods/DeleteMood";
import { Routes, Route } from 'react-router-dom';
import { createContext, useEffect, useState } from "react";


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/info" element={<Info />}/>
        <Route path="/signup" element={<SignUpForm />}/>
        <Route path="/login" element={<SignInForm />}/>
        <Route path="/createTask" element={<CreateTaskForm />}/>
        <Route path="/editTasks" element={<TaskSettings />}/>
        <Route path="/editTask/:taskId" element={<EditTask />} />
        <Route path="/deleteTask/:taskId" element={<DeleteTask />} />
        <Route path="/editMood/:moodId" element={<EditMood />} />
        <Route path="/deleteMood/:moodId" element={<DeleteMood />} />
      </ Routes>
    </>
  );
}

export default App;
