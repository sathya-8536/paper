import React from 'react'
import './Conclusion.css'
import { Link } from 'react-router-dom'
import back from '../../../assets/Images/backward.png'

const Conclusion = () => {
  return (
    <div className='conclusion-container'>
      <div className='con-cart'>
        <h1>Conclusion</h1>
      </div>
      <div className='back-cart'>
        <Link to="/result"><img src={back} alt=''/></Link>
      </div>
      <div className='con1-cart'>
        <h1>The cheapest shop E-Commerce Platform is a game-changer in online shopping, bringing together multiple e-commerce platforms into one seamless experience. By offering features like real-time price comparisons, centralized order management, and AI-driven recommendations, it simplifies the shopping journey for customers while providing sellers with better inventory control and sales opportunities.
        </h1>
      </div>
    </div>
  )
}

export default Conclusion
