import React from 'react'
import './Result.css'
import { Link } from 'react-router-dom'
import back from '../../../assets/Images/backward.png'
import next from '../../../assets/Images/right-arrow.png'
import button from '../../../assets/Images/button.png'

const Result = () => {
  return (
    <div className='result-container'>
      <div className='result-cart'>
        <h1>Output</h1>
      </div>
      <div>
        <h1></h1>
      </div>
      <div className='back-cart'>
        <Link to="/tech"><img src={back} alt=''/></Link>
      </div>
      <div className='next-cart'>
        <Link to="/conclusion"><img src={next} alt=''/></Link>
      </div>
      <div className='btn-ssp'>
        <Link to="/output"><img src={button} alt=''/></Link>
      </div>
    </div>
  )
}

export default Result
