import classes from './Carousel.module.css';
import Slide from '../Slide/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { slideActions } from '../../../store/carousel-slide';

import {
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
  useRef,
} from 'react';
import LeftArrow from '../Icons/LeftArrow';
import RightArrow from '../Icons/RightArrow';

import project0 from '../../../assets/project_1.png';
import project1 from '../../../assets/project_2.png';
import project2 from '../../../assets/project_3.png';
import project3 from '../../../assets/project_4.png';
import project4 from '../../../assets/project_5.png';

const carouselContent = [
  {
    id: 0,
    name: 'Informations About Movies',
    description: 'Project name / short description!',
    url: project0,
  },
  {
    id: 1,

    name: 'My Resume',
    description: 'Project name / short description!',
    url: project4,
  },
  {
    id: 2,
    name: 'Weather App',
    description: 'Project name / short description!',
    url: project2,
  },
  {
    id: 3,
    name: 'Tic Tac Toe: Alien Edition',
    description: 'Project name / short description!',
    url: project3,
  },
  {
    id: 4,
    name: 'Dad Jokes',
    description: 'Project name / short description!',
    url: project1,
  },
];

const Carousel = () => {
  const activeColor = useSelector((state) => state.activeColor.color);

  const position = useSelector((state) => state.activeSlide.position);
  const activeSlide = useSelector((state) => state.activeSlide.activeSlide);

  const dispatch = useDispatch();

  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  const moveSlideLeft = () => {
    if (activeSlide === 0) {
      dispatch(
        slideActions.goToLast({
          slide: carouselContent.length - 2,
          width,
          height,
        })
      );
    } else {
      dispatch(slideActions.moveLeft({ width, height }));
    }
  };

  const moveSlideRight = useCallback(() => {
    if (activeSlide === carouselContent.length - 2) {
      dispatch(slideActions.goToFirst({ slide: 0, width, height }));
    } else {
      dispatch(slideActions.moveRight({ width, height }));
    }
  }, [activeSlide, dispatch, height, width]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      moveSlideRight();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [activeSlide, moveSlideRight]);

  const pos = `translateX(${position}px)`;
  // const pos = { transform: `translateX(${position}px)` };

  const slides = carouselContent.map((slide) => {
    return (
      <Slide
        description={slide.description}
        name={slide.name}
        url={slide.url}
        style={pos}
        key={slide.id}
        slideSize={{ width, height }}
      ></Slide>
    );
  });

  return (
    <div className={classes.carouselContainer}>
      <div className={classes.leftBtn}>
        <button onClick={moveSlideLeft} className={classes.prev}>
          <LeftArrow style={{ color: activeColor }}></LeftArrow>
        </button>
      </div>
      <div className={classes.slideContainer}>
        <div className={classes.mask}>
          <div className={classes.carousel} ref={ref}>
            {slides}
          </div>
        </div>
      </div>
      <div className={classes.rightBtn}>
        <button onClick={moveSlideRight} className={classes.next}>
          <RightArrow style={{ color: activeColor }}></RightArrow>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
