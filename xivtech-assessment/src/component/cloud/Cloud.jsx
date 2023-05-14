import React from 'react'
import './cloud.css'
import CLOUD from '../../assets/cloudImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cloud = () => {
  return (
    <div className='wrapper'>
      <div className='container wrapper-container'>
        <div className='container service-container'  >
          <h1>Embrace <br/>Cloud</h1>
          <h3>With Cloud-First accelerate innovation and optimize performance</h3>
        </div>
        <a href=''>Cloud Services <FontAwesomeIcon className='icon' icon={faArrowRight} /></a>
      </div>
      <img src={CLOUD} className='cloud-img'/>
    </div>
    )
}

export default Cloud