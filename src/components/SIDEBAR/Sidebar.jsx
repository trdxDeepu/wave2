import{ useState } from 'react'
import {
  DashboardOutlined,
  FileOutlined,
  PlusCircleFilled,
  ShoppingCartOutlined,
  CreditCardOutlined
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
const {  Sider } = Layout
import './sidebar.css'

function getItem (label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  }
}
const items = [

  getItem('Dashboard', '1', <DashboardOutlined style={{ fontSize: '18px' }} />),
  getItem('Sales and Payment', 'sub1', <CreditCardOutlined  style={{ fontSize: '18px' }}/>, [
    getItem('Estimates', '3'),
    getItem('Invoice', '4'),
    getItem('Payment Setup', '5'),
    getItem('Recurring Invoices', '6'),    
    getItem('Checkouts', '7'),    
    getItem('Customer Statements', '8'),    
    getItem('Customers', '9'),    
    getItem('Products & Services', '10'),    
  ]),
  getItem('Purchase', 'sub2', <ShoppingCartOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8')
  ]),
  getItem('Files', '9', <FileOutlined />)
]
const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <div className='sidebar'>
      <Layout
        style={{
          minHeight: '100vh'
        }}
      >
        <Sider
          style={{
            backgroundColor:'transparent'
          }}
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
        >
          <div className='demo-logo-vertical' />
          <div className='sidebar_header'>
            <span>
          <PlusCircleFilled style={{
            fontSize:'17px'
          }}/>            
            </span>
            <span className='sidebar_header_text'>
              Create new
            </span>
          </div>
          <Menu
            defaultSelectedKeys={['1']}
            mode='inline'
            items={items}
            style={{
              backgroundColor:'transparent',
              borderRight:"1px solid #d1e4f5",
              fontSize:"16px",
              width:"100%",
              height:"100%",
              color:"#001B66",
              marginTop:"10px",
            
            
            }}
            
          />
        </Sider>
       
      </Layout>
    </div>
  )
}
export default App
