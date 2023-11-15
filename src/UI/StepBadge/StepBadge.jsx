import React from 'react'
import './stepbadge.css' // Assuming you have the CSS file for styling
import { CheckOutlined } from '@ant-design/icons' // Import the icon you want to use

const StepBadge = ({ checked }) => {
  return (
    <div className={`step_badge ${checked ? 'step_badge--checked' : ''}`}>
      <div
        className={`step-badge__inner ${
          checked ? 'step-badge__inner--checked' : ''
        }`}
      >
        {checked ? <CheckOutlined className='step-badge__icon' /> : '2'}
      </div>
    </div>
  )
}

export default StepBadge
