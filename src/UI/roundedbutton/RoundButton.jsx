import './index.css'

import {CaretDownFilled  } from '@ant-design/icons'

const RoundButton = () => {
  return (
    <div className='btn-div'>
      <div className="btn-container">
      <button className='btn'>Save and continue</button>
      <div className='btn-right'>
        <CaretDownFilled />
      </div>

      </div>
    </div>
  )
}

export default RoundButton
