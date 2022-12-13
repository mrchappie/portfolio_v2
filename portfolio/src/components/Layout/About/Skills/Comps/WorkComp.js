import { Fragment } from 'react';
import classes from './WorkComp.module.css';

const WorkComp = (props) => {
  return (
    <Fragment>
      <div className={classes.firstRow}>
        {props.post} at{' '}
        <span style={{ color: props.color }}>{props.company}</span>
      </div>
      <div className={classes.secondRow}>
        <div>
          <span>{props.start} </span> - {props.finished}
        </div>
        <div>
          {props.city}, {props.country}
        </div>
      </div>
      <div className={classes.thirdRow}>{props.shortDescription}</div>
    </Fragment>
  );
};

export default WorkComp;
