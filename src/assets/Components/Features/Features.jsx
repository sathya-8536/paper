import React from 'react'
import './Features.css'
import { Link } from 'react-router-dom'
import next from '../../../assets/Images/right-arrow.png'
import back from '../../../assets/Images/backward.png'
import flower from '../../../assets/Images/flower.png'

const Features = () => {
  return (
    <div className='feature-container'>
      <div className='feat-cart'>
        <h1>KEY</h1>
        <h2>FEATURES</h2>
      </div>
      <div className='back-cart'>
        <Link to="/intro"><img src={back} alt=''/></Link>
      </div>
      <div className='next-cart'>
        <Link to="/user"><img src={next} alt=''/></Link>
      </div>
      <div className='pp-cart'>
        <h1>Price comparision</h1>
      </div>
      <div className='ff-cart'>
        <h1>Mobile-Friendly Interface</h1>
      </div>
      <div className='mm-cart'>
        <h1>Multi-platform Interface</h1>
      </div>
      <div className='oo-cart'>
        <h1>One-Click Checkout</h1>
      </div>
      <div className='ww-cart'>
        <h1>Wishlist&Alert</h1>
      </div>
      <div className='cc-cart'>
        <h1>Centralised Shopping Cart</h1>
      </div>
      <div className='tt-cart'>
        <h1>Order Tracking</h1>
      </div>
      
    </div>
  )
}

export default Features
