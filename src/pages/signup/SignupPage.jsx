import { Image, Typography } from 'antd'
import './signup.css'

const SignupPage = () => {
  const { Title } = Typography
  return (
    <>
      <div className='signup-container'>
        <div className='signup-logo'>
          <Image preview={false} src='/waveLogo.png' height={35} width={120} />
        </div>
        <div className='signup-header'>
          <h1 className='signup-header-title'>Check out Wave — it’s free!</h1>
          <h2 className='signup-header-subtitle'>
            Wave helps freelancers, consultants, and small businesses <br />
            around the world simplify their finances.
          </h2>
        </div>
      </div>
    </>
  )
}

export default SignupPage
