import classes from './Projects.module.css';
// import Carousel from '../../UI//Carousel/Carousel';
// import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className={classes['projects-container']}>
      {/* <Carousel></Carousel> */}
      {/* <Link to="it-is-about-movies">
        <div></div>
      </Link>
      <Link to="dad-jokes">
        <div></div>
      </Link>
      <Link to="weather-app">
        <div></div>
      </Link>
      <Link to="tic-tac-toe">
        <div></div>
      </Link> */}

      <div className={classes.snap}>
        <h1>..upss, he did again, but this time...ahh, nothing remained</h1>
        <img
          src="https://miro.medium.com/max/1400/1*jZXrm56RCBGOu75YVCWcrQ.jpeg"
          alt="thanos snap"
          width="600px"
        />
      </div>
    </div>
  );
};

export default Projects;
