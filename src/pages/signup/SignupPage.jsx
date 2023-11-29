import { Button, Image } from 'antd'
import './signup.css'
import { Form, Input } from 'antd'
import { Link } from 'react-router-dom'

import { FcGoogle } from 'react-icons/fc'

import { useFormContext } from '../../hooks/FormContext'
import { useState } from 'react'

const SignupPage = () => {
  const [showPasswordText, setShowPasswordText] = useState(true)

  const {
    user,
    setUser,
    passwordVisible,
    setPasswordVisible,
    passwordValidationStatus,
    setPasswordValidationStatus,
    onFinish,
    form,
    onGoogleSignIn
  } = useFormContext()

  const getPasswordStrength = value => {
    const re = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/

    if (!value) {
      return ''
    } else if (re.test(value)) {
      return 'strong'
    } else if (value.length >= 8) {
      return 'good'
    } else {
      return 'weak'
    }
  }

  const getPasswordColor = strength => {
    switch (strength) {
      case 'strong':
        return 'green'
      case 'good':
        return 'orange'
      case 'weak':
        return 'red'
      default:
        return ''
    }
  }

  const getPasswordStrengthText = strength => {
    switch (strength) {
      case 'strong':
        return 'This is a very strong password!'
      case 'good':
        return 'This is a good password, but it could be a bit stronger.'
      case 'weak':
        return "Uh oh, this password isn't strong enough."
      default:
        return 'At least 8 characters, but longer is better.'
    }
  }

  console.log(user)

  return (
    <>
      <div className='signup-container'>
        <div className='signup-logo'>
          <Image preview={false} src='/Logo.png' height={60} width={200} />
        </div>
        <div className='signup-header'>
          <h1 className='signup-header-title'>Check out Wave — it’s free!</h1>
          <h2 className='signup-header-subtitle'>
            Wave helps freelancers, consultants, and small businesses <br />
            around the world simplify their finances.
          </h2>

          <div className='signup-form'>
            <Form
              form={form}
              onFinish={onFinish}
              onValuesChange={changedValues => {
                
                setUser({ ...user, ...changedValues })
              }}
            >
              <div className='text-email'>
                <Form.Item
                  name='email'
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not a valid E-mail!'
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
                    name='email'
                    placeholder='Email'
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
                    },
                    {
                      validator: async (_, value) => {
                        const strength = getPasswordStrength(value)
                        setPasswordValidationStatus(strength)
                        if (strength === 'strong') {
                          return Promise.resolve()
                        } else {
                          return Promise.reject('')
                        }
                      }
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
                    type='password'
                    size='large'
                    name='password'
                    placeholder='Password'
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible
                    }}
                  />
                </Form.Item>

                <div className='anchor-div_span'>
                  {showPasswordText ? (
                    <span
                      className='anchor-text--span'
                      style={{
                        color: getPasswordColor(passwordValidationStatus)
                      }}
                    >
                      {getPasswordStrengthText(passwordValidationStatus)}
                    </span>
                  ) : (
                    <span className='anchor-text--span'>{''}</span>
                  )}
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
                  onClick={prevState => {
                    setShowPasswordText(!prevState)
                  }}
                >
                  Get started
                </Button>
              </div>
              <div className='line'>
                <span className='line-line'></span>
                <span id='text'>or</span>
                <span className='line-line'></span>
              </div>
              <Button
                style={{
                  width: '100%',
                  backgroundColor: '#1b6cf2',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.3s'
                }}
                size='large'
                shape='round'
                icon={
                  <FcGoogle
                    style={{
                      marginRight: '12px',
                      textAlign: 'left',
                      backgroundColor: '#fff',
                      borderRadius: '50%'
                    }}
                    size={27}
                  />
                }
                onClick={onGoogleSignIn}
              >
                <span style={{ flex: 1 }}>Sign in with Google</span>
              </Button>
            </Form>
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
