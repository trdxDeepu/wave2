import { Form, Image, Input } from 'antd'
import { Link } from 'react-router-dom'

const RightSection = () => {
  return (
    <div className='right-container--login'>
      <div className='right-container-inside'>
        <div className='right-header'>
          <a className='logo' href='www.google.com' target='_blank'>
            <Image
              preview={false}
              src='/waveLogo.png'
              alt='logoicon'
              id='logoImage'
            />
          </a>
        </div>
        <div className='right-signin'>
          <div className='text-signin'>
            <h2 style={{ fontWeight: '700' }}>Sign in</h2>
          </div>
          <Form>
            <div className='text-email'>
              <label className='label-text'>Email</label>

              <Input
                style={{
                  marginTop: '5px',
                  width: '100%'
                }}
                type='text'
                size='large'
                className='input-text--login'
              />
            </div>
            <div className='text-password'>
              <label className='label-text'>Password</label>

              <Input
                style={{
                  marginTop: '5px',
                  width: '100%'
                }}
                type='text'
                size='large'
                className='input-text--login'
              />

              <div className='anchor-div'>
                <a href='#' className='anchor-link'>
                  Forgot it?
                </a>
              </div>
              <button className='submit-btn'>Sign in</button>
            </div>
            <div className='line'>
              <span className='line-line'></span>
              <span id='text'>or</span>
              <span className='line-line'></span>
            </div>
            <button className='google-btn'>
              <span>Sign in with Google</span>
            </button>
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
