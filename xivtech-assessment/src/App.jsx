import React from 'react'

import Choices from './component/choices/Choices'
import Devops from './component/devops/Devops'
import Services from './component/services/Services'
import Cloud from './component/cloud/Cloud'

const App = () => {
  return (
    <div className='general-wrapper'>
      <h4>Let's collaborate</h4>
      <Services />
      <Choices />
      <Devops />
      <Cloud />
      <button>Get in touch</button>
    </div>
  )
}

export default App