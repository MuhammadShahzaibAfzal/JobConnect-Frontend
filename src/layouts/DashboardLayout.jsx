import {
  DashboardOutlined,
  LockOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  ProfileOutlined,
  SaveOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const items = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <OrderedListOutlined />,
    label: "My Jobs",
  },
  {
    key: "8",
    icon: <UploadOutlined />,
    label: "Post a job",
  },
  {
    key: "3",
    icon: <OrderedListOutlined />,
    label: "Jobs Applied",
  },
  {
    key: "7",
    icon: <SaveOutlined />,
    label: "Saved Jobs",
  },
  {
    key: "4",
    icon: <ProfileOutlined />,
    label: "Profile",
  },
  {
    key: "5",
    icon: <LockOutlined />,
    label: "Change Password",
  },

  {
    key: "6",
    icon: <LogoutOutlined />,
    label: "Logout",
  },
];

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header
        style={{
          padding: "0 14px",
          background: colorBgContainer,
        }}
      >
        <img src={logo} alt="Logo" style={{ width: "170px" }} />
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          breakpoint="md"
          onCollapse={(value) => setCollapsed(value)}
          theme="light"
        >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
            style={{ marginTop: "3px" }}
          />
        </Sider>
        <Content
          style={{
            margin: "24px 16px",
            minHeight: 280,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
