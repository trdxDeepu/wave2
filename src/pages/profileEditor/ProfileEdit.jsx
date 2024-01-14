import { Form, Input, Select, Typography } from 'antd'
// import './styles.css'
import ButtonRounded from '../../UI/Button/ButtonRounded'
// import { useEffect,useState } from 'react'

// function ProfileEdit () {

//   // const [country,setCountry] = useState()

//   // useEffect(()=>{
//   //     const getCountry = async() =>{
//   //         const response = await fetch('https://www.universal-tutorial.com/api/countries/')
//   //         const data = await response.text()
//   //         console.log(data)
//   //     }
//   //     getCountry()
//   // },[])

//   const countryOptions = [
//     { value: 'india', label: ' India' },
//     { value: 'usa', label: ' USA' },
//     { value: 'iran', label: 'Iran' },
//     { value: 'Australia', label: ' Australia' },
//     { value: 'canada', label: 'Canada' }
//   ]

//   return (
//     <section className='profile_container'>
//       {/* <div className='profile_sidebar'> */}
//         <p className='profile_sidebar_title'>Profile</p>
//         <ul className='profile_list'>
//           <li className='profile_list_li'>Personal Information</li>
//           <li className='profile_list_li'>Emails</li>
//           <li className='profile_list_li'>Password</li>
//           <li className='profile_list_li'>Notification</li>
//           <li className='profile_list_li'>Bussiness</li>
//         </ul>
//       {/* </div> */}
//       {/* <div className='profile_rightside'> */}
//         <h1 className='profile_rightside_title'>Profile Information</h1>
//         <p className='profile_rightside_subtitle'>
//           Provide as much or as little information as you’d like. Wave will
//           never share or sell individual personal information or personally
//           identifiable details.
//         </p>
//         <Flex
//           align='center'
//           vertical
//           gap={'15px'}
//           style={{
//             marginTop: '30px',
//             width: '100%'
//           }}
//         >
//           <Input
//             size='large'
//             placeholder='First Name'
//             style={{
//               fontFamily: 'Poppins',
//               fontSize: '16px'
//             }}
//           />

//           <Input
//             size='large'
//             placeholder='Last Name'
//             style={{
//               fontFamily: 'Poppins',
//               fontSize: '16px'
//             }}
//           />
//           <Select
//             placeholder='--Select Country--'
//             size='large'
//             style={{
//               width: '100%',
//               fontFamily: 'Segoe UI Emoji, sans-serif'
//             }}
//             options={countryOptions}
//           />
//           <Select
//             placeholder='--Select Province/State--'
//             size='large'
//             style={{
//               width: '100%'
//             }}
//           />
//           <Input
//             size='large'
//             placeholder='City'
//             style={{
//               fontFamily: 'Poppins',
//               fontSize: '16px'
//             }}
//           />
//           <Input
//             size='large'
//             placeholder='Postal/Zip code'
//             style={{
//               fontFamily: 'Poppins',
//               fontSize: '16px'
//             }}
//           />
//           <Input
//             size='large'
//             placeholder='yyyy-mm-dd'
//             style={{
//               fontFamily: 'Poppins',
//               fontSize: '16px'
//             }}
//           />
//           <ButtonRounded type='primary'>Save</ButtonRounded>
//         </Flex>
//       {/* </div> */}
//     </section>
//   )
// }

// export default ProfileEdit
import { UserOutlined, MailOutlined } from '@ant-design/icons'
import { Flex, Tabs } from 'antd'

// import 'antd/dist/antd.css'

const { TabPane } = Tabs
const { Title } = Typography


const ProfileEdit = () => {
  const [form] = Form.useForm()
  const onFinish = values => {
    console.log('Received values of form: ', values)
  }

  const tabItems = [
    {
      id: 1,
      title: 'Personal Information',
      icon: <UserOutlined />
    },
    {
      id: 2,
      title: 'Email',
      icon: <MailOutlined />
    },
    {
      id: 3,
      title: 'Passwords',
      icon: ''
    },
    {
      id: 4,
      title: 'Notifications',
      icon: ''
    }
  ]
  /* Rendering the contents of the tabs here  */

  const renderTabContent = tabId => {
    switch (tabId) {
      case 1:
        return (
          <>
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
                placeholder='--Select Country--'
                size='large'
                style={{
                  width: '100%',
                  fontFamily: 'Segoe UI Emoji, sans-serif'
                }}
                // options={countryOptions}
              />
              <Select
                placeholder='--Select Province/State--'
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
              <ButtonRounded type='primary'>Save</ButtonRounded>
            </Flex>
          </>
        )
      case 2:
        return (
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              name='prevEmail'
              // label='Prev Email'
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!'
                }
              ]}
            >
              <Input size='large' placeholder='Enter Your Previous Email' />
            </Form.Item>
            <Form.Item
              name='newEmail'
              // label='New Email'
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!'
                }
              ]}
            >
              <Input size='large' placeholder='Enter Your New Email' />
            </Form.Item>
            <ButtonRounded type='primary'>Save</ButtonRounded>
          </Form>
        )
      case 3:
        return <></>
      case 4:
        return <></>
      default:
        return null
    }
  }

  return (
    <Tabs
      defaultActiveKey='1'
      size='middle'
      style={{
        marginTop: '20px',
        marginRight: '1rem',
        fontFamily: 'Poppins'
      }}
    >
      {tabItems.map(item => (
        <TabPane
          key={String(item.id)}
          tab={
            <span>
              {item.icon}
              {item.title}
            </span>
          }
        >
          {renderTabContent(item.id)}
        </TabPane>
      ))}
    </Tabs>
  )
}

export default ProfileEdit
