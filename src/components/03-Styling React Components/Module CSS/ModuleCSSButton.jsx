import React from 'react';
import classes from './ModuleCSSButton.module.css';

const ModuleCSSButton = (props) => {
  return (
    <>
      <h2 className="text-left mt-4">Module CSS</h2>

      <p className="text-left text-secondary mb-4">
        This button is created with module css. Which adds unique id to classnames.
        Check class name in inspect mode.
      </p>

      <section className="example-section">
        <button type={props.type} className={classes.button} onClick={props.onClick}>
          {props.children}
        </button>
      </section>
    </>
  );
};

export default ModuleCSSButton;
