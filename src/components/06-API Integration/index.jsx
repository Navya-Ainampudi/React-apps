import React from 'react';
import {Link} from 'react-router-dom';
import CRUD from './CRUD';

import LeftArrow from '../../assets/left-arrow.png';

const ApiIntegrations = () => {
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

      <h1 className="display-4 mb-3">API Integration</h1>

      <p className="text-left text-secondary mb-5">
        This example you will see how to use Axios with React. <strong>Axios</strong>{' '}
        is an HTTP client library that allows you to make requests to a given
        endpoint. Here is a quick example of all of the operations you'll be
        performing with Axios and your API endpoint — retrieving, creating, updating,
        and deleting posts from jsonplaceholder.
      </p>
      
      <section className="example-section">
        <CRUD />
      </section>
    </>
  );
};

export default ApiIntegrations;
