import React, {useState} from 'react';

/* In this example, even when the user types a name, 
the add function is also called on every re-render which makes the React application not optimized. 
Add function is getting called on every re-render as when the user types, 
the state changes which re-renders the app. */

const add = (num1, num2) => {
  console.log('Adding numbers');
  return parseInt(num1) + parseInt(num2);
};

const WithoutMemoHook = () => {
  const [name, setName] = useState('');
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  const answer = add(val1, val2);

  return (
    <>
      <h2 className="text-left mt-4">Use Memo</h2>

      <p className="text-left text-secondary mb-4">
        The React <strong>useMemo</strong> Hook returns a memoized value. The useMemo
        Hook only runs when one of its dependencies update. This can improve
        performance.
      </p>

      <section className="example-section">
        <p>Without use memo hook (check console)</p>
        <div className="form-group">
          <input
            type="text"
            className="form-control w-25 d-inline"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            className="form-control w-25 d-inline"
            placeholder="Value 1"
            value={val1}
            onChange={(e) => setVal1(e.target.value)}
          />
          <input
            type="number"
            className="form-control w-25 d-inline"
            placeholder="Value 2"
            value={val2}
            onChange={(e) => setVal2(e.target.value)}
          />
          <p className="d-inline pl-4">{answer}</p>
        </div>
      </section>
    </>
  );
};

export default WithoutMemoHook;
