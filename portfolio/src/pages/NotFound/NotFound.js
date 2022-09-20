import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';

const NotFound = () => {
  const activeColor = useSelector((state) => state.activeColor.color);

  return (
    <div className={classes.mainbox}>
      <div className={classes.error}>
        <div className={classes.err}>4</div>
        <FontAwesomeIcon className={classes.far} icon={faCircleQuestion} />
        <div className={classes.err2}>4</div>
      </div>
      <div className={classes.msg}>
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          Let's go{' '}
          <Link to="/welcome" style={{ color: activeColor }} replace>
            home
          </Link>{' '}
          and try from there.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
