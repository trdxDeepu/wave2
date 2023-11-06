import { Flex, Menu, Dropdown, Button } from 'antd'
import './navbar.css'
import WaveLogo from '/Logo.png'
import { DownOutlined } from '@ant-design/icons'

const Navbar = () => {
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
          <a href="">
            <img src={WaveLogo} alt='Logo' className='logoImage' />
          </a>
        </div>
        <div>
          <Dropdown trigger={['click']} style={{color:"#1c252c"}}>
            <Button size='middle' className='navbar-button'>
              <Flex align='center' justify='space-between' gap='8rem'>
                <span>Thor Test</span>
                <span>
                  <DownOutlined />
                </span>
              </Flex>
            </Button>
          </Dropdown>
        </div>
      </Flex>
    </Menu>
  )
}

export default Navbar
