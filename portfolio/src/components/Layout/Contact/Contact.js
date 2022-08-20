import Input from '../../UI/Input/Input';
import classes from './Contact.module.css';

import profileImage from '../../../assets/profile_image.png';
import { useSelector } from 'react-redux';
import Button from '../../UI/Button/Button/Button';
import Card from '../../UI/Card/Card';

const Contact = () => {
  const activeColor = useSelector((state) => state.activeColor.color);

  return (
    <Card className={classes.contact}>
      <div className={classes.about}>
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
              Marian Alexandru Boscu
            </div>
            <div className={classes.birth}>24.12.1998</div>
            <div className={classes.address}>Bucharest, ROMANIA</div>
            <div className={classes.phone}>0771558180</div>
            <div className={classes.email}>boscu20@gmail.com</div>
          </div>
          <div className={classes.bottom}>
            <Button style={{ backgroundColor: activeColor }}>
              Download CV
            </Button>
          </div>
        </div>
      </div>
      <Input className={classes.form}></Input>
    </Card>
  );
};

export default Contact;
