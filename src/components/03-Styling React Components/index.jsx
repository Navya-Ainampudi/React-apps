import React from 'react';
import {Link} from 'react-router-dom';

import ModuleCSSButton from './Module CSS/ModuleCSSButton';
import NormalCSSButton from './Normal CSS/NormalCSSButton';
import StyledButton from './Styled Components/StyledButton';

import LeftArrow from '../../assets/left-arrow.png';

const StyleReactComponents = () => {
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
      <h1 className="display-4 mb-5">Styling React Components</h1>
      <NormalCSSButton type="button">Normal CSS Button</NormalCSSButton>
      <hr className="w-50 my-5" />
      <ModuleCSSButton type="button">Module CSS Button</ModuleCSSButton>
      <hr className="w-50 my-5" />
      <StyledButton />
    </>
  );
};

export default StyleReactComponents;
