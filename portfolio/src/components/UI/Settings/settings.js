import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './settings.module.css';
import { colorActions } from '../../../store/color';

const Settings = () => {
  const [showSettings, setShowSettings] = useState(false);

  const dispatch = useDispatch();
  const activeColor = useSelector((state) => state.activeColor.color);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

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
    <div className={classes.settings}>
      <button
        onClick={toggleSettings}
        className={showSettings ? `${classes.active}` : ''}
      >
        Open
      </button>
      {showSettings && (
        <div
          className={`${classes.colors} ${showSettings ? classes.active : ''}`}
        >
          <div className={classes.color} onClick={color0}>
            {activeColor}
          </div>
          <div className={classes.color} onClick={color1}></div>
          <div className={classes.color} onClick={color2}></div>
          <div className={classes.color} onClick={color3}></div>
          <div className={classes.color} onClick={color4}></div>
          <div className={classes.color} onClick={color5}></div>
          <div className={classes.color} onClick={color6}></div>
          <div className={classes.color} onClick={color7}></div>
          <div className={classes.color} onClick={color8}></div>
        </div>
      )}
    </div>
  );
};

export default Settings;
