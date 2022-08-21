import classes from './BasicInfo.module.css';

import profileImage from '../../../../assets/profile_image.png';
import Button from '../../../UI/Button/Button/Button';
import { useSelector } from 'react-redux';
import Man from '../../../UI/Icons/BasicInfoIcons/manIcon';
import Date from '../../../UI/Icons/BasicInfoIcons/dateIcon';
import Location from '../../../UI/Icons/BasicInfoIcons/locationIcon';
import MobilePhone from '../../../UI/Icons/BasicInfoIcons/mobilePhoneIcon';
import Mail from '../../../UI/Icons/BasicInfoIcons/mailIcon';

const BasicInfo = () => {
  const activeColor = useSelector((state) => state.activeColor.color);

  return (
    <div className={classes.left}>
      <div className={classes.top}>
        <div className={classes['profile-image']}>
          <img src={profileImage} alt="Marian Alexandru Boscu" />
        </div>
        <div className={classes.name}>
          Alexandru <span style={{ color: activeColor }}>BOSCU</span>
        </div>
        <div className={classes.job}>WEB DEVELOPER</div>
      </div>
      <div className={classes.middle}>
        <div className={classes['name-classic']}>
          <Man style={{ color: activeColor }}></Man> Marian Alexandru Boscu
        </div>
        <div className={classes.birth}>
          <Date style={{ color: activeColor }}></Date> 24.12.1998
        </div>
        <div className={classes.address}>
          <Location style={{ color: activeColor }}></Location> Bucharest,
          ROMANIA
        </div>
        <div className={classes.phone}>
          <MobilePhone style={{ color: activeColor }}></MobilePhone> 0771558180
        </div>
        <div className={classes.email}>
          <Mail style={{ color: activeColor }}></Mail> boscu20@gmail.com
        </div>
      </div>
      <div className={classes.bottom}>
        <Button style={{ backgroundColor: activeColor }}>Download CV</Button>
      </div>
    </div>
  );
};

export default BasicInfo;
