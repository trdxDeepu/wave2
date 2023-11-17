import React from 'react'
import './stepbadge.css'
import { CheckOutlined } from '@ant-design/icons'

const StepBadge = ({ checked, disabled, boxNumber }) => {
  const getBadgeClass = () => {
    if (checked && disabled) {
      return 'step_badge--checked-disabled'
    } else if (checked) {
      return 'step_badge--checked'
    } else if (disabled) {
      return 'step_badge--disabled'
    } else {
      return 'step_badge--unchecked'
    }
  }

  const getInnerClass = () => {
    if (checked && disabled) {
      return 'step-badge__inner--checked-disabled'
    } else if (checked) {
      return 'step-badge__inner--checked'
    } else if (disabled) {
      return 'step-badge__inner--disabled'
    } else {
      return 'step-badge__inner--unchecked'
    }
  }

  const renderValue = () => {
    if (checked) {
      return <CheckOutlined className='step-badge__icon' />
    } else {
      return (
        <span className='step-badge__value'> {disabled ? boxNumber : '2'}</span>
      )
    }
  }

  return (
    <div className={`step_badge ${getBadgeClass()}`}>
      <div className={`step-badge__inner ${getInnerClass()}`}>
        {renderValue()}
      </div>
    </div>
  )
}

export default StepBadge
