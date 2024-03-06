import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [use, setUse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://server-folder-ftte.onrender.com/read");
        setUse(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <div className='nav'>
        <div className="name">
          <h1>Worst Food Combos</h1>
        </div>
        <div className='search-btn'>
          <input 
            type='text' 
            className='search' 
            placeholder='Search your Worst Food Combinations' 
          />
          <button className='s-btn'>Search</button>
        </div>
        <div className='form'>
          <Link to="/form">
          <button className='f-btn'>Add Entity</button>
          
          </Link>
        </div>
      </div>

      <div className="container">
        {use.map(food => (
          <div className="food-item" key={food.Img}>
            <div className="card">
              <div className="image">
                <img src={food.Img} alt="" />
              </div>
              <div className="info">
                <p><strong className='f'>{food.FoodCombination}</strong></p>
                <p className='in'>Veg/Non-Veg: {food.VegOrNonVEG}</p>
                <p className='in'>Dairy Free: {food.Dairyfree ? "TRUE" : "FALSE"}</p>
                <p className='in'>Rating: {food.Rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
