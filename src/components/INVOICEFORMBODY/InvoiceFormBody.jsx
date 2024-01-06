/* eslint-disable react/prop-types */
import './style.css'

import { DatePicker } from 'antd'
import { Input } from 'antd'
import dayjs from 'dayjs'
import InvoiceTable from '../INVOICETABLE/InvoiceTable'
import CustomerModal from '../../UI/CustomerModal/CustomerModal'
import { useState } from 'react'
import { useFormContext } from '../../hooks/FormContext'

const InvoiceFormBody = () => {
  const { formData,handleChange } = useFormContext()

  const [open, setOpen] = useState(false)



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
                style={{
                  width: '100%',
                  borderColor: '#a6c8e7'
                }}
                size='large'
                className='input-text_field'
                name='invoiceNumber'
                onChange={handleChange}
                value={formData.invoiceNumber}
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
                style={{
                  width: '100%',
                  borderColor: '#a6c8e7'

                }}
                className='input-text_field'
                size='large'
                name='posoNumber'
                onChange={handleChange}
                value={formData.posoNumber}
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
                    marginLeft: '32px',
                    width: '186px',
                    borderColor: '#a6c8e7'

                  }}
                  name='date'
                  value={dayjs(formData.date)}
                  onChange={handleChange}
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

export default InvoiceFormBody
