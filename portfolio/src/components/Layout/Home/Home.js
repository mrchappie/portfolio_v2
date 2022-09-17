import classes from './Home.module.css';
import Button from '../../UI/Button/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { pageActions } from '../../../store/active-page';

import { ALEX_INFO } from '../../website-info/alex-info';
import profileImage from '../../../assets/profile_image_1.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faTelegram,
  faTwitter,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
  const activeColor = useSelector((state) => state.activeColor.color);
  const dispatch = useDispatch();

  const setActivePage = () => {
    dispatch(pageActions.contact());
  };

  return (
    <div className={classes.homeContainer}>
      <div className={classes.home}>
        <div className={classes.left}>
          <div className={classes.hello}>
            <hr />
            <h3>Hello</h3>
          </div>
          <div className={classes.name}>
            I'm {ALEX_INFO.name.firstName1}
            <span style={{ color: activeColor }}>
              {' '}
              {ALEX_INFO.name.lastName}
            </span>
          </div>

          <div className={classes.shortDesc}>
            <p>{ALEX_INFO.name.shortDescription}</p>
          </div>
          <Link to="/contact">
            <Button
              onClick={setActivePage}
              style={{ backgroundColor: activeColor }}
            >
              Get in Touch
            </Button>
          </Link>
        </div>
        <div className={classes.right}>
          <img src={profileImage} alt="Marian Alexandru Boscu profile" />
        </div>
      </div>
      <footer>
        <div className={classes.social}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTelegram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
