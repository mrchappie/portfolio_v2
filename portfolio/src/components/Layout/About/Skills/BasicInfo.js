import classes from './BasicInfo.module.css';

import profileImage from '../../../../assets/profile_image.png';
import Button from '../../../UI/Button/Button/Button';
import { useSelector } from 'react-redux';
import Man from '../../../UI/Icons/BasicInfoIcons/manIcon';
import Date from '../../../UI/Icons/BasicInfoIcons/dateIcon';
import Location from '../../../UI/Icons/BasicInfoIcons/locationIcon';
import MobilePhone from '../../../UI/Icons/BasicInfoIcons/mobilePhoneIcon';
import Mail from '../../../UI/Icons/BasicInfoIcons/mailIcon';

import { ALEX_INFO } from '../../../website-info/alex-info';

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
          <Man style={{ color: activeColor }}></Man> {ALEX_INFO.name.firstName1}{' '}
          {ALEX_INFO.name.firstName2} {ALEX_INFO.name.lastName}
        </div>
        <div className={classes.birth}>
          <Date style={{ color: activeColor }}></Date>{' '}
          {ALEX_INFO.about.dateOfBirth.full}
        </div>
        <div className={classes.address}>
          <Location style={{ color: activeColor }}></Location>{' '}
          {ALEX_INFO.about.location.city}, {ALEX_INFO.about.location.country}
        </div>
        <div className={classes.phone}>
          <MobilePhone style={{ color: activeColor }}></MobilePhone>{' '}
          {ALEX_INFO.about.phoneNumber}
        </div>
        <div className={classes.email}>
          <Mail style={{ color: activeColor }}></Mail> {ALEX_INFO.about.email}
        </div>
      </div>
      <div className={classes.bottom}>
        <Button style={{ backgroundColor: activeColor }}>Download CV</Button>
      </div>
    </div>
  );
};

export default BasicInfo;
