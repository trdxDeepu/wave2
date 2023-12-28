/* eslint-disable react/prop-types */

import Layout, { Content } from 'antd/es/layout/layout'
import Sidebar from '../components/SIDEBAR/Sidebar'
import Sider from 'antd/es/layout/Sider'
import Navbar from '../components/NAVBAR/Navbar'

const AppLayout = ({ content }) => {
  return (
    <Layout>
      <Navbar />
      <Layout hasSider
      style={{
        backgroundColor:"#fff"
      }}
      >
        <Sider
          style={{
            backgroundColor: '#fff',
           
          }}
        >
          <Sidebar />
        </Sider>
        <Content
          style={{
            backgroundColor: '#fff',
            marginTop: '1px',
            marginLeft: '60px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {content}
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout
