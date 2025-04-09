import React from 'react'
import './Name.css'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/Images/C.png'
import next from '../../../../assets/Images/right-arrow.png'
import back from '../../../../assets/Images/backward.png'

const Name = () => {
  return (
    <div className='name-container'>
      <div className='name-card'>
      <img src={logo} alt=''/>
      </div>
      <div className='next-card'>
        <Link to="/amazon"><img src={next} alt=''/></Link>
      </div>
      <div className='back-card'>
        <Link to="/"><img src={back} alt=''/></Link>
      </div>
      <div className='cheap-cart'>
        <h1>CHEAPEST   SHOP</h1>
      </div>
    </div>
    
  )
}

export default Name
