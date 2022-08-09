import classes from './Nav.module.css';
import logo from '../../../assets/robot.png';
import ButtonAsLink from '../../UI/Button/ButtonAsLink/ButtonAsLink';
// import { useContext, useState } from 'react';
// import PortfolioContext from '../../../context/portfolio-context';

const Nav = (props) => {
  // const ctx = useContext(PortfolioContext);

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img src={logo} alt="robot logo" />
      </div>
      <div className={classes.pages}>
        <ButtonAsLink onClick={props.onChangeH}>
          <span className={props.onChangeH ? 'active' : ''}>Home</span>
        </ButtonAsLink>
        <ButtonAsLink onClick={props.onChangeA}>
          <span className={props.onChangeA ? 'active' : ''}>About</span>
        </ButtonAsLink>
        <ButtonAsLink onClick={props.onChangeP}>
          <span>Projects</span>
        </ButtonAsLink>
        <ButtonAsLink onClick={props.onChangeC}>
          <span>Contact</span>
        </ButtonAsLink>
      </div>
    </nav>
  );
};

export default Nav;
