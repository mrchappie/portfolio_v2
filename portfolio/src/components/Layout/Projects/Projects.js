import classes from './Projects.module.css';
import Carousel from '../../UI//Carousel/Carousel';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { slideActions } from '../../../store/carousel-slide';

const Projects = () => {
  // const activeSlide = useSelector((state) => state.activeSlide.activeSlide);

  return (
    <div className={classes['projects-container']}>
      <Carousel></Carousel>
    </div>
  );
};

export default Projects;
