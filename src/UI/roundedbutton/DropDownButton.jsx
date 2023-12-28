/* eslint-disable react/prop-types */
import { Dropdown } from 'antd'
import './index.css'

import { CaretDownFilled } from '@ant-design/icons'
import { useFormContext } from '../../hooks/FormContext'

const DropDownButton = ({ children }) => {

  const {handleSubmit} = useFormContext()
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
          htmlType='submit'
          icon={<CaretDownFilled />}
          menu={{ items }}
          size='large'
          placement='bottomRight'
          onClick={handleSubmit}
        >
          {children}
        </Dropdown.Button>
      </div>
    </div>
  )
}

export default DropDownButton
