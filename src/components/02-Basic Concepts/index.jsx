import React from 'react';
import {Link} from 'react-router-dom';

import ConditionalRendering from './Conditional Rendering/ConditionalRendering';
import UserEvents from './Events/UserEvents';
import Friends from './Lists and Keys/Friends';
import Greetings from './Props/Greetings';

import LeftArrow from '../../assets/left-arrow.png';

const BasicConcepts = () => {
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
      <h1 className="display-4">Basic Concepts</h1>
      <UserEvents />
      <hr className="w-50 my-5" />
      <Greetings />
      <hr className="w-50 my-5" />
      <ConditionalRendering />
      <hr className="w-50 my-5" />
      <Friends />
    </>
  );
};

export default BasicConcepts;
