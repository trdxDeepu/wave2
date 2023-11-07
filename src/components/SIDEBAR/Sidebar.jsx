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
import { render } from 'react-dom'



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
    getItem('Estimates', '3'),
    getItem('Invoice', '4'),
    getItem('Payment Setup', '5'),
    getItem('Recurring Invoices', '6'),
    getItem('Checkouts', '7'),
    getItem('Customer Statements', '8'),
    getItem('Customers', '9'),
    getItem('Products & Services', '10')
  ]),
  getItem('Purchase', 'sub2', <ShoppingCartOutlined />, [
    getItem('Bills', '11'),
    getItem('Vendors', '12'),
    getItem('Product & Services', '13')
  ]),
  getItem('Receipts', '14', <FileTextOutlined />),
  getItem('Accounting', 'sub3', <FaBalanceScaleLeft />, [
    getItem('Transactions', '15'),
    getItem('Reconciliation', '16'),
    getItem('Charts of Accounts', '17'),
    getItem('Hire a Bookkeeper', '18')
  ]),
  getItem('Banking', 'sub4', <BankOutlined />, [
    getItem('Connected Accounts', '19'),
    getItem('Payouts', '20'),
    getItem('Insurance', '21')
  ]),
  getItem('Payroll', 'sub5', <BsClipboard />, [
    getItem('Run Payroll', '22'),
    getItem('Employees', '23'),
    getItem('Timesheets', '24'),
    getItem('Payroll Transactions', '25'),
    getItem('Taxes', '26'),
    getItem('Tax Forms', '27'),
    getItem('COVID-19', '28')
  ]),
  getItem('Reports','29',< AiFillSignal/>),
  getItem('Wave Advisors','30',<FiUsers/>),
  getItem('Tax Filing','31',<TbReportMoney/>)
]



const App = () => {
  const [collapsed, setCollapsed] = useState(false)

  console.log(items)

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
            backgroundColor: 'transparent',
            position: 'fixed',
            height: '100%',
          }}
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
        >
          <div className='demo-logo-vertical' />
          <Menu
            defaultSelectedKeys={['1']}
            key={items.key}
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
