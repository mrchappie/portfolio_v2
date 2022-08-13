import { Carousel } from 'react-responsive-carousel';
import classes from './Projects.module.css';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const Projects = () => {
  return (
    <div className={classes['projects-container']}>
      <Carousel>
        <div className={classes.project}>Project 1</div>
        <div className={classes.project}>Project 1</div>
        <div className={classes.project}>Project 1</div>
        <div className={classes.project}>Project 1</div>
      </Carousel>
    </div>
  );
};

export default Projects;
