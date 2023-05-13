import React from 'react'
import './choices.css'
import CHOICE from '../../assets/choicesImg.png'

const Choices = () => {
  return (
    <div className='wrapper'>
      <div className='container wrapper-container'>
        <div className='container service-container'  >
          <h1>Make <br/> Bolder <br/> Choices </h1>
          <h3>Digital focused strategies to realize market-changing ideas</h3>
        </div>
        <h2>Build Better Apps</h2>
      </div>
      <img src={CHOICE} className='img'/>
    </div>
    )
}

export default Choices