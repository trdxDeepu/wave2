import { Flex, Menu, Dropdown, Button } from 'antd'
import './navbar.css'
import WaveLogo from '/Logo.png'
import { DownOutlined } from '@ant-design/icons'
import HeaderModal from '../../UI/modal/HeaderModal'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const items = [
    {
      key: '1',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.antgroup.com'
        >
          1st menu item
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.aliyun.com'
        >
          2nd menu item
        </a>
      )
    },
    {
      key: '3',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.luohanacademy.com'
        >
          3rd menu item
        </a>
      )
    }
  ]

  return (
    <Menu
      style={{
        height: '56px',
        minWidth: '100%',
        backgroundColor: '#f5faff',
        borderBottom: '1px solid #d1e4f5'
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
            <HeaderModal items={items} setOpen={setOpen} open={open}>
              <span>Thor</span>
              <span>
                <DownOutlined />
              </span>
            </HeaderModal>
          </div>
        </div>
      </Flex>
    </Menu>
  )
}

export default Navbar
