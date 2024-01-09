import { DatePicker, Select } from 'antd'
import ButtonRounded from '../Button/ButtonRounded'
import StepBadge from '../StepBadge/StepBadge'
import RecuringSelection from '../../components/RecuringSelection/RecuringSelection'
import { useState } from 'react'
import dayjs from 'dayjs'
import Input from 'antd/es/input/Input'

const RecuringBoxHeader = () => {
  const [data, setData] = useState([])
  const [selectCalender, setSelectCalender] = useState([])

  const optionData = [
    { label: 'After', value: 'after' },
    { label: 'On', value: 'on' },
    { label: 'Never', value: 'never' }
  ]

  return (
    <div className='wv-box wv-workflow__task wv-workflow  is-highlighted'>
      <div className='wv-box_content'>
        <div className='recuring_invoice-section'>
          <div className='recuring_invoice_create_box_option'>
            <StepBadge />
            <div className='recuring_invoice_create_box_info'>
              {/* <div className='get_paid_header'> */}
                <p className='wv-heading--schedule'>Set Schedule</p>
              {/* </div> */}
            </div>
            <span className='recuring_invoice_create_box_info_button'>
              <ButtonRounded type='primary'>Next</ButtonRounded>
            </span>
          </div>
          <span>
            <div className='wv-content'>
              <div className='wv-content_primary'>
                <div className='schedule_setting_container'>
                  <RecuringSelection ion data={data} setData={setData} />
                </div>
                <div className='schedule_setting_container'>
                  <div className='schedule_setting_row'>
                    <div className='setting_row_label'>
                      Create First Invoice on
                    </div>
                    <div className='setting_row_label_inputs'>
                      <div>
                        <DatePicker
                          style={{
                            marginLeft: '2px',
                            height: '30px',
                            width: '134px',
                            borderRadius: '4px'
                          }}
                          presets={[
                            {
                              label: 'First day of month',
                              value: dayjs().startOf('month')
                            },
                            {
                              label: 'Last day of month',
                              value: dayjs().endOf('month')
                            }
                          ]}
                          size='small'
                          popupClassName='date_picker_popup'
                        />
                        <span
                          style={{
                            fontSize: '14px',
                            color: '#1c252c',
                            marginTop: '10px',
                            marginLeft: '5px'
                          }}
                        >
                          and end
                        </span>
                        <span>
                          <Select
                            defaultValue={optionData[0].label}
                            style={{
                              marginLeft: '5px',
                              fontSize: '14px',
                              height: '30px',
                              width: '75px'
                            }}
                            options={optionData}
                            size='small'
                            onChange={value => {
                              console.log('this is consolevalue', value)
                              setSelectCalender(value)
                            }}
                          />
                          {selectCalender && selectCalender.value === 'after' && (
                            <>
                              <Input
                                size='small'
                                style={{
                                  width: '70px',
                                  marginTop: '4px',
                                  marginLeft: '4px'
                                }}
                              />
                              <span>Invoice</span>
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default RecuringBoxHeader
