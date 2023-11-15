import React from 'react'
import './RoundedButton.css' // Assuming you have the CSS file for styling
import { Button, Dropdown, Space } from 'antd'
import { DownOutlined, DragOutlined } from '@ant-design/icons'

const ButtonRounded = ({
  children,
  size,
  type,
  icon,
  dropdown,
  ...restProps
}) => {
  const getSizeClassName = () => {
    switch (size) {
      case 'large':
        return 'large'
      case 'small':
        return 'small'
      case 'medium':
        return 'medium'
      default:
        return ''
    }
  }

  const getTypeClassName = () => {
    switch (type) {
      case 'ordinary':
        return 'ordinary'
      // Add more cases for other types if needed
      default:
        return ''
    }
  }

  const items = [
    {
      key: 1,
      label: 'View created invoice'
    },

    {
      key: 2,
      label: 'Dupicate'
    },
    {
      key: 3,
      label: 'End'
    }
  ]

  return (
    <button
      className={`rounded-button ${getSizeClassName()} ${getTypeClassName()}`}
      {...restProps}
    >
      {children}
      {dropdown && (
        <Dropdown
          trigger={['click']}
          menu={{ items }}
          placement='bottomRight'
          icon={<DownOutlined />}
          overlayStyle={{
            marginTop: '10px'
          }}
        >
          <span className='dropdown-button'>
            <DownOutlined />
          </span>
        </Dropdown>
      )}
    </button>
  )
}

export default ButtonRounded
