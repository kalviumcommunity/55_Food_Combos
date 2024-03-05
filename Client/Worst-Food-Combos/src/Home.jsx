import React from 'react'
import './Home.css'
import { useState } from 'react';

 function Home() {

  const [data,setData] = useState([])
  useEffect(() => {
    axios.get("", {
      headers: { Authorization: "whatever-you-want" }, // Authorization header
    })
    .then((response) => {
      const data = response.data.books; // Extracting book data from response
      setBooks(data); // Updating books state with fetched data
    })
    .catch(() => {
      console.log("Status code: 404"); // Log error if API endpoint not found
      console.log("Website not found");
    });
  }, []); // Empty dependency array ensures useEffect runs only once when component mounts


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
    </div>

    <div className="container">
      <div className="image">
        <img src='https://images.pexels.com/photos/5732764/pexels-photo-5732764.jpeg?auto=compress&cs=tinysrgb&w=600' height="300px" width="250px"></img>
      </div>
      <div className="info">
        <h3>Red Wine and Seafood</h3>
        <h3>Non-Veg</h3>
        <h3>4/10</h3>
      </div>
    </div>
    
    </>
  )
}

export default Home