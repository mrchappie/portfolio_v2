import { Fragment, useContext, useState } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Header/Nav/Nav';
import About from './components/Layout/About/About';
import Contact from './components/Layout/Contact/Contact';
import Home from './components/Layout/Home/Home';
import Projects from './components/Layout/Projects/Projects';
// import PortfolioContext from './context/portfolio-context';
// import PortProvider from './context/PortProvider';
import TsParticles from './components/Layout/Particles/TsParticle';

import ReactDOM from 'react-dom';

function App() {
  const portalElem = document.getElementById('particles-bg');

  // const ctx = useContext(PortfolioContext);

  // CHANGING PAGES LOGIC
  const [isHomeActive, setHomeIsActive] = useState(false);
  const [isAboutActive, setAboutIsActive] = useState(true);
  const [isProjectsActive, setProjectsIsActive] = useState(false);
  const [isContactActive, setContactIsActive] = useState(false);

  const activeHomeHandler = () => {
    console.log('0');
    setHomeIsActive(true);
    setAboutIsActive(false);
    setProjectsIsActive(false);
    setContactIsActive(false);
  };

  const activeAboutHandler = () => {
    setHomeIsActive(false);
    setAboutIsActive(true);
    setProjectsIsActive(false);
    setContactIsActive(false);
    console.log('1');
  };

  const activeProjectsHandler = () => {
    setHomeIsActive(false);
    setAboutIsActive(false);
    setProjectsIsActive(true);
    setContactIsActive(false);
    console.log('2');
  };

  const activeContactHandler = () => {
    setHomeIsActive(false);
    setAboutIsActive(false);
    setProjectsIsActive(false);
    setContactIsActive(true);
    console.log('3');
  };

  return (
    <Fragment>
      {/* {ReactDOM.createPortal(<TsParticles></TsParticles>, portalElem)} */}
      <Header>
        <Nav
          onChangeH={activeHomeHandler}
          onChangeA={activeAboutHandler}
          onChangeP={activeProjectsHandler}
          onChangeC={activeContactHandler}
        ></Nav>
      </Header>
      <main>
        {isHomeActive && <Home></Home>}
        {isAboutActive && <About></About>}
        {isProjectsActive && <Projects></Projects>}
        {isContactActive && <Contact></Contact>}
      </main>
    </Fragment>
  );
}

export default App;
