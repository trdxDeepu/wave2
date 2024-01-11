import {  Flex, Input, Select } from 'antd'
import './styles.css'

function ProfileEdit () {
  const countryOptions = [
    { value: 'india', label: ' India' },
    { value: 'usa', label: ' USA' },
    { value: 'iran', label: 'Iran' },
    { value: 'Australia', label: ' Australia' },
    { value: 'canada', label: 'Canada' }
  ]

  return (
    <section className='profile_container'>
      <div className='profile_sidebar'>
        <p className='profile_sidebar_title'>Profile</p>
        <ul className='profile_list'>
          <li className='profile_list_li'>Personal Information</li>
          <li className='profile_list_li'>Emails</li>
          <li className='profile_list_li'>Password</li>
          <li className='profile_list_li'>Notification</li>
          <li className='profile_list_li'>Bussiness</li>
        </ul>
      </div>
      <div className='profile_rightside'>
        <h1 className='profile_rightside_title'>Profile Information</h1>
        <p className='profile_rightside_subtitle'>
          Provide as much or as little information as you’d like. Wave will
          never share or sell individual personal information or personally
          identifiable details.
        </p>
        <Flex
          align='center'
          vertical
          gap={'15px'}
          style={{
            marginTop: '30px',
            width: '100%'
          }}
        >
          <Input
            size='large'
            placeholder='First Name'
            style={{
              fontFamily: 'Poppins',
              fontSize: '16px'
            }}
          />

          <Input
            size='large'
            placeholder='Last Name'
            style={{
              fontFamily: 'Poppins',
              fontSize: '16px'
            }}
          />
          <Select
            placeholder='Select Country'
            size='large'
            style={{
              width: '100%',
              fontFamily: 'Segoe UI Emoji, sans-serif'
            }}
            options={countryOptions}
          />
          <Select
            placeholder='Province/State'
            size='large'
            style={{
              width: '100%'
            }}
          />
          <Input
            size='large'
            placeholder='City'
            style={{
              fontFamily: 'Poppins',
              fontSize: '16px'
            }}
          />
          <Input
            size='large'
            placeholder='Postal/Zip code'
            style={{
              fontFamily: 'Poppins',
              fontSize: '16px'
            }}
          />
          <Input
            size='large'
            placeholder='yyyy-mm-dd'
            style={{
              fontFamily: 'Poppins',
              fontSize: '16px'
            }}
          />
        </Flex>
      </div>
    </section>
  )
}

export default ProfileEdit
