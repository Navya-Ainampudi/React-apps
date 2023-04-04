import React, {useReducer} from 'react';

import DarkTheme from '../../../assets/dark-theme.png';
import LightTheme from '../../../assets/light-theme.png';

const initialState = {
  darkMode: false,
};

const modeReducer = (state, action) => {
  switch (action.type) {
    case 'DARK':
      return {...state, darkMode: true};
    case 'LIGHT':
      return {...state, darkMode: false};
    default:
      return {...state, darkMode: false};
  }
};

const ScreenMode = () => {
  const [mode, dispatch] = useReducer(modeReducer, initialState);

  const lightModeHandler = () => {
    dispatch({type: 'LIGHT'});
    document.body.style.backgroundColor = '#fbfbfb';
    document.body.style.color = 'black';
  };

  const darkModeHandler = () => {
    dispatch({type: 'DARK'});
    document.body.style.backgroundColor = '#3f3f3f';
    document.body.style.color = 'white';
  };

  return (
    <>
      <section className="example-section mt-4">
        <p>
          Dark mode is: <strong>{mode.darkMode ? 'ON' : 'OFF'}</strong>
        </p>
        <img
          src={LightTheme}
          alt="Dark theme"
          type="button"
          width={50}
          onClick={lightModeHandler}
          className="mr-3"
        />
        <img
          src={DarkTheme}
          alt="Dark theme"
          type="button"
          width={50}
          onClick={darkModeHandler}
        />
      </section>
    </>
  );
};

export default ScreenMode;
