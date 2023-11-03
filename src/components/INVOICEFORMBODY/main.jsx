import './style.css'


import { DatePicker, Space } from 'antd'
import { Input } from 'antd'


const InvoicePersonInfo = () => {
  return (
    <div className='box-container'>
      <div className='box-container-2'>
        <div className='box-container-left'>
          <div className='circle'>
            <div className='circle-dot'>
              <div className='inner-circle-dot'></div>
            </div>
          </div>
          <div className='profile-section'>
            <div className='user-icon'>
              <span size={45} style={{ fill: 'lightgray' }} ></span>
              <span className='user-icon-text'>Add a coustomer</span>
            </div>
          </div>
        </div>
        <div className='box-container-right'>
          <div className='box-container-form'>
            <label className='input-label'>
              <span className='label-text'> Invoice number </span>
            </label>
            <div className='input-field'>
              <Input type='text' className='input-text' size='small' sx={{}} />
            </div>
          </div>
          <div className='box-container-form'>
            <label className='input-label'>
              <div className='label-text'>P.O./S.O.number.</div>
            </label>
            <div className='input-field'>
              <Input type='text' className='input-text' size='small' sx={{}} />
            </div>
          </div>
          <div className='date-container'>
            <div className='box-container-form-date'>
              <label className='input-label'>
                <div className='label-text'>Invoice date</div>
              </label>
              <div className='input-field'>
                <Space>
                  <DatePicker size='large' />
                </Space>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default InvoicePersonInfo