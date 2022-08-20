import { useSelector } from 'react-redux';
import Button from '../Button/Button/Button';
import classes from './Input.module.css';

const Input = (props) => {
  const activeColor = useSelector((state) => state.activeColor.color);

  return (
    <div className={props.className}>
      <form className={classes['form-container']}>
        <div className={classes['top-info']}>
          <div className={classes.name}>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className={classes.email}>
            <input type="text" id="name" placeholder="Email" />
          </div>
        </div>
        <div className={classes.message}>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
        <Button style={{ backgroundColor: activeColor }}>Contact Me</Button>
      </form>
    </div>
  );
};
export default Input;
