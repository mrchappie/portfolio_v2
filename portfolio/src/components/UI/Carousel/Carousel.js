import classes from './Carousel.module.css';
import Slide from '../Slide/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { slideActions } from '../../../store/carousel-slide';

import { useEffect, useCallback } from 'react';
import LeftArrow from '../Icons/LeftArrow';
import RightArrow from '../Icons/RightArrow';

const carouselContent = [
  {
    id: 0,
    name: 'Project 1',
    description: 'Project name / short description!',
    url: 'https://picsum.photos/590',
  },
  {
    id: 1,
    name: 'Project 2',
    description: 'Project name / short description!',
    url: 'https://picsum.photos/590',
  },
  {
    id: 2,
    name: 'Project 3',
    description: 'Project name / short description!',
    url: 'https://picsum.photos/590',
  },
  {
    id: 3,
    name: 'Project 4',
    description: 'Project name / short description!',
    url: 'https://picsum.photos/590',
  },
  {
    id: 4,
    name: 'Project 5',
    description: 'Project name / short description!',
    url: 'https://picsum.photos/590',
  },
];

const Carousel = () => {
  const activeColor = useSelector((state) => state.activeColor.color);

  const position = useSelector((state) => state.activeSlide.position);
  const activeSlide = useSelector((state) => state.activeSlide.activeSlide);

  const dispatch = useDispatch();

  const moveSlideLeft = () => {
    if (activeSlide === 0) {
      dispatch(slideActions.goToLast(carouselContent.length - 2));
    } else {
      dispatch(slideActions.moveLeft());
    }
  };

  const moveSlideRight = useCallback(() => {
    if (activeSlide === carouselContent.length - 2) {
      dispatch(slideActions.goToFirst(0));
    } else {
      dispatch(slideActions.moveRight());
    }
  }, [activeSlide, dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      moveSlideRight();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [activeSlide, moveSlideRight]);

  const pos = { transform: `translateX(${position}px)` };

  const slides = carouselContent.map((slide) => {
    return (
      <Slide
        description={slide.description}
        name={slide.name}
        url={slide.url}
        style={pos}
        key={slide.id}
      ></Slide>
    );
  });

  return (
    <div className={classes.carousel}>
      <button onClick={moveSlideLeft} className={classes.prev}>
        <LeftArrow style={{ color: activeColor }}></LeftArrow>
      </button>
      <div className={classes.carousel}>{slides}</div>
      <button onClick={moveSlideRight} className={classes.next}>
        <RightArrow style={{ color: activeColor }}></RightArrow>
      </button>
    </div>
  );
};

export default Carousel;
