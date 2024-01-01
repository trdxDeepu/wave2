/* eslint-disable react/prop-types */
import './invoicebody.css'
import { DownOutlined } from '@ant-design/icons'

import { Input } from 'antd'

import DragAndDrop from '../../UI/DragnDrop/main'
import { useState } from 'react'
import { useFormContext } from '../../hooks/FormContext'

const InvoiceBody = ({ showTextArea = false }) => {
  const [showContent, setShowContent] = useState(false)

  const { formData, handleChange } = useFormContext()

  return (
    <div className='add_body'>
      <div className='add_info'>
        <div className='add-info-section'>
          <div className={`add-info-section_button  `}>
            <div
              className='add-info_title'
              onClick={() => setShowContent(!showContent)}
            >
              {showTextArea ? (
                <span style={{ fontSize: '15px', fontWeight: '600' }}>
                  Footer
                </span>
              ) : (
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: '600'
                  }}
                >
                  Business address and contact details, title, summary, and logo
                </span>
              )}
              <span style={{}}>
                <DownOutlined
                  style={{
                    fontWeight: 'bold',
                    transform: showContent ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className={`invoice_add_content ${showContent ? 'hide' : 'show'}`}>
          <div></div>
          {showTextArea ? (
            <textarea
              name='footer'
              id=''
              onChange={handleChange}
              value={formData.footer}
              style={{ width: '100%', border: 'none', fontSize: '15px' }}
              className='text-area'
              placeholder='Enter a footer for this invoice (e.g. tax information, thank you note)'
            ></textarea>
          ) : (
            <div className={`add_info_content `}>
              <div className='add_content_logo'>
                <DragAndDrop />
              </div>
              <div className='add_content_info'>
                <div className='content_info_invoice'>
                  <Input
                    type='text'
                    name='title'
                    className='input_text'
                    size='large'
                    placeholder='Invoice Title'
                    style={{
                      fontSize: '21px',
                      fontStyle: 'italic',
                      borderColor: '#a6c8e7',
                      fontWeight: '600'
                    }}
                    value={formData.title}
                    onChange={handleChange}
                  />
                  <Input
                    type='text'
                    className='input_text'
                    name='summary'
                    size='large'
                    placeholder='Summary (e.g. project name, description of invoice)'
                    style={{
                      fontSize: '16px',
                      borderColor: '#a6c8e7'
                    }}
                    value={formData.summary}
                    onChange={handleChange}
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
                      cursor: 'pointer'
                    }}
                    className='hover_button'
                  >
                    Edit your business address and contact details
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InvoiceBody
