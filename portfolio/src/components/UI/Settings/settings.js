import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './settings.module.css';
import { colorActions } from '../../../store/color-change';
import SettingsIcon from '../Icons/SettingsIcon';
import { languageActions } from '../../../store/language';

const Settings = () => {
  const [showSettings, setShowSettings] = useState(false);

  const dispatch = useDispatch();
  const activeColor = useSelector((state) => state.activeColor.color);
  const activeLanguage = useSelector((state) => state.activeLanguage.language);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  useEffect(() => {
    const removeSettings = setTimeout(() => {
      setShowSettings(false);
    }, 50000000);

    return () => {
      clearTimeout(removeSettings);
    };
  }, [activeColor, activeLanguage, showSettings]);

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

  const setLanguageToEn = () => {
    dispatch(languageActions.chnageLanguageTo('en'));
  };

  const setLanguageToRo = () => {
    dispatch(languageActions.chnageLanguageTo('ro'));
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
          style={{ backgroundColor: '#0f0' }}
        ></div>
        <div
          className={classes.color}
          onClick={color3}
          style={{ backgroundColor: '#f0f' }}
        ></div>
      </div>
      <div className={classes.languages}>
        <div
          onClick={setLanguageToEn}
          style={
            activeLanguage === 'en'
              ? { color: activeColor, fontWeight: 'bold' }
              : { color: '#fff' }
          }
        >
          EN
        </div>
        <div
          onClick={setLanguageToRo}
          style={
            activeLanguage === 'ro'
              ? { color: activeColor, fontWeight: 'bold' }
              : { color: '#fff' }
          }
        >
          RO
        </div>
      </div>
    </div>
  );
};

export default Settings;
