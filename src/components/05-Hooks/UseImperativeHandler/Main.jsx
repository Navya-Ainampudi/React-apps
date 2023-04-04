import React, {useRef} from 'react';
import Button from './Button';

const Main = () => {
  const btn = useRef(null);

  return (
    <div>
      <h2 className="text-left mt-4">Use Imperative Handler</h2>

      <p className="text-left text-secondary mb-4">
        The <strong>useImperativeHandle</strong> hook works in the similar phase of
        useRef hook but only it allows us to modify the instance that is going to be
        passed with the ref object which provides a reference to any DOM element.
        Although this hook is used in rare cases, it has some most advanced
        functionality.
      </p>

      <section className="example-section">
        <p>(Check console)</p>
        <Button onClick={() => btn.current.blur()} ref={btn} />
      </section>
    </div>
  );
};

export default Main;
