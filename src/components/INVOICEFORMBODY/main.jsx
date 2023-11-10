/* eslint-disable react/prop-types */
import './style.css'

import { DatePicker } from 'antd'
import { Input } from 'antd'

import InvoiceTable from '../INVOICETABLE/InvoiceTable'
import CustomerModal from '../../UI/CustomerModal/CustomerModal'
import { useState } from 'react'


const InvoicePersonInfo = () => {
  const [open, setOpen] = useState(false)
  
  // function handleInputChange (e) {
  //   const { name, value } = e.target
  //   setUserData({ ...userData, [name]: value })
  // }

 

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
            <CustomerModal open={open} setOpen={setOpen} />
          </div>
        </div>
        <div className='box-container-right'>
          <div className='box-container-form'>
            <label className='input-label'>
              <span className='label-text'> Invoice number </span>
            </label>
            <div className='input-field'>
              <Input 
              type='text' 
              className='input-text' 
              size='small' 
              name='invoiceNumber'
              // onChange={handleInputChange}
              // value={userData.invoiceNumber}
              />
            </div>
          </div>
          <div className='box-container-form'>
            <label className='input-label'>
              <div className='label-text'>P.O./S.O.number.</div>
            </label>
            <div className='input-field'>
              <Input 
              type='text' 
              className='input-text' 
              size='small'
              name='posoNumber'
              // onChange={handleInputChange}
              // value={userData.posoNumber}
              />
            </div>
          </div>
          <div className='date-container'>
            <div className='box-container-form-date'>
              <label className='input-label'>
                <div className='label-text'>Invoice date</div>
              </label>
              <div className='input-field'>
                <DatePicker
                  size='large'
                  style={{
                    marginLeft: '28px',
                    width: '190px'
                  }}
                  name='date'
                  // onChange={(date, dateString) =>
                  //   setUserData({ ...userData, date: dateString })
                  // }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <InvoiceTable />
    </div>
  )
}

export default InvoicePersonInfo
