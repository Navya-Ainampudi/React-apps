import React from 'react';

// static array
const FRIENDS_ARRAY = [
  {name: 'Monica', age: 24, id: 1},
  {name: 'Chandler', age: 26, id: 2},
  {name: 'Rachel', age: 24, id: 3},
  {name: 'Ross', age: 26, id: 4},
  {name: 'Pheobe', age: 28, id: 5},
];

const Friends = () => {
  const friendsList = FRIENDS_ARRAY.map(
    (
      friend // looping through every object in array
    ) => (
      <li className="list-group-item" key={friend.id}>
        {friend.name} is {friend.age} years old
      </li>
    )
  );

  return (
    <>
      <h2 className="text-left mt-4">Lists and Keys</h2>

      <p className="text-left text-secondary mb-4">
        Looping through each item in array and adding keys.
      </p>

      <section className="example-section">
        <ul className="list-group w-50 mx-auto">{friendsList}</ul>{' '}
        {/* dynamically rendering li tags */}
      </section>
    </>
  );
};

export default Friends;
