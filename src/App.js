import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Info from './pages/Info';
import Home from './pages/Home';
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";
import CreateTaskForm from "./pages/tasks/CreateTaskForm";
import TaskSettings from "./pages/tasks/TaskSettings";
import EditTask from "./pages/tasks/EditTask";
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
      </ Routes>
    </>
  );
}

export default App;
