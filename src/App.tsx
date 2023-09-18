import { useEffect, useState } from 'react';
import GiftList from './GiftList/GiftList';
import checkEmptyString from './utils/helper.js';
import TotalGifts from './TotalGifts/TotalGifts.js';
import {Auto, getUser} from './Services/service.ts'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import Home from './Home/Home.js';
import About from './About/About.js';

const App: React.FC = () => {
  // const [user, setUser] = useState(Promise<Auto[]>);
  const navigate = useNavigate();
  let users = [];

  return (
    <>
      <h1>Titulo del Nav</h1>
      <nav>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <button onClick={() => navigate('/')}>Ir al Home</button>
          </li>
          <li>
            {/* <a href="/about">About</a> */}
            <button onClick={() => navigate('/about')}>Ir a About</button>
          </li>
          <li>
            <button onClick={() => (getUser('1'))}>Buscar user</button>
          </li>
        </ul>
      </nav>
      <div>
        {/* Define your navigation links */}
        {/* Define the routes */}
        {/* Ex Switch */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>

    
    </>
  );
};
export default App;
