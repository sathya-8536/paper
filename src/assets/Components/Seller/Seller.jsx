import React from 'react'
import './Seller.css'
import { Link } from 'react-router-dom'
import back from '../../../assets/Images/backward.png'
import next from '../../../assets/Images/right-arrow.png'
import tick from '../../../assets/Images/tick.png'
import seller from '../../../assets/Images/seller.png'

const Seller = () => {
  return (
    <div className='seller-container'>
      <div className='sel-cart'>
        <h1>Benefits for Sellers</h1>
      </div>
      <div className='back-cart'>
        <Link to="/user"><img src={back} alt=''/></Link>
      </div>
      <div className='next-cart'>
        <Link to="/target"><img src={next} alt=''/></Link>
      </div>
      <div className='sel1-cart'>
        <h1><img src={tick} alt=''/>Increased visibility and sales</h1>
      </div>
      <div className='sel2-cart'>
        <h1><img src={tick} alt=''/>Multi-platform order management</h1>
      </div>
      <div className='sel3-cart'>
        <h1><img src={tick} alt=''/>Data-driven insights on customer behavior</h1>
      </div>
      <div className='sel4-cart'>
        <h1><img src={tick} alt=''/>Simplified logistics and payment</h1>
      </div>
      <div className='sel-cart'>
        <img src={seller} alt=''/>
      </div>
    </div>
  )
}

export default Seller
