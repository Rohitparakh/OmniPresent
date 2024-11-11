import React from 'react'
import banner from '../../assets/images/projectBanner.png';
import './SingleProjectBanner.css';

const SingleProjectBanner = () => {
  return (
    <div className='bannerImageHolder'>
        <img src={banner} className='bannerImage'/>
    </div>
  )
}

export default SingleProjectBanner