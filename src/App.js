import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { PlayGround } from './components/PlayGround';
import { ViewCode } from './components/ViewCode';

function App() {
  return (
    <div className="App mt-4 ">
      <Router>
        <nav className='flex justify-center md:justify-end mr-0 md:mr-4 text-xl mb-12'>
          <ul className='flex gap-5'>
            <li>
              <Link to="/" className='hover-underline-custom'>
                <div>
                  HOME
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Playground" className='hover-underline-custom'>
                <div>
                  PLAYGROUND
                  <div></div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/code" className='hover-underline-custom'>
                <div>
                  VIEW CODE
                  <div></div>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className='bg-[#222] w-[360px] md:w-[0px] h-[2px] mb-[20px] md:mb-[10px]'></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<PlayGround />} />
          <Route path="/code" element={<ViewCode />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
