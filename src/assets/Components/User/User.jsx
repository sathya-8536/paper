import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'
import next from '../../../assets/Images/right-arrow.png'
import back from '../../../assets/Images/backward.png'
import hand from '../../../assets/Images/hand.png'
import benefit from '../../../assets/Images/benefits.png'

const User = () => {
  return (
    <div className=' user-container'>
      <div className='uss-cart'>
        <h1>Benefits for Users</h1>
      </div>
      <div className='back-cart'>
        <Link to="/features"><img src={back} alt=''/></Link>
      </div>
      <div className='next-cart'>
        <Link to="/seller"><img src={next} alt=''/></Link>
      </div>
      <div className='pp1-cart'>
        <h1><img src={hand} alt=''/>Saves time and effort</h1>
      </div>
      <div className='pp2-cart'>
        <h1><img src={hand} alt=''/>Access to the best deals across multiple platform</h1>
      </div>
      <div className='pp3-cart'>
        <h1><img src={hand} alt=''/>Simplified Checkout process</h1>
      </div>
      <div className='pp4-cart'>
        <h1><img src={hand} alt=''/>Personalized shopping experience</h1>
      </div>
      <div className='bene-cart'>
        <img src={benefit} alt=''/>
      </div>
    </div>
  )
}

export default User
