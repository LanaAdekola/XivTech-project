import React from 'react'
import './choices.css'
import CHOICE from '../../assets/choicesImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Choices = () => {
  return (
    <div className='wrapper'>
      <div className='container wrapper-container'>
        <div className='container service-container'  >
          <h1>Make <br/> Bolder <br/> Choices </h1>
          <h3>Digital focused strategies to realize market-changing ideas</h3>
        </div>
        <a href=''>Build Better Apps  <FontAwesomeIcon className='icon' icon={faArrowRight} /></a>
      </div>
      <img src={CHOICE} className='img'/>
    </div>
    )
}

export default Choices