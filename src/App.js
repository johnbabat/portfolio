import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import ToolsPack from './components/toolsPack/ToolsPack';
import Contact from './components/contact/Contact';

import { isChrome, vh } from './utils/checkIfChrome';

import './App.scss';
import { useEffect, useState } from 'react';
import Menu from './components/menu/Menu';
import Land from './components/Land/Land';

function App() {

  const fixChromeScrollBug = (e) => {
    if(isChrome) {
      e.preventDefault()
      const el = document.querySelector('.sections');
      let dir
      e.deltaY > 1 ? dir = 1 : dir = -1
      el.scrollBy(0, dir*vh)
    }
  }

  useEffect(() => {
    const el = document.querySelector('.sections');
    if (el) {
      el.onwheel = fixChromeScrollBug
    }
  }, [])

  const [menuOpen, setMenuOpen] = useState(false)
  const [toggleMode, setToggleMode] = useState(false)
  const [came, setCame] = useState(3)

  setTimeout(() => {
    setCame(0)
  }, 8500);

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
