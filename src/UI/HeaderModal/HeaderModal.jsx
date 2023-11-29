/* eslint-disable react/prop-types */
import { BsFillBuildingFill } from 'react-icons/bs'
import { RightOutlined } from '@ant-design/icons'
import { HiUserCircle } from 'react-icons/hi'
import './headermodal.css'
import { useFormContext } from '../../hooks/FormContext'



const HeaderModal = props => {
 
  const { open, setOpen, } = props
  const { onSignout,userDataDB } = useFormContext()

  return (
    <div className='dropdown'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px',
          gap: '53px',
          
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
          <div id='hr_line'></div>
          <div className='setting_menu'>
            <p className='setting_menu_header'>
              <span className='setting_menu_header_icon'>
                <HiUserCircle size={'30px'} />
              </span>
              <span className='user_class'>
                <span className='setting_menu_header_title'>{userDataDB.name}</span>
                <span id='user_email'>{userDataDB.email}</span>
              </span>
            </p>
            <a className='busines_class' id='businesInter'>
              Profile Settings
            </a>
            <span
              onClick={onSignout}
              className='busines_class'
              id='businesInter3'
            >
              Sign out
            </span>
          </div>
          <div id='hr_line'></div>
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
