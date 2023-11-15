import { Dropdown } from 'antd'
import './index.css'

import { CaretDownFilled } from '@ant-design/icons'
import ButtonRounded from '../Button/ButtonRounded'

const DropDownButton = ({ children }) => {
  const items = [
    {
      key: '1',
      label: 'Save and send'
    },
    {
      key: '2',
      label: 'Save and record payment'
    }
  ]

  return (
    <div className='btn-div'>
      <div className='btn-container'>
        <Dropdown.Button
          trigger={['click']}
          icon={<CaretDownFilled />}
          menu={{ items }}
          size='large'
          placement='bottomRight'
        >
          {children}
        </Dropdown.Button>
      </div>
    </div>
  )
}

export default DropDownButton
