import React from 'react'
import './devops.css'
import DEVOP from '../../assets/devopsImg.jpg'

const Devops = () => {
  return (
    <div className='wrapper'>
      <div className='container wrapper-container'>
        <div className='container service-container'  >
          <h1>Innovate <br/> with Speed</h1>
          <h3>Create higher quality software, deliver on customer expectations and business goals</h3>
        </div>
        <h2>DevOps</h2>
      </div>
      <img src={DEVOP} className='img' />
    </div>
  
  )
}

export default Devops 