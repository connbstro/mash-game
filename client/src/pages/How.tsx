import React from 'react';
import howto from "../assets/images/pexels-wallsio-15505432.jpg";

const How = () => {
  return (
    <div>
        <div className='desc-container w-full p-4 shadow-md lg:max-w-lg'>
            <div className="w-full h-48" style={{
                backgroundImage: `url(${howto})`
            }}/>
            <div className='space-y-2 text-xl font-semibold tracking-tight text-blue-600'>
            <h2>How to Play:</h2>
            </div>
            <p className='text-gray-600'>
            <ul>Enter in 3 options for each category.</ul> 
            <ul>Share the results you love to your friends and get them involved in your stories.</ul>
            </p>
        </div>
    </div>
  )
}

export default How;