import { Fragment } from 'react';
import CloseButton from '../../../UI/Button/Button/CloseButton';
import classes from './Skills.module.css';
import { useSelector } from 'react-redux';
import BasicInfo from './BasicInfo';

import { ALEX_INFO } from '../../../website-info/alex-info';
import EducationComp from './Comps/EducationComp';
import WorkComp from './Comps/WorkComp';
import { Link } from 'react-router-dom';

const Skills = (props) => {
  const activeColor = useSelector((state) => state.activeColor.color);

  return (
    <Fragment>
      <div className={classes['more-container']}>
        <div className={classes.more}>
          <Link to="/about">
            <CloseButton className={classes.btn} onClick={props.onChangeActive}>
              X
            </CloseButton>
          </Link>
          <div className={classes.left}>
            <BasicInfo></BasicInfo>
          </div>
          <div className={classes['right-scroll']}>
            <div className={classes.right}>
              <div className={classes['right-content']}>
                <div className={classes['about-me']}>
                  <div className={classes.text}>
                    About<span style={{ color: activeColor }}> Me</span>
                  </div>
                  <div className={classes.shortDesc}>
                    <p>{ALEX_INFO.about.shortDescription}</p>
                  </div>
                </div>
                <div className={classes.services}>
                  <div className={classes.text}>
                    Provided{' '}
                    <span style={{ color: activeColor }}>Services</span>
                  </div>
                  <div className={classes.provServ}>
                    <ul>
                      <li>
                        <div className={classes.text}>
                          {ALEX_INFO.about.providedServices.frontend}
                        </div>
                      </li>
                      <li>
                        <div className={classes.text}>
                          {ALEX_INFO.about.providedServices.backend}
                        </div>
                      </li>
                      <li>
                        <div className={classes.text}>
                          {ALEX_INFO.about.providedServices.design.design}
                        </div>
                      </li>
                      <li>
                        <div className={classes.text}>
                          {ALEX_INFO.about.providedServices.design.ui}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={classes.programming}>
                  <div className={classes.text}>
                    Programming{' '}
                    <span style={{ color: activeColor }}>Skills</span>
                  </div>
                  <div className={classes.progLang}>
                    <ul>
                      <li>
                        <div className={classes.text}>
                          {ALEX_INFO.about.programming.html}
                        </div>
                      </li>
                      <li>
                        <div className={classes.text}>
                          {ALEX_INFO.about.programming.css}
                        </div>
                      </li>
                      <li>
                        <div className={classes.text}>
                          {ALEX_INFO.about.programming.js}
                        </div>
                      </li>
                      <li>
                        <div className={classes.text}>
                          {ALEX_INFO.about.programming.react}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={classes.language}>
                  <div className={classes.text}>
                    Language <span style={{ color: activeColor }}>Skills</span>
                  </div>
                  <div className={classes.lang}>
                    <ul>
                      <li>
                        <div className={classes.text}>
                          {ALEX_INFO.about.languages.rom}{' '}
                        </div>
                      </li>
                      <li>
                        <div className={classes.text}>
                          {ALEX_INFO.about.languages.eng}{' '}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={classes.education}>
                  <div className={classes.text}>
                    Education{' '}
                    <span style={{ color: activeColor }}>Timeline</span>
                  </div>
                  <div className={classes.eduContent}>
                    <ul>
                      <li>
                        <EducationComp
                          education={ALEX_INFO.about.education.master.education}
                          institution={
                            ALEX_INFO.about.education.master.institution
                          }
                          start={ALEX_INFO.about.education.master.date.start}
                          finished={
                            ALEX_INFO.about.education.master.date.finished
                          }
                          city={ALEX_INFO.about.education.master.city}
                          country={ALEX_INFO.about.education.master.country}
                          faculty={ALEX_INFO.about.education.master.faculty}
                          specialization={
                            ALEX_INFO.about.education.master.specialization
                          }
                        ></EducationComp>
                      </li>
                      <li>
                        <EducationComp
                          education={
                            ALEX_INFO.about.education.college.education
                          }
                          institution={
                            ALEX_INFO.about.education.college.institution
                          }
                          start={ALEX_INFO.about.education.college.date.start}
                          finished={
                            ALEX_INFO.about.education.college.date.finished
                          }
                          city={ALEX_INFO.about.education.college.city}
                          country={ALEX_INFO.about.education.college.country}
                          faculty={ALEX_INFO.about.education.college.faculty}
                          specialization={
                            ALEX_INFO.about.education.college.specialization
                          }
                        ></EducationComp>
                      </li>
                      <li>
                        <EducationComp
                          education={
                            ALEX_INFO.about.education.hightSchool.education
                          }
                          institution={
                            ALEX_INFO.about.education.hightSchool.institution
                          }
                          start={
                            ALEX_INFO.about.education.hightSchool.date.start
                          }
                          finished={
                            ALEX_INFO.about.education.hightSchool.date.finished
                          }
                          city={ALEX_INFO.about.education.hightSchool.city}
                          country={
                            ALEX_INFO.about.education.hightSchool.country
                          }
                          faculty={
                            ALEX_INFO.about.education.hightSchool.faculty
                          }
                          specialization={
                            ALEX_INFO.about.education.hightSchool.specialization
                          }
                        ></EducationComp>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={classes.work}>
                  <div className={classes.text}>
                    Working <span style={{ color: activeColor }}>Timeline</span>
                  </div>
                  <div className={classes.workContent}>
                    <ul>
                      <li>
                        <WorkComp
                          post={ALEX_INFO.about.experience.job2.post}
                          company={ALEX_INFO.about.experience.job2.company}
                          shortDescription={
                            ALEX_INFO.about.experience.job2.shortDescription
                          }
                          start={ALEX_INFO.about.experience.job2.period.start}
                          finished={
                            ALEX_INFO.about.experience.job2.period.finished
                          }
                          city={ALEX_INFO.about.experience.job2.location.city}
                          country={
                            ALEX_INFO.about.experience.job2.location.country
                          }
                        ></WorkComp>
                      </li>
                      <li>
                        <WorkComp
                          post={ALEX_INFO.about.experience.job1.post}
                          company={ALEX_INFO.about.experience.job1.company}
                          shortDescription={
                            ALEX_INFO.about.experience.job1.shortDescription
                          }
                          start={ALEX_INFO.about.experience.job1.period.start}
                          finished={
                            ALEX_INFO.about.experience.job1.period.finished
                          }
                          city={ALEX_INFO.about.experience.job1.location.city}
                          country={
                            ALEX_INFO.about.experience.job1.location.country
                          }
                        ></WorkComp>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
