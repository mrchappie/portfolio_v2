import { Fragment } from 'react';
import Button from '../../../UI/Button/Button/Button';
import CloseButton from '../../../UI/Button/Button/CloseButton';
import classes from './Skills.module.css';
import profileImage from '../../../../assets/profile_image.png';

const Skills = (props) => {
  return (
    <Fragment>
      <div className={classes.more}>
        <div className={classes.left}>
          <div className={classes.top}>
            <div className={classes['profile-image']}>
              <img src={profileImage} alt="Marian Alexandru Boscu" />
            </div>
            <div className={classes.name}>
              Alexandru <span>BOSCU</span>
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
            <Button>Download CV</Button>
          </div>
        </div>
        <div className={classes.right}>
          <CloseButton className={classes.btn} onClick={props.onChangeActive}>
            X
          </CloseButton>
          <div className={classes['right-content']}>
            <div className={classes['about-me']}>
              <h2>
                About <span>Me</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                velit, ipsa totam facere nostrum cumque dolorem laborum neque
                corrupti amet explicabo repudiandae aliquid provident, sequi non
                beatae tenetur impedit similique harum officia. Earum animi
                doloremque exercitationem, quos voluptate libero? Tempora!
              </p>
            </div>
            <div className={classes.services}>
              <h2>
                Provided <span>Services</span>
              </h2>
              <ul>
                <li>Website Development</li>
                <li>Website Development</li>
                <li>Website Development</li>
                <li>Website Development</li>
              </ul>
            </div>
            <div className={classes.programming}>
              <h2>
                Programming <span>Skills</span>
              </h2>
              <ul>
                <li>Website Development</li>
                <li>Website Development</li>
                <li>Website Development</li>
                <li>Website Development</li>
              </ul>
            </div>
            <div className={classes.language}>
              <h2>
                Language <span>Skills</span>
              </h2>
              <ul>
                <li>Website Development</li>
                <li>Website Development</li>
                <li>Website Development</li>
                <li>Website Development</li>
              </ul>
            </div>
            <div className={classes.education}>
              <h2>
                Education <span>Timeline</span>
              </h2>
              <ul>
                <li>Website Development</li>
                <li>Website Development</li>
                <li>Website Development</li>
                <li>Website Development</li>
              </ul>
            </div>
            <div className={classes.work}>
              <h2>
                Working <span>Timeline</span>
              </h2>
              <ul>
                <li>Website Development</li>
                <li>Website Development</li>
                <li>Website Development</li>
                <li>Website Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
