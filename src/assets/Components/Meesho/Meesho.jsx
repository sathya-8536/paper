import React from 'react'
import './Meesho.css'
import meesho from '../../../assets/Images/meesho.png'
import next from '../../../assets/Images/right-arrow.png'
import back from '../../../assets/Images/backward.png'
import { Link } from 'react-router-dom'


const Meesho = () => {
  return (
    <div className='meesho-container'>
      <div className='mee-cart'>
        <img src={meesho} alt=''/>
      </div>
      <div className='word'>
        <h1>Meesho is an Indian social commerce platform that allows individuals to start their own online businesses by reselling products to their network, primarily through social media platforms like WhatsApp, Facebook, and Instagram. Founded in 2015 by Vidit Aatrey and Sanjeev Barnwal, Meesho offers a wide range of products, including fashion, electronics, home goods, beauty products, and more. The app works by connecting resellers with suppliers, enabling them to share product links, set their own profit margins, and sell without needing to maintain inventory</h1>
      </div>
      <div className='next-cart'>
        <Link to="/Comb"><img src={next} alt=''/></Link>
      </div>
      <div className='back-cart'>
        <Link to='/flipkart'><img src={back} alt=''/></Link>
      </div>
    </div>
  )
}

export default Meesho
