import { useState } from 'react'
import {
  DashboardOutlined,
  FileTextOutlined,
  PlusCircleFilled,
  ShoppingCartOutlined,
  CreditCardOutlined,
  BankOutlined
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import './sidebar.css'
import { FaBalanceScaleLeft, } from 'react-icons/fa'
import { BsClipboard } from 'react-icons/bs'
import {AiFillSignal} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import {TbReportMoney} from 'react-icons/tb'



const { Sider } = Layout
function getItem (label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  }
}

const items = [
  getItem(
    'Create new ',
    '1',
    <PlusCircleFilled
      style={{
        color: '#2046cf'
      }}
    />
  ),
  getItem('Dashboard', '2', <DashboardOutlined />),
  getItem('Sales and Payment', 'sub1', <CreditCardOutlined />, [
    getItem('Estimates', '1'),
    getItem('Invoice', '2'),
    getItem('Payment Setup', '3'),
    getItem('Recurring Invoices', '4'),
    getItem('Checkouts', '5'),
    getItem('Customer Statements', '6'),
    getItem('Customers', '7'),
    getItem('Products & Services', '8')
  ]),
  getItem('Purchase', 'sub2', <ShoppingCartOutlined />, [
    getItem('Bills', '1'),
    getItem('Vendors', '2'),
    getItem('Product & Services', '3')
  ]),
  getItem('Receipts', '3', <FileTextOutlined />),
  getItem('Accounting', 'sub3', <FaBalanceScaleLeft />, [
    getItem('Transactions', '1'),
    getItem('Reconciliation', '2'),
    getItem('Charts of Accounts', '3'),
    getItem('Hire a Bookkeeper', '4')
  ]),
  getItem('Banking', 'sub4', <BankOutlined />, [
    getItem('Connected Accounts', '1'),
    getItem('Payouts', '2'),
    getItem('Insurance', '3')
  ]),
  getItem('Payroll', 'sub5', <BsClipboard />, [
    getItem('Run Payroll', '1'),
    getItem('Employees', '2'),
    getItem('Timesheets', '3'),
    getItem('Payroll Transactions', '4'),
    getItem('Taxes', '5'),
    getItem('Tax Forms', '6'),
    getItem('COVID-19', '7')
  ]),
  getItem('Reports','4',< AiFillSignal/>),
  getItem('Wave Advisors','5',<FiUsers/>),
  getItem('Tax Filing','6',<TbReportMoney/>)
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
            backgroundColor: 'transparent'
          }}
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
        >
          <div className='demo-logo-vertical' />
          <Menu
            defaultSelectedKeys={['1']}
            mode='inline'
            items={items}
            style={{
              backgroundColor: 'transparent',
              borderRight: '1px solid #d1e4f5',
              fontSize: '16px',
              width: '100%',
              height: '100%',
              color: '#001B66',
              marginTop: '7px'
              
            }}
          />
        </Sider>
      </Layout>
    </div>
  )
}
export default App
