import React from 'react';
import Hello from './Hello';

const Greetings = () => {
  const userName = 'Harvey Specter';
  const profession = 'Corporate Attorney';

  return (
    <>
      <h2 className="text-left mt-5">Working with props</h2>

      <p className="text-left text-secondary mb-4">
        Here we are passing name and profession from one component to another by
        using <strong>props</strong>.
      </p>

      <section className="example-section">
        <Hello name={userName}>{profession}</Hello>
      </section>
    </>
  ); // Passing props (name) and text to Hello component
};

export default Greetings;
