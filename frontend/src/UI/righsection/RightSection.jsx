import { Button, Form, Image, Input } from 'antd'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useFormContext } from '../../hooks/FormContext'

const RightSection = () => {
  const { setUser, user, onSignin,onGoogleSignIn } = useFormContext()

  return (
    <div className='right-container--login'>
      <div className='right-container-inside'>
        <div className='right-header'>
          <a className='logo' href='www.google.com' target='_blank'>
            <Image
              preview={false}
              src='/Logo.png'
              alt='logoicon'
              id='logoImage'
              height={45}
              width={150}
            />
          </a>
        </div>
        <div className='right-signin'>
          <div className='text-signin'>
            <h2 style={{ fontWeight: '700' }}>Sign in</h2>
          </div>
          <Form
            onFinish={onSignin}
            onValuesChange={changedValues => {
              console.log(changedValues)
              setUser({ ...user, ...changedValues })
            }}
          >
            <div className='text-email'>
              <label className='label-text'>Email</label>
              <Form.Item
                name='email'
                rules={[{ required: true, message: 'Please input your email' }]}
              >
                <Input
                  style={{
                    marginTop: '5px',
                    width: '100%',
                    border: '2px solid #a6c8e7',
                    fontSize: '17px'
                  }}
                  type='text'
                  size='large'
                  name='email'
                />
              </Form.Item>
            </div>
            <div className='text-password'>
              <label className='label-text'>Password</label>
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
                    marginTop: '5px',
                    width: '100%',
                    border: '2px solid #a6c8e7'
                  }}
                  type='text'
                  size='large'
                  name='password'
                />
              </Form.Item>

              <div className='anchor-div'>
                <a href='#' className='forgot-link'>
                  Forgot it?
                </a>
              </div>
              <Button
                htmlType='submit'
                size='large'
                shape='round'
                style={{
                  marginTop: '15px',
                  width: '100%',
                  boxShadow:
                    '0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25)',
                    border: 'none',
                }}
              >
                Sign in
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
              className='google-btn'
              size='large'
              shape='round'
              icon={
                <FcGoogle
                  style={{
                    position: 'relative',
                      left: '140px',
                      marginRight: '12px',
                      textAlign: 'center',
                      backgroundColor: '#fff',
                      borderRadius: '50%'
                  }}
                  size={22}
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
              <Link to='/signup'>
                <span className='sign_in--span'> Sign up now.</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSection
