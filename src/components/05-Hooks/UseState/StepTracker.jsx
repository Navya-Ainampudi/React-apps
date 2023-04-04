import React, {useState} from 'react';

const StepTracker = () => {
  const [steps, setSteps] = useState(0);

  const increment = () => {
    setSteps((prevState) => prevState + 1);
  };

  return (
    <section className="example-section mt-4">
      Today you've taken <strong>{steps}</strong> steps!
      <br />
      <button className="btn btn-success" onClick={increment}>
        I took another step
      </button>
    </section>
  );
};

export default StepTracker;
