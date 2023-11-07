/* eslint-disable react/prop-types */
import { BsFillBuildingFill } from 'react-icons/bs'
import { RightOutlined } from '@ant-design/icons'
import { HiUserCircle } from 'react-icons/hi'

import './headerModal.css'

const HeaderModal = props => {
  // eslint-disable-next-line no-unused-vars
  const { items, children, open, setOpen } = props
  console.log(children)
  return (
    <div className='dropdown'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px',
          gap: '9rem'
        }}
        onClick={() => setOpen(!open)}
      >
        {props.children}
      </div>

      {open && (
        <div className='dropdown_menu'>
          <div className='setting_menu'>
            <p className='setting_menu_header'>
              <span className='setting_menu_header_icon'>
                <BsFillBuildingFill />
              </span>
              <span className='setting_menu_header_title'>Thor Test</span>
            </p>
            <a className='busines_class' id='businesInter'>
              Bussines Settings
            </a>
            <a className='busines_class' id='businesInter1'>
              Integration
            </a>
            <a className='busines_class' id='businesInter2'>
              <span>Switch Bussiness</span>
              <span>
                <RightOutlined />
              </span>
            </a>
          </div>
          <hr id='hr_line' />
          <div className='setting_menu'>
            <p className='setting_menu_header'>
              <span className='setting_menu_header_icon'>
                <HiUserCircle size={'30px'} />
              </span>
              <span className='user_class'>
                <span className='setting_menu_header_title'>User name</span>
                <span id='user_email'>useremail@gmail.com</span>
              </span>
            </p>
            <a className='busines_class' id='businesInter'>
              Profile Settings
            </a>
            <a className='busines_class' id='businesInter3'>
              Sign Out
            </a>
          </div>
          <hr id='hr_line' />
          <div className='setting_menu'>
            <div className='setting_footer'>
              <p className='setting_footer_inline'>
                <a id='link_tag'>Terms</a>
                <a id='link_tag'>Privacy</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderModal