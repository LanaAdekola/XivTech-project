import React from 'react'
import './cloud.css'
import CLOUD from '../../assets/cloudImg.jpg'

const Cloud = () => {
  return (
    <div className='wrapper'>
      <div className='container wrapper-container'>
        <div className='container service-container'  >
          <h1>Embrace <br/>Cloud</h1>
          <h3>With Cloud-First accelerate innovation and optimize performance</h3>
        </div>
        <h2>Cloud Services</h2>
      </div>
      <img src={CLOUD} className='cloud-img'/>
    </div>
    )
}

export default Cloud