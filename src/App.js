import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Home from './components/Home';
import Signup from './components/Signup';
import SignInForm from "./pages/auth/SignInForm";
import { Routes, Route } from 'react-router-dom';
import "./api/axiosDefaults";

function App() {
  return (
    <>
    <Navbar loggedIn={false}/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/info" element={<Info />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<SignInForm />}/>
    </ Routes>
    </>
  );
}

export default App;
