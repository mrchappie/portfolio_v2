import classes from './Projects.module.css';
import Carousel from '../../UI//Carousel/Carousel';

const Projects = () => {
  return (
    <div className={classes['projects-container']}>
      <Carousel></Carousel>
    </div>
  );
};

export default Projects;
