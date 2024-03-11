import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URI = `https://server-folder-ftte.onrender.com/read`;

function Home() {
  const [use, setUse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URI);
        setUse(res.data);
      } catch (err) {
        console.log(err);
        setError("Error fetching data. Please try again.");
      }
    };

    fetchData();
  }, []); 

  const deleteItem = async (id) => {
    try {
      await axios.delete(`https://server-folder-ftte.onrender.com/read/delete/${id}`);
      
      // Update the state after deletion
      setUse(prevState => prevState.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
      setError("Error deleting data. Please try again.");
    }
  };

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

      {error && <p className="error-message">{error}</p>}

      <div className="container">
        {use.map(food => (
          <div className="food-item" key={food._id}>
            <div className="card">
              <div className="image">
                <img src={food.Img} alt="" />
              </div>
              <div className="info">
                <p><strong className='f'>{food.FoodCombination}</strong></p>
                <p className='in'>Veg/Non-Veg: {food.VegOrNonVEG}</p>
                <p className='in'>Dairy Free: {food.Dairyfree ? "TRUE" : "FALSE"}</p>
                <p className='in'>Rating: {food.Rating}</p>
                <div className="btns">
                  {/* Pass food._id as id to deleteItem */}
                  <button className='update'>Update</button>
                  <button className='delete' onClick={() => deleteItem(food._id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
