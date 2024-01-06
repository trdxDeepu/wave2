/* eslint-disable react/prop-types */

import Layout, { Content } from 'antd/es/layout/layout'
import Sidebar from '../components/SIDEBAR/Sidebar'

import Navbar from '../components/NAVBAR/Navbar'

const AppLayout = ({ content }) => {
  return (
    <Layout>
      <Navbar />
      <Layout
        hasSider
        style={{
          backgroundColor: '#fff',
          width: '100%'
        }}
      >
        <Sidebar />

        <Content
          style={{
            backgroundColor: '#fff',
            marginTop: '1px',
            marginLeft: '50px',
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
