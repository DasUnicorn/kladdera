import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Navbar loggedIn={false}/>
      <Info />
    </div>
  );
}

export default App;
