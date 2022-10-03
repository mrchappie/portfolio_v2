import classes from './Nav.module.css';
import logo from '../../../assets/logo.svg';
import ButtonAsLink from '../../UI/Button/ButtonAsLink/ButtonAsLink';
import { useDispatch } from 'react-redux';
import { logoActions } from '../../../store/logo-history';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faHouse,
  faRectangleList,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Nav = (props) => {
  const dispatch = useDispatch();
  const activeColor = useSelector((state) => state.activeColor.color);

  const showLogoHistory = () => {
    dispatch(logoActions.toggleLogoHistory());
  };

  return (
    <nav className={classes.nav}>
      <Link to="/welcome/why-chappie">
        <div className={classes.logo} onClick={showLogoHistory}>
          <img src={logo} alt="robot logo" />
        </div>
      </Link>
      <div className={classes.pages}>
        <ButtonAsLink>
          <NavLink
            to="/welcome"
            // className={(navData) => (navData.isActive ? classes.active : '')}
            style={(navData) =>
              navData.isActive ? { color: activeColor } : { color: 'black' }
            }
          >
            <FontAwesomeIcon icon={faHouse} />
          </NavLink>
        </ButtonAsLink>

        <ButtonAsLink>
          <NavLink
            to="/about"
            // className={(navData) => (navData.isActive ? classes.active : '')}
            style={(navData) =>
              navData.isActive ? { color: activeColor } : { color: 'black' }
            }
          >
            <FontAwesomeIcon icon={faAddressCard} />
          </NavLink>
        </ButtonAsLink>
        <ButtonAsLink>
          <NavLink
            to="/projects"
            // className={(navData) => (navData.isActive ? classes.active : '')}
            style={(navData) =>
              navData.isActive ? { color: activeColor } : { color: 'black' }
            }
          >
            <FontAwesomeIcon icon={faRectangleList} />
          </NavLink>
        </ButtonAsLink>
        <ButtonAsLink>
          <NavLink
            to="/contact"
            // className={(navData) => (navData.isActive ? classes.active : '')}
            style={(navData) =>
              navData.isActive ? { color: activeColor } : { color: 'black' }
            }
          >
            <FontAwesomeIcon icon={faAddressBook} />
          </NavLink>
        </ButtonAsLink>
      </div>
    </nav>
  );
};

export default Nav;
