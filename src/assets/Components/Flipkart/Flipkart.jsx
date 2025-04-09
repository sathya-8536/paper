import React from 'react'
import './Flipkart.css'
import { Link } from 'react-router-dom'
import flip from '../../../assets/Images/flipkart.png'
import next from '../../../assets/Images/right-arrow.png'
import back from '../../../assets/Images/backward.png'

const Flipkart = () => {
  return (
    <div className='flipkart-container'>
    <div className='flip-ssp'>
      <img src={flip} alt=''/>
      </div>
      <div className='back-cart'>
        <Link to="/amazon"><img src={back} alt=''/></Link>
      </div>
      <div className='next-cart'>
        <Link to="/meesho"><img src={next} alt=''/></Link>
      </div>
      
      <div className='sss'>
        <h1>Flipkart is one of India's largest e-commerce platforms, founded in 2007 by Sachin Bansal and Binny Bansal. It started primarily as an online bookstore but later expanded into a broad range of product categories, including electronics, fashion, home goods, and more.</h1>
      </div>
      <div className='ssss'>
        <h1>Flipkart is a major player in the Indian e-commerce space, competing with other giants like Amazon India and Snapdeal. It has a significant influence on online shopping trends in India and has played a crucial role in making e-commerce mainstream in the country.</h1>
      </div>
    </div>
  )
}

export default Flipkart
