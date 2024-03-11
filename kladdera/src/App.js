import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar loggedIn={false}/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/info" element={<Info />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
    </ Routes>
    </>
  );
}

export default App;
