import { Flex, Menu } from 'antd'
import './navbar.css'
import WaveLogo from '/Logo.png'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import HeaderModal from '../../UI/modal/HeaderModal'
import { useState } from 'react'
import { useFormContext } from '../../hooks/FormContext'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { userDataDB } = useFormContext()

  return (
    <Menu
      style={{
        height: '56px',
        minWidth: '100%',
        backgroundColor: '#f5faff',
        borderBottom: '1px solid #d1e4f5',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}
    >
      <Flex align='center' justify='space-between' className='navbar'>
        <div className=''>
          <a href=''>
            <img src={WaveLogo} alt='Logo' className='logoImage' />
          </a>
        </div>
        <div>
          <div className='navbar-button'>
            <HeaderModal setOpen={setOpen} open={open}>
              <span>{userDataDB.name}</span>
              <span>
                {open ? (
                  <UpOutlined
                    style={{
                      transition: 'all 0.3s ease-in-out'
                    }}
                  />
                ) : (
                  <DownOutlined
                    style={{
                      transition: 'all 0.5s ease-in-out'
                    }}
                  />
                )}
              </span>
            </HeaderModal>
          </div>
        </div>
      </Flex>
    </Menu>
  )
}

export default Navbar
