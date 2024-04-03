import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Home from './components/Home';
import Signup from './components/Signup';
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";
import { Routes, Route } from 'react-router-dom';
import { createContext, useEffect, useState } from "react";
import "./api/axiosDefaults";
import axios from "axios";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <Navbar loggedIn={false}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/info" element={<Info />}/>
          <Route path="/signup" element={<SignUpForm />}/>
          <Route path="/login" element={<SignInForm />}/>
        </ Routes>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
    </>
  );
}

export default App;
