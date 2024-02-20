import { Outlet } from "react-router-dom";
import MyFooter from "../components/Footer";
import { Layout } from "antd";
import Navbar from "../components/Navbar";
const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Navbar />
      <Content
        style={{
          padding: "0",
          //   background: colorBgContainer,
        }}
      >
        <Outlet />
      </Content>
      <MyFooter />
    </Layout>
  );
};

export default MainLayout;
