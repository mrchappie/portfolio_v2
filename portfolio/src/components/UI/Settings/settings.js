import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './settings.module.css';
import { colorActions } from '../../../store/color-change';
import SettingsIcon from '../Icons/SettingsIcon';

const Settings = () => {
  const [showSettings, setShowSettings] = useState(false);

  const dispatch = useDispatch();
  const activeColor = useSelector((state) => state.activeColor.color);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  useEffect(() => {
    const removeSettings = setTimeout(() => {
      setShowSettings(false);
    }, 5000);

    return () => {
      clearTimeout(removeSettings);
    };
  }, [activeColor]);

  const color0 = () => {
    dispatch(colorActions.color0());
  };
  const color1 = () => {
    dispatch(colorActions.color1());
  };
  const color2 = () => {
    dispatch(colorActions.color2());
  };
  const color3 = () => {
    dispatch(colorActions.color3());
  };
  const color4 = () => {
    dispatch(colorActions.color4());
  };
  const color5 = () => {
    dispatch(colorActions.color5());
  };
  const color6 = () => {
    dispatch(colorActions.color6());
  };
  const color7 = () => {
    dispatch(colorActions.color7());
  };
  const color8 = () => {
    dispatch(colorActions.color8());
  };

  return (
    <div
      className={`${classes.settings} ${showSettings ? classes.active : ''}`}
    >
      <button onClick={toggleSettings}>
        <span>
          <SettingsIcon></SettingsIcon>
        </span>
      </button>
      {
        <div className={classes.colors}>
          <div
            className={classes.color}
            onClick={color0}
            style={{ backgroundColor: '#f00' }}
          ></div>
          <div
            className={classes.color}
            onClick={color1}
            style={{ backgroundColor: '#ffa500' }}
          ></div>
          <div
            className={classes.color}
            onClick={color2}
            style={{ backgroundColor: '#ff0' }}
          ></div>
          <div
            className={classes.color}
            onClick={color3}
            style={{ backgroundColor: '#0f0' }}
          ></div>
          <div
            className={classes.color}
            onClick={color4}
            style={{ backgroundColor: '#00f' }}
          ></div>
          <div
            className={classes.color}
            onClick={color5}
            style={{ backgroundColor: '#f0f' }}
          ></div>
          <div
            className={classes.color}
            onClick={color6}
            style={{ backgroundColor: '#fff' }}
          ></div>
          <div
            className={classes.color}
            onClick={color7}
            style={{ backgroundColor: '#66fcf1' }}
          ></div>
          <div
            className={classes.color}
            onClick={color8}
            style={{ backgroundColor: '#eae7dc' }}
          ></div>
        </div>
      }
    </div>
  );
};

export default Settings;
