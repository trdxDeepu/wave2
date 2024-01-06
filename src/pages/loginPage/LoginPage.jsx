import { Button } from 'antd'
import LeftSection from '../../UI/left-section/LeftSection'
import RightSection from '../../UI/righsection/RightSection'
import './loginpage.css'
import { Image } from 'antd'

const LoginPage = () => {
  return (
    <main className='container'>
      <LeftSection />

      <RightSection />
      <Button className='chat-btn'>
        <Image
          preview={false}
          style={{ height: '23px', width: '23px' }}
          src='/chat.png'
        />
      </Button>
    </main>
  )
}

export default LoginPage
