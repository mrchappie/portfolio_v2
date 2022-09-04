import React, { Fragment, Suspense } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Nav from './components/Header/Nav/Nav';
// import About from './components/Layout/About/About';
import Contact from './components/Layout/Contact/Contact';
import Home from './components/Layout/Home/Home';
// import Projects from './components/Layout/Projects/Projects';
import Settings from './components/UI/Settings/settings';

// import { useEffect } from 'react';
// import { useState } from 'react';
import VideoBackground from './components/UI/VideoBackground/VideoBackground';
import WhyChappie from './components/Header/WhyChappie/WhyChappie';
import LoadingSpinner from './components/UI/LoadingSpinner/LoadingSpinner';

const About = React.lazy(() => import('./components/Layout/About/About'));
const Projects = React.lazy(() =>
  import('./components/Layout/Projects/Projects')
);

function App() {
  const activePage = useSelector((state) => state.activePage.active);
  const activeLogo = useSelector((state) => state.activeLogo.active);

  // const [isLoading, setIsloading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsloading(false);
  //   }, 2200);
  // }, []);

  return (
    <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
      <Fragment>
        {/* {isLoading && <LoadingPage></LoadingPage>} */}

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
