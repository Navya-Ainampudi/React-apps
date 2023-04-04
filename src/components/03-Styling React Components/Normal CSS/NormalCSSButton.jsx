import React from 'react';
import './NormalCSSButton.css';

const NormalCSSButton = (props) => {
  return (
    <>
      <h2 className="text-left mt-4">Normal CSS</h2>

      <p className="text-left text-secondary mb-4">
        This button is created with normal css.
      </p>

      <section className="example-section">
        <button type={props.type} className="button">
          {props.children}
        </button>
      </section>
    </>
  );
};

export default NormalCSSButton;
