import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const StyledButton = () => {
  return (
    <>
      <h2 className="text-left mt-4">Styled Components</h2>

      <p className="text-left text-secondary mb-4">
        This buttons are created with Styled Components. Good for code reusability
        and maintenance.
      </p>

      <section className="example-section">
        <Button>Normal Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>
      </section>
    </>
  );
};

export default StyledButton;
