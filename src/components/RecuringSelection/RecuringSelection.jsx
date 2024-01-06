/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Select } from 'antd'

const RecurringSelection = ({ data, setData }) => {
  const [selectedDate, setSelectedDate] = useState('')

  const selectCalender = [
    { value: 'monthly', label: 'Monthly' },
    { value: '3months', label: 'Every 3 Months' },
    { value: '6months', label: 'Evert 6 months' },
    { value: 'yearly', label: 'Yearly' }
  ]

  const selectMonth = [
    { value: 'first', label: 'First' },
    { value: 'last', label: 'Last' },
    { value: '2nd', label: '2nd' },
    { value: '3rd', label: '3th' },
    { value: '4th', label: '4th' },
    { value: '5th', label: '5th' },
    { value: '6th', label: '6th' },
    { value: '7th', label: '7th' },
    { value: '8th', label: '8th' },
    { value: '9th', label: '9th' },
    { value: '10th', label: '10th' },
    { value: '11th', label: '11th' },
    { value: '12th', label: '2th' },
    { value: '13th', label: '13th' },
    { value: '15th', label: '15th' },
    { value: '16th', label: '16th' },
    { value: '17th', label: '17th' },
    { value: '18th', label: '18th' },
    { value: '19th', label: '19th' },
    { value: '20th', label: '20th' },
    { value: '21th', label: '21th' },
    { value: '22th', label: '22th' },
    { value: '23th', label: '23th' },
    { value: '24th', label: '24th' },
    { value: '25th', label: '25th' },
    { value: '26th', label: '26th' },
    { value: '27th', label: '27th' },
    { value: '28th', label: '28th' },
    { value: '29th', label: '29th' },
    { value: '30th', label: '30th' },
    { value: '31th', label: '31th' }
  ]

  const selectYearly = [
    { value: 'january', label: 'January' },
    { value: 'february', label: 'February' },
    { value: 'march', label: 'March' },
    { value: 'april', label: 'April' },
    { value: 'may', label: 'May' },
    { value: 'june', label: 'June' },
    { value: 'july', label: 'July' },
    { value: 'august', label: 'August' },
    { value: 'september', label: 'September' },
    { value: 'october', label: 'October' },
    { value: 'november', label: 'November' },
    { value: 'december', label: 'December' }
  ]

  // const handleSelectWeek = value => {
  //   console.log(value)
  //   setSelectedDate(value) // Reset selectedDate when the recurring option changes
  // }

  console.log('this is selected date', selectedDate.label)

  const handleSelectMonth = value => {
    console.log(value)
    setSelectedDate(value)
    // Reset selectedDate when the recurring option changes
  }
  const handleSelectYearly = value => {
    console.log(value)
  }

  const handleChange = value => {
    setData(value)
  }

  return (
    <div className='schedule_setting_row'>
      <div className='setting_row_label'>Repeat this invoice</div>
      <div className='setting_row_label_inputs'>
        <div>
          <Select
            labelInValue
            // className='select_calender_class'
            onChange={handleChange}
            options={selectCalender}
            size='small'
            style={{ height: '30px', width: '134px' ,marginLeft:'25px'}}
            defaultValue='Select here'
          />
        </div>
        <div>
          {data && (data.value === '3months' || data.value === '6months') && (
            <>
              <span
                style={{
                  fontSize: '14px',
                  color: '#1c252c',
                  // marginTop: '10px',
                  marginLeft: '5px',
                  height: '30px',
                  width: '134px'
                }}
              >
                on the
              </span>
              <Select
                labelInValue
                onChange={handleSelectMonth}
                options={selectMonth}
                size='small'
                defaultValue={selectMonth[0].label}
                style={{
                  marginLeft: '5px',
                  height: '30px',
                  width: '70px'
                }}
              />
              <span
                style={{
                  fontSize: '14px',
                  color: '#1c252c',
                  marginLeft: '5px'
                }}
              >
                {' '}
                {selectedDate.label} day of every month{' '}
              </span>
            </>
          )}
        </div>
        <div>
          {data && data.value === 'monthly' && (
            <>
              <span style={{ fontSize: '14px', color: '#1c252c' }}>
                on the{' '}
              </span>
              <Select
                labelInValue
                onChange={handleSelectMonth}
                options={selectMonth}
                size='small'
                defaultValue={selectMonth[0].label}
                style={{
                  height: '30px',
                  width: '70px'
                }}
              />
              <span
                style={{
                  fontSize: '14px',
                  color: '#1c252c',
                  height: '30px',
                  width: '134px'
                }}
              >
                {' '}
                day of every month{' '}
              </span>
            </>
          )}
        </div>
        <div>
          {data && data.value === 'yearly' && (
            <div>
              <span
                style={{
                  fontSize: '14px',
                  color: '#1c252c',
                  marginTop: '10px',
                  height: '30px',
                  width: '134px'
                }}
              >
                on the{' '}
              </span>
              <Select
                labelInValue
                onChange={handleSelectYearly}
                options={selectYearly}
                defaultValue={selectYearly[0].label}
                size='small'
                style={{
                  height: '30px',
                  width: '124px'
                }}
              />
              <div
                style={{
                  marginLeft: '-146px',
                  marginTop: '4px'
                  // height: '30px',
                  // width: '134px'
                }}
              >
                <Select
                  labelInValue
                  onChange={handleSelectMonth}
                  options={selectMonth}
                  defaultValue={selectMonth[0].label}
                  size='small'
                  style={{
                    height: '30px',
                    width: '124px',
                    marginTop: '10px',
                    marginRight: '15px',
                  }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    color: '#1c252c'
                  }}
                >
                  {' '}
                  day of every month{' '}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RecurringSelection
