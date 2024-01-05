/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import './Roundedbutton.css'
import { Dropdown,  } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const ButtonRounded = ({
  children,
  size,
  type,
  icon,
  dropdown,
  ...restProps
}) => {
  const getSizeClassName = () => {
    switch (type) {
      case 'primary':
        return 'primary'
      case 'ordinary':
        return 'ordinnary'
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
      className={`rounded-button ${getSizeClassName()} ${getTypeClassName()} `}
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
            marginTop: '10px',
            
          }}
        >
          <span className='dropdown-button'>
            <DownOutlined size={12} />
          </span>
        </Dropdown>
      )}
    </button>
  )
}

export default ButtonRounded
