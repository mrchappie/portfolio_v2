import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button/Button/Button';
import classes from './Input.module.css';

const Input = (props) => {
  const activeColor = useSelector((state) => state.activeColor.color);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendInputData = (event) => {
    event.preventDefault();

    props.onGetInputData({
      name: name,
      email: email,
      message: message,
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={props.className}>
      <form className={classes['form-container']} onSubmit={sendInputData}>
        <div className={classes['top-info']}>
          <div className={classes.name}>
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </div>
          <div className={classes.email}>
            <input
              type="text"
              id="name"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
        </div>
        <div className={classes.message}>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          ></textarea>
        </div>
        <Button type="submit" style={{ backgroundColor: activeColor }}>
          Contact Me
        </Button>
      </form>
    </div>
  );
};
export default Input;
