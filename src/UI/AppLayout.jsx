import Layout, { Content, Header } from 'antd/es/layout/layout'
import HeroSection from '../components/CONTENTS/HeroSection'
import Sidebar from '../components/SIDEBAR/Sidebar'
import Sider from 'antd/es/layout/Sider'
import Navbar from '../components/NAVBAR/Navbar'

const AppLayout = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <Layout hasSider>
          <Sider
            style={{
              backgroundColor: '#fff',
              height: '100%',
              width: '100%'
            }}
          >
            <Sidebar />
          </Sider>
          <Content
            style={{
              marginTop: '1px',
              marginLeft: '60px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <HeroSection />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default AppLayout
