import React from 'react'
import './services.css'
import SERVICES from '../../assets/servicesImg.jpg'

const Services = () => {
  return (
    <div className='wrapper'>
      <div className='container wrapper-container'>
        <div className='container service-container'  >
          <h1>AI + RPA is <br/> what we do</h1>
          <h3>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</h3>
        </div>
        <h2>AI + RPA Automation</h2>
      </div>
      <img src={SERVICES} className='img'/>
    </div>
  )
}

export default Services
