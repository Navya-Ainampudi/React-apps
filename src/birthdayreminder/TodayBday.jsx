import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function TodayBday() {
  const [bdaydetails, setdetails] = useState([]);
  const [todayBday, setTodayBday] = useState([]);

  const date = new Date();
  const today = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');

  useEffect(() => {
    axios.get('http://localhost:3011/data').then((res) => {
      setdetails(res.data);
      const foundBday = res.data.filter((s) => s.DOB === today);
      setTodayBday(foundBday);
    });
  }, [today]);

  const deleteBday = (id) => {
    const updatedTodayBday = todayBday.filter((s) => s.id !== id);
    setTodayBday(updatedTodayBday);
  };

  return (
    <div className='bday' style={{ backgroundColor: 'palevioletred', height: '100vh', width: '100vw' }}>
      <h1>Birthdays Today</h1>
      <div className='mt-5 d-flex flex-wrap justify-content-around'>
        {todayBday.map((s) => (
          <div className='card' key={s.id}>
            <img className='card-img' style={{ height: '200px', width: '300px' }} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blurred-happy-birthday-background-design-template-4fe959fbde9d522c5323a3ea98b337ea_screen.jpg?ts=1610281156" alt="Card image" />
            <div className='card-img-overlay'>
              <button className='btn btn-outline-danger btn-sm' onClick={() => deleteBday(s.id)} style={{ transform: 'translate(110px, 2px)' }}>
                X
              </button>
              <h4 className='card-text' style={{ transform: 'translate(8px, 80px)', color: 'purple' }}>
                {s.Name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
