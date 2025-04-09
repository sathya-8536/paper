import React from 'react'
import './Work.css'
import { Link } from 'react-router-dom'
import back from '../../../assets/Images/backward.png'
import next from '../../../assets/Images/right-arrow.png'


const Work = () => {
  return (
    <div className='work-container'>
      <div className='work-cart'>
        <h1>How it Works</h1>
      </div>
     <div className='back1-cart'>
             <Link to="/target"><img src={back} alt=''/></Link>
           </div>
           <div className='next1-cart'>
             <Link to="/tech"><img src={next} alt=''/></Link>
           </div>
      
      <div className='work1-cart'>
        <h1>1. Product Search & Discovery
        </h1>
        <h2><span>#  </span>Users search for a product or browse categories on your platform.

</h2>
        <h3><span># </span>The system fetches listings from multiple e-commerce sites (Amazon, eBay, Shopify, etc.).
        </h3>
      </div>
     
      <div className='work2-cart'>
        <h1>2. Price & Feature Comparison
        </h1>
        <h2><span># </span>Users can compare prices, discounts, shipping times, and seller ratings.
        </h2>
        <h3><span># </span>AI-powered recommendations suggest similar or better deals.
        </h3>
      </div>
     
      <div className='work3-cart'>
        <h1>3.Order Processing & Tracking
        </h1>
        <h2><span># </span>The platform communicates orders to the respective e-commerce websites.
        </h2>
        <h3><span># </span>
Users get real-time tracking updates in a unified dashboard.
</h3>
      </div>
    </div>
  )
}

export default Work
