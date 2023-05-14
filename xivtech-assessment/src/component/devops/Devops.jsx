import React from 'react'
import './devops.css'
import DEVOP from '../../assets/devopsImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Devops = () => {
  return (
    <div className='wrapper'>
      <div className='container wrapper-container'>
        <div className='container service-container'  >
          <h1>Innovate <br/> with Speed</h1>
          <h3>Create higher quality software, deliver on customer expectations and business goals</h3>
        </div>
        <a href=''>DevOps <FontAwesomeIcon className='icon' icon={faArrowRight} /></a>
      </div>
      <img src={DEVOP} className='img' />
    </div>
  
  )
}

export default Devops 