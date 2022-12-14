import classes from './About.module.css';
import profileImage from '../../../assets/proile-pictures/profile_image_2.jpg';
import Button from '../../UI/Button/Button/Button';
// import Skills from './Skills/Skills';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { ALEX_INFO } from '../../website-info/alex-info';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  const activeColor = useSelector((state) => state.activeColor.color);
  const [isLearMoreActive, setLearMoreActive] = useState(false);

  const setLearMoreActiveHandler = () => {
    setLearMoreActive(true);
  };

  // const removeLearMoreHandler = () => {
  //   setLearMoreActive(false);
  // };

  return (
    <div className={classes.container}>
      {!isLearMoreActive && (
        <div className={classes.about}>
          <div className={classes['profile-image']}>
            <img src={profileImage} alt="Marian Alexandru Boscu profile" />
          </div>
          <div className={classes.profile}>
            <div className={classes.name}>
              {ALEX_INFO.name.firstName1}{' '}
              <span style={{ color: activeColor }}>
                {ALEX_INFO.name.lastName}
              </span>
            </div>
            <div className={classes.job}>{ALEX_INFO.about.job}</div>
            <div className={classes.description}>
              <p>{ALEX_INFO.about.description}</p>
            </div>
            <Link to="read-more">
              <Button
                onClick={setLearMoreActiveHandler}
                style={{ backgroundColor: activeColor }}
              >
                Read More
              </Button>
            </Link>
          </div>
        </div>
      )}
      <Outlet />
      {/* {isLearMoreActive && (
        <Skills onChangeActive={removeLearMoreHandler}></Skills>
      )} */}
      {/* <Link to="read-more">
        <Skills onChangeActive={removeLearMoreHandler}></Skills>
      </Link> */}
    </div>
  );
};

export default About;
