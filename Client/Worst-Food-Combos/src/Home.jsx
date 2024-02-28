import React from 'react'
import './Home.css'

 function Home() {
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

    <div className="des">
        <p className='intro'>Welcome to Our Quirky Corner of Food Exploration!

Have you ever wondered about the oddest food combinations out there? Well, you've stumbled upon the right place! At Worst Food Combos, we're all about embracing the weird, the wild, and the downright wacky when it comes to food pairings. Join us on a culinary adventure like no other!</p>
    </div>
    </>
  )
}

export default Home