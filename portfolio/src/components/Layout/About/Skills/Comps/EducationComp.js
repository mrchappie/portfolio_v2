import { Fragment } from 'react';
import classes from './EducationComp.module.css';

const EducationComp = (props) => {
  return (
    <Fragment>
      <div className={classes.firstRow}>
        <div>
          {props.education} at{' '}
          <span style={{ color: props.color }}>{props.institution}</span>
        </div>
      </div>
      <div className={classes.secondRow}>
        <div>
          <span>{props.start} </span> - {props.finished}
        </div>
        <div>
          {props.city}, {props.country}
        </div>
      </div>
      <div className={classes.thirdRow}>
        <div>{props.faculty}</div>
        <div>{props.specialization}</div>
      </div>
    </Fragment>
  );
};

export default EducationComp;
