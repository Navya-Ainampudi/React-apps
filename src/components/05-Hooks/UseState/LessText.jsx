// First: import useState. It's a named export from 'react'
// Or we could skip this step, and write React.useState
import React, {useState} from 'react';

// This component expects 2 props:
//   text - the text to display
//   maxLength - how many characters to show before "read more"
function LessText({text, maxLength}) {
  // Create a piece of state, and initialize it to `true`
  // `hidden` will hold the current value of the state,
  // and `setHidden` will let us change it
  const [hidden, setHidden] = useState(true);

  // If the text is short enough, just render it
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  // Render the text (shortened or full-length) followed by
  // a link to expand/collapse it.
  // When a link is clicked, update the value of `hidden`,
  // which will trigger a re-render
  return (
    <>
      <h2 className="text-left mt-4">Use State</h2>

      <p className="text-left text-secondary mb-4">
        The React <strong>useState</strong> Hook allows us to track state in a
        function component. State generally refers to data or properties that need to
        be tracking in an application. In first example we are updating state value
        onClick event of read more/read less text. Also conditionally rendering long
        text. <br />
        In second example updating state on click event of button.
      </p>

      <section className="example-section">
        {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
        {hidden ? (
          <h6 style={{cursor: 'pointer'}} onClick={() => setHidden(false)}>
            {' '}
            read more
          </h6>
        ) : (
          <h6 style={{cursor: 'pointer'}} onClick={() => setHidden(true)}>
            {' '}
            read less
          </h6>
        )}
      </section>
    </>
  );
}

export default LessText;
