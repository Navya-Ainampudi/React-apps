import React from 'react';
import {Link} from 'react-router-dom';

import './Card.css';

const Card = (props) => {
  return (
    <>
      <div className="col-lg-4 col-sm-6">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            {/* <p className="card-text">{props.description}</p> */}
            <p className="card-text">{props.children}</p>
            <Link to={props.link} className="btn btn-primary">
              Check examples
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
