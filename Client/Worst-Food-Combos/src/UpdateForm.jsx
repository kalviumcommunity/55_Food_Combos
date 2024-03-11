import React, { useEffect, useState } from 'react';
import './Form.css'; // Assuming the CSS path is correct
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateForm() {
    const navigate = useNavigate();
    const { id } = useParams(); // To fetch the specific entity's ID

    const [formData, setFormData] = useState({
        FoodCombination: '',
        Rating: '',
        Dairyfree: false,
        VegOrNonVEG: '',
        Img: ''
    });

    // Fetch the existing data for editing
    useEffect(() => {
        if(id) { // Ensure there is an id to fetch data for
            axios.get(`https://server-folder-ftte.onrender.com/read/${id}`)
                .then((response) => {
                    setFormData({
                        FoodCombination: response.data.FoodCombination,
                        Rating: response.data.Rating,
                        Dairyfree: response.data.Dairyfree,
                        VegOrNonVEG: response.data.VegOrNonVEG,
                        Img: response.data.Img
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [id]); // Dependency array ensures useEffect runs when id changes

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.put(`https://server-folder-ftte.onrender.com/update/${id}`, formData)
            .then(() => {
                navigate('/'); // Adjust the navigate path as per your application's routing
            })
            .catch((error) => {
                console.error(error);
            });
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
                            value={formData.FoodCombination}
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
                            value={formData.Rating}
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
                            checked={formData.Dairyfree}
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
                    <br />
                    <button type='submit' className='submit'>
                        Update 
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpdateForm;