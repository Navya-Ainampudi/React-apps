import React from 'react';
import {Link} from 'react-router-dom';

import Count from './UseEffect/Count';
import Main from './UseImperativeHandler/Main';
import WithMemoHook from './UseMemo/WithMemoHook';
import WithoutMemoHook from './UseMemo/WithoutMemoHook';
import Counter from './UseReducer/Counter';
import ScreenMode from './UseReducer/ScreenMode';
import LessText from './UseState/LessText';
import StepTracker from './UseState/StepTracker';

import LeftArrow from '../../assets/left-arrow.png';

const ReactHooks = () => {
  return (
    <>
      <Link to="/" className="text-left d-flex mt-2">
        <img
          src={LeftArrow}
          alt="go back"
          style={{width: '2%', marginRight: '10px'}}
        />
        Go Back
      </Link>

      <h1 className="display-4">React Hooks</h1>
      <LessText
        text={`Focused, hard work is the real key
      to success. Keep your eyes on the goal, 
      and just keep taking the next step 
      towards completing it.`}
        maxLength={35}
      />
      <StepTracker />
      <hr className="w-50 my-5" />

      <Count />
      <hr className="w-50 my-5" />

      <Counter />
      <ScreenMode />
      <hr className="w-50 my-5" />

      <WithoutMemoHook />
      <WithMemoHook />
      <hr className="w-50 my-5" />

      <Main />
    </>
  );
};

export default ReactHooks;
