import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  DashboardOutlined,
  FileTextOutlined,
  PlusCircleFilled,
  ShoppingCartOutlined,
  CreditCardOutlined,
  BankOutlined
} from '@ant-design/icons'
import './sidebar.css'
import { FaBalanceScaleLeft } from 'react-icons/fa'
import { BsClipboard } from 'react-icons/bs'
import { AiFillSignal } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { TbReportMoney } from 'react-icons/tb'

const { Sider } = Layout

function getItem (label, key, icon, to, children) {
  return {
    key,
    icon,
    children,
    label,
    to
  }
}

const items = [
  getItem(
    'Create new ',
    '1',
    <PlusCircleFilled style={{ color: '#2046cf' }} />,
    '/create-new'
  ),
  getItem('Dashboard', '2', <DashboardOutlined />, '/dashboard'),
  getItem('Sales and Payment', 'sub1', <CreditCardOutlined />, null, [
    getItem('Estimates', '3', null, '/estimates'),
    getItem('Invoice', '4', null, '/invoice'),
    getItem('Payment Setup', '5', null, '/payment-setup'),
    getItem('Recurring Invoices', '6', null, '/recurring-invoices'),
    getItem('Checkouts', '7', null, '/checkouts'),
    getItem('Customer Statements', '8', null, '/customer-statements'),
    getItem('Customers', '9', null, '/customers'),
    getItem('Products & Services', '10', null, '/products-services')
  ]),
  getItem('Purchase', 'sub2', <ShoppingCartOutlined />, null, [
    getItem('Bills', '11', null, '/bills'),
    getItem('Vendors', '12', null, '/vendors'),
    getItem('Product & Services', '13', null, '/purchase-services')
  ]),
  getItem('Receipts', '14', <FileTextOutlined />, '/receipts'),
  getItem('Accounting', 'sub3', <FaBalanceScaleLeft />, null, [
    getItem('Transactions', '15', null, '/transactions'),
    getItem('Reconciliation', '16', null, '/reconciliation'),
    getItem('Charts of Accounts', '17', null, '/charts-of-accounts'),
    getItem('Hire a Bookkeeper', '18', null, '/hire-bookkeeper')
  ]),
  getItem('Banking', 'sub4', <BankOutlined />, null, [
    getItem('Connected Accounts', '19', null, '/connected-accounts'),
    getItem('Payouts', '20', null, '/payouts'),
    getItem('Insurance', '21', null, '/insurance')
  ]),
  getItem('Payroll', 'sub5', <BsClipboard />, null, [
    getItem('Run Payroll', '22', null, '/run-payroll'),
    getItem('Employees', '23', null, '/employees'),
    getItem('Timesheets', '24', null, '/timesheets'),
    getItem('Payroll Transactions', '25', null, '/payroll-transactions'),
    getItem('Taxes', '26', null, '/taxes'),
    getItem('Tax Forms', '27', null, '/tax-forms'),
    getItem('COVID-19', '28', null, '/covid-19')
  ]),
  getItem('Reports', '29', <AiFillSignal />, '/reports'),
  getItem('Wave Advisors', '30', <FiUsers />, '/wave-advisors'),
  getItem('Tax Filing', '31', <TbReportMoney />, '/tax-filing')
]

const App = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className='sidebar'>
      <Layout
        style={{
          minHeight: '100vh'
        }}
      >
        <Sider
          style={{
            backgroundColor: '#fff',
            position: 'fixed',
            height: '100%'
          }}
          className={`custom-sider ${collapsed ? 'collapsed' : ''}`}
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
        >
          <div className='demo-logo-vertical' />
          <Menu
            defaultSelectedKeys={['1']}
            mode='inline'
            style={{
              backgroundColor: '#fff',
              borderRight: '1px solid #d1e4f5',
              fontSize: '16px',
              width: '100%',
              height: '100%',
              color: '#001B66',
              marginTop: '7px'
            }}
          >
            {items.map(item =>
              item.children ? (
                <Menu.SubMenu
                  key={item.key}
                  title={
                    <span>
                      {item.icon}
                      {collapsed ? null : item.label}
                    </span>
                  }
                >
                  {item.children.map(child => (
                    <Menu.Item key={child.key}>
                      <Link to={child.to}>{child.label}</Link>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item key={item.key}>
                  <Link to={item.to}>
                    {item.icon}
                    {collapsed ? null : item.label}
                  </Link>
                </Menu.Item>
              )
            )}
          </Menu>
        </Sider>
      </Layout>
    </div>
  )
}

export default App
