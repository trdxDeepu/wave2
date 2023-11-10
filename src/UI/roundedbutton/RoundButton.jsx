import { Dropdown } from 'antd'
import './index.css'

import { CaretDownFilled } from '@ant-design/icons'

const RoundButton = () => {
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
          size='large'
          type='primary'
          trigger={['click']}
          htmlType='submit'
          icon={<CaretDownFilled />}
          menu={{
            items
          }}
          style={{
            borderRadius: '8px !important',
            padding: '10px 0'
          }}
          
        >
          Save and continue
        </Dropdown.Button>
      </div>
    </div>
  )
}

export default RoundButton
