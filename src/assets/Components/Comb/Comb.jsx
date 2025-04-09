import React from 'react'
import './Comb.css'
import { Link } from 'react-router-dom'
import amazon from '../../../assets/Images/amazon.png'
import flipkart from '../../../assets/Images/flipkart.png'
import meesho from '../../../assets/Images/meesho.png'
import line from '../../../assets/Images/line.png'
import hori from '../../../assets/Images/hori.png'
import logo from '../../../assets/Images/c.png'
import next from '../../../assets/Images/right-arrow.png'
import back from '../../../assets/Images/backward.png'

const Comb = () => {
  return (
    <div className='comb-container'>
      <div className='ama-cart'>
        <img src={amazon} alt=''/>
      </div>
      <div className='flip-cart'>
        <img src={flipkart} alt=''/>
      </div>
      <div className='mees-cart'>
        <img src={meesho} alt=''/>
      </div>
      <div className='line-cart'>
        <img src={line} alt=''/>
        </div>
        <div className='line1-cart'>
        <img src={line} alt=''/>
        </div>
        <div className='line2-cart'>
        <img src={line} alt=''/>
        </div>
        <div className='line3-cart'>
            <img src={hori} alt=''/>
        </div>
        <div className='line41-cart'>
        <img src={line} alt=''/>
        </div>
        <div className='logo'>
            <img src={logo} alt=''/>
        </div>
        <div className='back-cart'>
        <Link to="/meesho"><img src={back} alt=''/></Link>
      </div>
      <div className='next-cart'>
        <Link to="/intro"><img src={next} alt=''/></Link>
      </div>

    </div>
  )
}

export default Comb
