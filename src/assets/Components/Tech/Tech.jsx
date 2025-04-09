import React from 'react'
import './Tech.css'
import { Link } from 'react-router-dom'
import back from '../../../assets/Images/backward.png'
import next from '../../../assets/Images/right-arrow.png'
const Tech = () => {
  return (
    <div className='tech-container'>
      <div className='tech-cart'>
        <h1>Technology stack</h1>
      </div>
      <div className='tech1-cart'>
        <h1>What is Flutter?
        </h1>
      </div>
      <div className='tech2-cart'>
        <h1>Flutter is an open-source UI framework created by Google for building natively compiled applications for mobile (Android & iOS), web, and desktop from a single codebase. It uses Dart as its programming language and provides a highly customizable and fast development experience.
        </h1>
      </div>
      <div className='back1-cart'>
        <Link to="/work"><img src={back} alt=''/></Link>
      </div>
      <div className='next1-cart'>
        <Link to="/result"><img src={next} alt=''/></Link>
      </div>

    </div>
  )
}

export default Tech
