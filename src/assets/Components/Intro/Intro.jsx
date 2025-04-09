import React from 'react'
import'./Intro.css'
import { Link } from 'react-router-dom'
import next from '../../../assets/Images/right-arrow.png'
import back from '../../../assets/Images/backward.png'
import shop from '../../../assets/Images/shopping.png'

const Intro = () => {
  return (
    <div className='intro-container'>
    <div className='intro-card'>
      <h1>Introduction</h1>
      </div>
      <div className='intro-1'>
        <h1>In today’s fast-growing e-commerce industry, customers shop across multiple platforms like Amazon, eBay, Shopify, and more. However, managing orders, comparing prices, and tracking shipments across different platforms can be complex and time-consuming.

Our cheap shop E-Commerce Platform solves this problem by integrating multiple e-commerce websites into a single, seamless interface. This allows users to compare products, manage orders, and make secure payments—all in one place.
</h1>
      </div>
      <div className='back-cart'>
        <Link to="/comb"><img src={back} alt=''/></Link>
      </div>
      <div className='next-cart'>
        <Link to="/features"><img src={next} alt=''/></Link>
      </div>
      <div className='shop-cart'>
        <img src={shop} alt=''/>
      </div>

    </div>
  )
}

export default Intro
