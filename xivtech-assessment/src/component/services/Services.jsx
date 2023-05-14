import React from 'react'
import './services.css'
import SERVICES from '../../assets/servicesImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <div className='wrapper'>
      <div className='container wrapper-container'>
        <div className='container service-container'  >
          <h1>AI + RPA is <br/> what we do</h1>
          <h3>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</h3>
        </div>
        <a href=''>AI + RPA Automation <FontAwesomeIcon className='icon' icon={faArrowRight} /></a>
      </div>
      <img src={SERVICES} className='img'/>
    </div>
  )
}

export default Services
