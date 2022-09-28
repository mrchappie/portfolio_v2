import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Nav from './components/Header/Nav/Nav';
import Settings from './components/UI/Settings/settings';

// import VideoBackground from './components/UI/VideoBackground/VideoBackground';
import WhyChappie from './components/Header/WhyChappie/WhyChappie';
import LoadingSpinner from './components/UI/LoadingSpinner/LoadingSpinner';
import ProjectDetails from './components/Layout/Projects/project-details/ProjectDetails';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));

const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));
const Skills = React.lazy(() =>
  import('./components/Layout/About/Skills/Skills')
);

function App() {
  return (
    <div>
      <Header>
        <Nav></Nav>
      </Header>
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <main>
          <Settings></Settings>
          <Routes>
            <Route
              path="/"
              element={<Navigate replace to="/welcome"></Navigate>}
            ></Route>
            <Route path="/welcome" element={<Home />}></Route>
            <Route path="/welcome/why-chappie" element={<WhyChappie />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/about/read-more" element={<Skills />} />
            <Route path="/projects" element={<Projects />}></Route>
            <Route
              path="/projects/:projectName"
              element={<ProjectDetails />}
            ></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </main>
      </Suspense>
      {/* <VideoBackground></VideoBackground> */}
    </div>
  );
}

export default App;
