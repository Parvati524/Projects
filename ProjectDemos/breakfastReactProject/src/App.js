import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Catering from './components/catering';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/catering" element={<Catering/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
