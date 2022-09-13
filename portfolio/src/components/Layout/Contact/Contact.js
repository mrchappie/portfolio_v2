import Input from '../../UI/Input/Input';
import classes from './Contact.module.css';

// import { useSelector } from 'react-redux';
import Card from '../../UI/Card/Card';

import BasicInfo from '../About/Skills/BasicInfo';

const Contact = () => {
  // const activeColor = useSelector((state) => state.activeColor.color);

  return (
    <Card className={classes.contact}>
      <div className={classes.about}>
        <BasicInfo></BasicInfo>
      </div>
      <Input className={classes.form}></Input>
    </Card>
  );
};

export default Contact;
