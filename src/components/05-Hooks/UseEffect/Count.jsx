import React, {useState, useEffect} from 'react';

const Count = () => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);
  const [multiplication, setMultiplication] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setMultiplication(count * 2);
  });

  useEffect(() => {
    setCalculation(count * 3);
  }, [anotherCount]);

  return (
    <>
      <h2 className="text-left mt-4">Use Effect</h2>

      <p className="text-left text-secondary mb-4">
        The <strong>useEffect</strong> Hook allows you to perform side effects in
        your components. Some examples of side effects are: fetching data, directly
        updating the DOM, and timers. useEffect accepts two arguments. First is
        function and second is dependency. In this example we are maintaining two
        useEffects one of which has dependency and other without dependency.
      </p>

      <section className="example-section">
        <p>
          Count: <strong>{count}</strong>
        </p>
        <p>
          Multiplied by 2: <strong>{multiplication}</strong>
        </p>
        <p>
          Multiplied by 3: <strong>{calculation}</strong>
        </p>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => setCount(count + 1)}
        >
          Increment count
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => setAnotherCount(anotherCount + 1)}
        >
          Multiply by 3
        </button>
      </section>
    </>
  );
};

export default Count;
