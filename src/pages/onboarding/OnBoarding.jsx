import { Select } from 'antd'
import './styles.css'

const IndustryBussiness = () => {
  const onChange = value => {
    console.log(`selected ${value}`)
  }
  const onSearch = value => {
    console.log('search:', value)
  }

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
  return (
    <Select
      showSearch
      placeholder='Select a person'
      optionFilterProp='children'
      style={{
        padding: '0px 0px',
        borderRadius: '7px',
        borderColor: '#082cae',
        border: '1px solid #082cae'
      }}
      className='onboarding_input_big'
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={[
        {
          value: 'jack',
          label: 'Jack'
        },
        {
          value: 'lucy',
          label: 'Lucy'
        },
        {
          value: 'tom',
          label: 'Tom'
        }
      ]}
    />
  )
}

/* Selecting input component for the legal bussiness  */
const IndustryLegalBussiness = () => {
  const onChange = value => {
    console.log(`selected ${value}`)
  }
  const onSearch = value => {
    console.log('search:', value)
  }

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
  return (
    <Select
      showSearch
      placeholder='Select a person'
      optionFilterProp='children'
      style={{
        padding: '0px 0px',
        borderRadius: '7px',
        borderColor: '#082cae',
        border: '1px solid #082cae'
      }}
      className='onboarding_input_big'
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={[
        {
          value: 'Sole proprietorship',
          label: 'Sole proprietorship'
        },
        {
          value: 'Limited liability company (LLC)',
          label: 'Limited liability company (LLC)'
        },
        {
          value: 'Corporation',
          label: 'Corporation'
        },
        {
          value: 'Other',
          label: 'Other'
        }
      ]}
    />
  )
}

const OnBoarding = () => {
  return (
    <div className='onboarding_container'>
      <div className='onboarding_logo'>
        <img src='/waveLogo.png' alt='' width={120} />
      </div>
      <div className='onboarding_left'>
        <span className='onboarding_steps'>Step 1 of 3</span>
        <h1 className='onboarding_heading'>Welcome to Wave!</h1>
        <div className='onboarding_name'>
          <span id='onboarding_label'>What&apos;s your name?</span>
          <div className='onboarding_name_input'>
            <input
              type='text'
              placeholder='first name'
              className='onboarding_input'
            />
            <input
              type='text'
              placeholder='last name'
              className='onboarding_input'
            />
          </div>
        </div>
        <div className='onboarding_name'>
          <span id='onboarding_label'>What&apos;s your bussiness name?</span>
          <div className='onboarding_name_input'>
            <input
              type='text'
              placeholder='your bussiness name goes here'
              className='onboarding_input_big '
            />
          </div>
        </div>
        <div className='onboarding_name'>
          <span id='onboarding_label'>What does your business do?</span>
          <div className='onboarding_name_input'>
            {/* <select
              type='text'
              placeholder='select your industry'
              className='onboarding_input_big'
            >
              <option value=''>Select your industry</option>
            </select> */}
            <IndustryBussiness />
          </div>
        </div>
        <div className='onboarding_name'>
          <span id='onboarding_label'>
            What is the legal structure of your business?
          </span>
          <div className='onboarding_name_input'>
            {/* <input
              type='text'
              placeholder='select your bussiness type'
              className='onboarding_input_big'
            /> */}
            <IndustryLegalBussiness />
          </div>
        </div>
        <p className='onboarding_paragraph'>
          Looks like your business is in the{' '}
          <span className='onboarding_span'> India </span> and you do business
          in <span className='onboarding_span'>Indian Rupees</span>.
          <span className='onboarding_link'>Change this.</span>
        </p>
        <button className='onboarding_btn'>Next</button>
      </div>
      <div className='onboarding_rightSide'></div>
    </div>
  )
}

export default OnBoarding
