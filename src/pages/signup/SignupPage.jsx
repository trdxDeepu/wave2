import { Button, Image, Typography } from 'antd'
import './signup.css'
import { Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useFormContext } from '../../hooks/FormContext'

const SignupPage = () => {
  const { user, setUser, handleSignup } = useFormContext()

  const [passwordVisible, setPasswordVisible] = useState(false)

  function handleChange (e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

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

          <div className='signup-form'>
            <form onSubmit={handleSignup}>
              <div className='text-email'>
                <Form.Item
                  name='email'
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
                  <Input
                    style={{
                      marginTop: '5px',
                      marginBottom: '1px',
                      width: '100%',
                      fontStyle: 'italic',
                      fontWeight: '600'
                    }}
                    type='text'
                    size='large'
                    placeholder='Email'
                    value={user.email}
                    onChange={handleChange}
                  />
                </Form.Item>
              </div>
              <div className='text-password'>
                <Form.Item
                  name='password'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!'
                    }
                  ]}
                >
                  <Input.Password
                    style={{
                      marginTop: '-6px',
                      width: '100%',
                      fontStyle: 'italic',
                      fontWeight: '600'
                    }}
                    type='text'
                    size='large'
                    placeholder='Password'
                    value={user.password}
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible
                    }}
                    onChange={handleChange}
                  />
                </Form.Item>

                <div className='anchor-div_span'>
                  <span className='anchor-text--span'>
                    {' '}
                    At least 8 characters, but longer is better.
                  </span>
                  <span
                    href='#'
                    className='anchor-link'
                    onClick={() => setPasswordVisible(prevState => !prevState)}
                  >
                    {passwordVisible ? 'Hide' : 'Show'}
                  </span>
                </div>
                <Button
                  htmlType='submit'
                  size='large'
                  shape='round'
                  style={{
                    width: '100%',
                    boxShadow:
                      '0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  Sign in
                </Button>
                {/*   <Button className='submit-btn' type='submit'>
                  Sign in
                </Button> */}
              </div>
              <div className='line'>
                <span className='line-line'></span>
                <span id='text'>or</span>
                <span className='line-line'></span>
              </div>
              <button className='google-btn'>
                <span>Sign in with Google</span>
              </button>
            </form>
          </div>

          <div className='footer-text'>
            <p className='footer-p'>
              By continuing, you are indicating that you have read and agree to
              the
              <span> Terms of Use </span>
              and
              <span> Privacy Policy </span>
            </p>
            <div className='footer-text-2'>
              <p className='footer-p'>
                Don&apos;t have a Wave account yet?
                <Link to='/login'>
                  <span id='span_signup'> Sign in now.</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupPage
