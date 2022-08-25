import { Fragment } from 'react';
import CloseButton from '../../../UI/Button/Button/CloseButton';
import classes from './Skills.module.css';
import { useSelector } from 'react-redux';
import BasicInfo from './BasicInfo';

import { ALEX_INFO } from '../../../website-info/alex-info';

const Skills = (props) => {
  const activeColor = useSelector((state) => state.activeColor.color);

  return (
    <Fragment>
      <div className={classes.more}>
        <CloseButton className={classes.btn} onClick={props.onChangeActive}>
          X
        </CloseButton>
        <div className={classes.left}>
          <BasicInfo></BasicInfo>
        </div>
        <div className={classes['right-scroll']}>
          <div className={classes.right}>
            <div className={classes['right-content']}>
              <div className={classes['about-me']}>
                <h2>
                  About <span style={{ color: activeColor }}>Me</span>
                </h2>
                <p>{ALEX_INFO.about.shortDescription}</p>
              </div>
              <div className={classes.services}>
                <h2>
                  Provided <span style={{ color: activeColor }}>Services</span>
                </h2>
                <ul>
                  <li>{ALEX_INFO.about.providedServices.frontend}</li>
                  <li>{ALEX_INFO.about.providedServices.backend}</li>
                  <li>{ALEX_INFO.about.providedServices.design.photo}</li>
                  <li>{ALEX_INFO.about.providedServices.design.ui}</li>
                </ul>
              </div>
              <div className={classes.programming}>
                <h2>
                  Programming <span style={{ color: activeColor }}>Skills</span>
                </h2>
                <ul>
                  <li>{ALEX_INFO.about.programming.html}</li>
                  <li>{ALEX_INFO.about.programming.css}</li>
                  <li>{ALEX_INFO.about.programming.js}</li>
                  <li>{ALEX_INFO.about.programming.react}</li>
                </ul>
              </div>
              <div className={classes.language}>
                <h2>
                  Language <span style={{ color: activeColor }}>Skills</span>
                </h2>
                <ul>
                  <li>{ALEX_INFO.about.languages.rom}</li>
                  <li>{ALEX_INFO.about.languages.eng}</li>
                </ul>
              </div>
              <div className={classes.education}>
                <h2>
                  Education <span style={{ color: activeColor }}>Timeline</span>
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
                  Working <span style={{ color: activeColor }}>Timeline</span>
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
      </div>
    </Fragment>
  );
};

export default Skills;
