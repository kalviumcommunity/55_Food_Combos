import React from 'react';
import './Form.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    FoodCombination: '',
    Rating: '',
    Dairyfree: false,
    VegOrNonVEG: '',
    Img: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('https://server-folder-ftte.onrender.com/new', formData)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevInfo) => ({
      ...prevInfo,
      [name]: newValue,
    }));
  };

  return (
    <div className='cont'>
      <div className='content'>
        <form onSubmit={handleSubmit}>
          <label id='fclable'> 
            Food Combinations:
            <br /> 
            <input
              type='text'
              name='FoodCombination'
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Rating:
            <br />
            <input
              type='number'
              name='Rating'
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Dairyfree: 
            <br />
            <input
              type='checkbox'
              name='Dairyfree'
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Veg/Non-veg:
            <br /> 
            <input
              type='text'
              name='VegOrNonVEG'
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Img: 
            <br />
            <input
              type='text'
              name='Img'
              onChange={handleChange}
            />
          </label>
          <br />
          <button type='submit' className='submit'>
            Add Entity
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
