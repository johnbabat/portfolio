import { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import ToolsPack from './components/toolsPack/ToolsPack';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import Land from './components/land/Land';

// import { isChrome, vh } from './utils/checkIfChrome';

import './App.scss';


function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [toggleMode, setToggleMode] = useState(false)
  const [came, setCame] = useState(true)

  setTimeout(() => {
    setCame(false)
  }, 1000);

  return (
    <div className={`app${came ? ' justLanded': ''}`}>
        <div className='tempPage'>
          <Land/>
        </div>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} toggleMode={toggleMode} setToggleMode={setToggleMode} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections" >
          <Intro toggleMode={toggleMode} setToggleMode={setToggleMode} />
          <Portfolio toggleMode={toggleMode} setToggleMode={setToggleMode} />
          <ToolsPack toggleMode={toggleMode} setToggleMode={setToggleMode} />
          <Contact toggleMode={toggleMode} setToggleMode={setToggleMode} />
        </div>      
    </div>
  );
}


export default App;
