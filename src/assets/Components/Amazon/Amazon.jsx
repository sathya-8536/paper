import React from 'react'
import './Amazon.css'
import { Link } from 'react-router-dom'
import amazon from '../../../assets/Images/amazon.png'
import next from '../../../assets/Images/right-arrow.png'
import back from '../../../assets/Images/backward.png'

const Amazon = () => {
  return (
    <div className='amazon-container'>
        <div className='ama-ssp'>
      <img src={amazon} alt=''/>
      </div>
      <div className='ama-c'>
        <h1>Amazon</h1>
      </div>
      <div className='next-cart'>
        <Link to="/flipkart"><img src={next} alt=''/></Link>
      </div>
      <div className='back-cart'>
        <Link to='/name'><img src={back} alt=''/></Link>
      </div>
      <div className='amaz-cart'>
        <h1>Amazon is a multinational technology company based in Seattle, Washington, known primarily for its e-commerce platform, which allows users to buy and sell goods online. Founded by Jeff Bezos in 1994, Amazon has grown from an online bookstore into one of the world's largest and most influential companies.</h1>
      </div>
    </div>
  )
}

export default Amazon
