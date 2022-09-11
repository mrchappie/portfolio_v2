import classes from './BasicInfo.module.css';

import profileImage from '../../../../assets/profile_image_2.jpg';
import Button from '../../../UI/Button/Button/Button';
import { useSelector } from 'react-redux';

import { ALEX_INFO } from '../../../website-info/alex-info';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCalendar, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faLocationPin,
  faUser,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const BasicInfo = () => {
  const activeColor = useSelector((state) => state.activeColor.color);

  return (
    <div className={classes.left}>
      <div className={classes.top}>
        <div className={classes['profile-image']}>
          <img src={profileImage} alt="Marian Alexandru Boscu" />
        </div>
        <div className={classes.name}>
          {ALEX_INFO.name.firstName1}{' '}
          <span style={{ color: activeColor }}>{ALEX_INFO.name.lastName}</span>
        </div>
        <div className={classes.job}>{ALEX_INFO.about.job}</div>
      </div>
      <div className={classes.middle}>
        <div className={classes['name-classic']}>
          <div className={classes.icon}>
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: activeColor }}
            ></FontAwesomeIcon>
          </div>
          <div className={classes.text}>
            {ALEX_INFO.name.firstName1} {ALEX_INFO.name.firstName2}{' '}
            {ALEX_INFO.name.lastName}
          </div>
        </div>
        <div className={classes.birth}>
          <div className={classes.icon}>
            <FontAwesomeIcon
              style={{ color: activeColor }}
              icon={faCalendar}
            ></FontAwesomeIcon>
          </div>
          <div className={classes.text}>{ALEX_INFO.about.dateOfBirth.full}</div>
        </div>
        <div className={classes.address}>
          <div className={classes.icon}>
            <FontAwesomeIcon
              icon={faLocationPin}
              style={{ color: activeColor }}
            ></FontAwesomeIcon>
          </div>
          <div className={classes.text}>
            {ALEX_INFO.about.location.city}, {ALEX_INFO.about.location.country}
          </div>
        </div>
        <div className={classes.phone}>
          <div className={classes.icon}>
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: activeColor }}
            ></FontAwesomeIcon>
          </div>
          <div className={classes.text}>{ALEX_INFO.about.phoneNumber}</div>
        </div>
        <div className={classes.email}>
          <div className={classes.icon}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: activeColor }}
            ></FontAwesomeIcon>
          </div>
          <div className={classes.text}>{ALEX_INFO.about.email}</div>
        </div>
      </div>
      <div className={classes.bottom}>
        <Button style={{ backgroundColor: activeColor }}>Download CV</Button>
      </div>
    </div>
  );
};

export default BasicInfo;
