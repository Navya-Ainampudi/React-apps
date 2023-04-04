import React, {useState, useMemo} from 'react';

/* In this example, even if the user types the name, 
the add function is not called because it is called only if the values of val1 and val2 change. */

const add = (num1, num2) => {
  console.log('Adding numbers');
  return parseInt(num1) + parseInt(num2);
};

const WithMemoHook = () => {
  const [name, setName] = useState('');
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  const answer = useMemo(() => {
    return add(val1, val2);
  }, [val1, val2]);

  return (
    <>
      <section className="example-section mt-4">
        <p>With use memo hook (check console)</p>
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

export default WithMemoHook;
