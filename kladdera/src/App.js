import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
      <Navbar loggedIn={false}/>
    </div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/info" element={<Info />}/>
    </ Routes>
    </>
  );
}

export default App;
