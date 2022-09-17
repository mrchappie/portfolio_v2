// import React, { Fragment, Suspense } from 'react';
// import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Nav from './components/Header/Nav/Nav';
// import Settings from './components/UI/Settings/settings';

import VideoBackground from './components/UI/VideoBackground/VideoBackground';
// import WhyChappie from './components/Header/WhyChappie/WhyChappie';
// import LoadingSpinner from './components/UI/LoadingSpinner/LoadingSpinner';
import { Route, Routes, Navigate } from 'react-router-dom';

// const About = React.lazy(() => import('./components/Layout/About/About'));
// const Projects = React.lazy(() =>
//   import('./components/Layout/Projects/Projects')
// );
// const Home = React.lazy(() => import('./components/Layout/Home/Home'));
// const Contact = React.lazy(() => import('./components/Layout/Contact/Contact'));

import Home from './pages/Home';
import About from './pages/About';
import Skills from './components/Layout/About/Skills/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  // const activePage = useSelector((state) => state.activePage.active);
  // const activeLogo = useSelector((state) => state.activeLogo.active);

  // return (
  //   <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
  //     <Fragment>
  //       {!activeLogo && (
  //         <Header>
  //           <Nav></Nav>
  //         </Header>
  //       )}
  //       <main>
  //         {activeLogo && <WhyChappie></WhyChappie>}
  //         <Settings></Settings>
  //         {activePage === 0 && !activeLogo && <Home></Home>}
  //         {activePage === 1 && !activeLogo && <About></About>}
  //         {activePage === 2 && !activeLogo && <Projects></Projects>}
  //         {activePage === 3 && !activeLogo && <Contact></Contact>}
  //       </main>
  //       <VideoBackground></VideoBackground>
  //     </Fragment>
  //   </Suspense>
  // );

  return (
    <div>
      <Header>
        <Nav></Nav>
      </Header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/welcome"></Navigate>}
          ></Route>
          <Route path="/welcome" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/about/read-more" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<p>404. Page not found!</p>}></Route>
        </Routes>
      </main>
      <VideoBackground></VideoBackground>
    </div>
  );
}

export default App;
