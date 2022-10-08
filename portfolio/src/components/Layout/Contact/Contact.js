import Input from '../../UI/Input/Input';
import classes from './Contact.module.css';

// import { useSelector } from 'react-redux';
import Card from '../../UI/Card/Card';

import BasicInfo from '../About/Skills/BasicInfo';

import useHttp from '../../../../src/hooks/use-http';

const Contact = () => {
  // const activeColor = useSelector((state) => state.activeColor.color);

  const getInputData = (dataReceived) => {
    // console.log(dataReceived);
    sendDataRequest(dataReceived);
  };

  const { isLoading, error, sendRequest: sendData } = useHttp();

  const sendDataRequest = async (dataToBeSent) => {
    sendData({
      url: 'https://portfolio-chappie-default-rtdb.europe-west1.firebasedatabase.app/messages.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: dataToBeSent.name,
        email: dataToBeSent.email,
        message: dataToBeSent.message,
      }),
    });
  };

  return (
    <div className={classes['contact-container']}>
      <Card className={classes.contact}>
        <div className={classes.about}>
          <BasicInfo></BasicInfo>
        </div>
        <Input className={classes.form} onGetInputData={getInputData}></Input>
        <div className={classes.error}>
          {isLoading && <p>{error ? error : 'Your message is on my way...'}</p>}
        </div>
      </Card>
    </div>
  );
};

export default Contact;
