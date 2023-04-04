import React, {useState} from 'react';

const ConditionalRendering = () => {
  const [primary, setPrimary] = useState(false);
  const [success, setSuccess] = useState(false);
  const [danger, setDanger] = useState(false);

  // Used to set primary state as true and others as false
  const primaryTextHandler = () => {
    setPrimary(true);
    setSuccess(false);
    setDanger(false);
  };

  // Used to set success state as true and others as false
  const successTextHandler = () => {
    setSuccess(true);
    setPrimary(false);
    setDanger(false);
  };

  // Used to set danger state as true and others as false
  const dangerTextHandler = () => {
    setDanger(true);
    setPrimary(false);
    setSuccess(false);
  };

  // To set all state as false
  const clearTextHandler = () => {
    setPrimary(false);
    setSuccess(false);
    setDanger(false);
  };
  return (
    <>
      <h2 className="text-left mt-5">Conditional Rendering</h2>

      <p className="text-left text-secondary mb-4">
        This example is implementation of conditional rendering. Different text will
        be shown based on click event of buttons.
      </p>

      <section className="example-section">
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={primaryTextHandler}
        >
          Primary
        </button>
        <button
          type="button"
          className="btn btn-success mr-2"
          onClick={successTextHandler}
        >
          Success
        </button>
        <button
          type="button"
          className="btn btn-danger mr-2"
          onClick={dangerTextHandler}
        >
          Danger
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={clearTextHandler}
        >
          Clear Text
        </button>

        {/* Based on state value respective h3 will be shown(if true) and hide(if false) */}
        {primary && <h3 className="text-primary mt-2">This is Primary text</h3>}
        {/* primary ? <h3 className="text-primary mt-2">This is Primary text</h3> : '' */}
        {success && <h3 className="text-success mt-2">This is Success text</h3>}
        {danger && <h3 className="text-danger mt-2">This is Danger text</h3>}
      </section>
    </>
  );
};

export default ConditionalRendering;
