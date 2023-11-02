import {  Layout } from 'antd'
import Navbar from '../components/Navbar'

const {  Content, Footer, Sider } = Layout
const AppLayout = () => {
  return (
    <Layout>
    <Navbar/>
    <Layout style={{
        margin:"40px"
    }}>
      <Sider>left sidebar</Sider>
      <Content>main content</Content>
      
    </Layout>
    <Footer>footer</Footer>
  </Layout>
  )
}

export default AppLayout
