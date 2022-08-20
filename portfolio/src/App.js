import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Nav from './components/Header/Nav/Nav';
import About from './components/Layout/About/About';
import Contact from './components/Layout/Contact/Contact';
import Home from './components/Layout/Home/Home';
import Projects from './components/Layout/Projects/Projects';
import Settings from './components/UI/Settings/settings';

import TsParticles from './components/Layout/Particles/TsParticle';

import ReactDOM from 'react-dom';

function App() {
  const portalElem = document.getElementById('particles-bg');

  const activePage = useSelector((state) => state.activePage.active);

  return (
    <Fragment>
      {ReactDOM.createPortal(<TsParticles></TsParticles>, portalElem)}
      <Header>
        <Nav></Nav>
      </Header>
      <main>
        <Settings></Settings>
        {activePage === 0 && <Home></Home>}
        {activePage === 1 && <About></About>}
        {activePage === 2 && <Projects></Projects>}
        {activePage === 3 && <Contact></Contact>}
      </main>
    </Fragment>
  );
}

export default App;
