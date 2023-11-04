import './invoicebody.css'
import { DownOutlined } from '@ant-design/icons'
import DragFile from '../../UI/DragFile'
import { Input, Button } from 'antd'

const InvoiceBody = () => {
  return (
    <div className='add_body'>
      <div className='add_info'>
        <div className='add-info-section'>
          <button className='add-info-section_button'>
            <div className='add-info_title'>
              <span
                style={{
                  fontSize: '15px',
                  fontWeight: '600'
                }}
              >
                Business address and contact details, title, summary, and logo
              </span>
              <span
                style={{
                 
                }}
              >
                <DownOutlined
                  style={{
                    fontWeight: 'bold'
                  }}
                />
              </span>
            </div>
          </button>
        </div>
        <div className='invoice_add_/*  */content'>
          <div></div>
          <div className='add_info_content'>
            <div className='add_content_logo'>
              <DragFile />
            </div>
            <div className='add_content_info'>
              <div className='content_info_invoice'>
                <Input
                  type='text'
                  className='input_text'
                  size='large'
                  placeholder='Invoice Title'
                />
                <Input
                  type='text'
                  className='input_text'
                  size='large'
                  placeholder='Summary (e.g. project name, description of invoice)'
                />
              </div>
              <div className='info_bussiness'>
                <strong>Thor Test</strong>
                <div>
                  <p style={{ color: '#1c252c', fontSize: '16px' }}>
                    United States
                  </p>
                </div>

                <span
                  type='text'
                  style={{
                    border: 'none',
                    color: '#2046cf',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    cursor:"pointer",
                   
                  }}
                  className='hover_button'
                >
                  Edit your business address and contact details
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceBody
