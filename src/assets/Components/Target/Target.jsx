import React from 'react'
import './Target.css'
import back from '../../../assets/Images/backward.png'
import next from '../../../assets/Images/right-arrow.png'
import { Link } from 'react-router-dom'
import arrow from '../../../assets/Images/arrow.png'
import target from '../../../assets/Images/target.png'

const Target = () => {
  return (
    <div className='tar-container'>
      <div className='tar-cart'>
        <h1>Target Audience</h1>
      </div>
      <div className='back-cart'>
        <Link to="/seller"><img src={back} alt=''/></Link>
      </div>
      <div className='next-cart'>
        <Link to="/work"><img src={next} alt=''/></Link>
      </div>
      <div className='tar1-cart'>
        <h1><img src={arrow} alt=''/>Online shoppers looking for convenience</h1>
      </div>
      <div className='tar2-cart'>
        <h1><img src={arrow} alt=''/>Small and medium-sized buisnesses</h1>
      </div>
      <div className='tar3-cart'>
        <h1><img src={arrow} alt=''/>Dropshippers and resullers</h1>
      </div>
      <div className='tar4-cart'>
        <h1><img src={arrow} alt=''/>Large-scale e-commerce retailers</h1>
      </div>
      <div className='targ-cart'>
        <img src={target} alt=''/>
      </div>
    </div>
  )
}

export default Target
