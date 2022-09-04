import classes from './BasicInfo.module.css';

import profileImage from '../../../../assets/profile_image.png';
import Button from '../../../UI/Button/Button/Button';
import { useSelector } from 'react-redux';

import { ALEX_INFO } from '../../../website-info/alex-info';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCalendar, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faLocation,
  faPerson,
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
          <FontAwesomeIcon
            icon={faPerson}
            style={{ color: activeColor }}
          ></FontAwesomeIcon>{' '}
          {ALEX_INFO.name.firstName1} {ALEX_INFO.name.firstName2}{' '}
          {ALEX_INFO.name.lastName}
        </div>
        <div className={classes.birth}>
          <FontAwesomeIcon
            style={{ color: activeColor }}
            icon={faCalendar}
          ></FontAwesomeIcon>{' '}
          {ALEX_INFO.about.dateOfBirth.full}
        </div>
        <div className={classes.address}>
          <FontAwesomeIcon
            icon={faLocation}
            style={{ color: activeColor }}
          ></FontAwesomeIcon>{' '}
          {ALEX_INFO.about.location.city}, {ALEX_INFO.about.location.country}
        </div>
        <div className={classes.phone}>
          <FontAwesomeIcon
            icon={faPhone}
            style={{ color: activeColor }}
          ></FontAwesomeIcon>{' '}
          {ALEX_INFO.about.phoneNumber}
        </div>
        <div className={classes.email}>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: activeColor }}
          ></FontAwesomeIcon>{' '}
          {ALEX_INFO.about.email}
        </div>
      </div>
      <div className={classes.bottom}>
        <Button style={{ backgroundColor: activeColor }}>Download CV</Button>
      </div>
    </div>
  );
};

export default BasicInfo;
