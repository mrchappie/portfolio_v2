import React, { Fragment, Suspense } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Nav from './components/Header/Nav/Nav';
// import About from './components/Layout/About/About';
import Contact from './components/Layout/Contact/Contact';
import Home from './components/Layout/Home/Home';
// import Projects from './components/Layout/Projects/Projects';
import Settings from './components/UI/Settings/settings';

// import SmallScreen from './components/UI/SmallScreen/SmallScreen';

// import TsParticles from './components/Layout/Particles/TsParticle';

// import ReactDOM from 'react-dom';
import LoadingPage from './components/UI/LoadingPage/LoadingPage';
import { useEffect } from 'react';
import { useState } from 'react';
import VideoBackground from './components/UI/VideoBackground/VideoBackground';
import WhyChappie from './components/Header/WhyChappie/WhyChappie';
// import { useEffect } from 'react';
// import { useCallback } from 'react';

const About = React.lazy(() => import('./components/Layout/About/About'));
const Projects = React.lazy(() =>
  import('./components/Layout/Projects/Projects')
);

function App() {
  // const portalElem = document.getElementById('particles-bg');

  const activePage = useSelector((state) => state.activePage.active);
  const activeLogo = useSelector((state) => state.activeLogo.active);

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2200);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="centered">
          <p>Loading...</p>
        </div>
      }
    >
      <Fragment>
        {/* {ReactDOM.createPortal(<TsParticles></TsParticles>, portalElem)} */}
        {/* {ReactDOM.createPortal(<SmallScreen></SmallScreen>, portalElem)} */}
        {isLoading && <LoadingPage></LoadingPage>}

        {!activeLogo && (
          <Header>
            <Nav></Nav>
          </Header>
        )}
        <main>
          {activeLogo && <WhyChappie></WhyChappie>}
          <Settings></Settings>
          {activePage === 0 && !activeLogo && <Home></Home>}
          {activePage === 1 && !activeLogo && <About></About>}
          {activePage === 2 && !activeLogo && <Projects></Projects>}
          {activePage === 3 && !activeLogo && <Contact></Contact>}
        </main>
        <VideoBackground></VideoBackground>
      </Fragment>
    </Suspense>
  );
}

export default App;
