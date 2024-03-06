import React from 'react'
import "./Form.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {

    const navigate = useNavigate()
    
    const [formData, setFormData] = useState({
        FoodCombination: "",
        Rating: "",
        Dairyfree: "",
        VegOrNonVEG: "",
        Img:"",
      });

      

      const handleSubmit = async (formData) => {
        axios.post("https://server-folder-ftte.onrender.com/new", formData)
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
          });
      };

    function handleChange(){
        console.log("I WORK!!")
    }

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
                value={formData.FoodCombination}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Rating:
                <br />
                <input
                type='Number'
                name='Rating'
                value={formData.Rating}
                onChange={handleChange}
                />
            </label>
            <br />

            <label>
                Dairyfree: 
                <br />
                <input
                type='Boolean'
                name=' Dairyfree'
                value={formData.Dairyfree}
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
                value={formData.VegOrNonVEG}
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
                value={formData.Img}
                onChange={handleChange}
                />
            </label>
            <br/>

            <button className='submit'>
                Add Entity
            </button>
        </form>
    </div>
    </div>
  )
}


export default Form;