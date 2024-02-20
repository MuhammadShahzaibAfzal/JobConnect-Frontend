import { Button, Flex, Layout, Menu, theme, Drawer, Typography } from "antd";
import logo from "../assets/logo.png";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const { Header, Footer, Content } = Layout;

const items = [
  {
    key: "/home",
    label: <Link to="/">Home</Link>,
  },
  {
    key: "/jobs",
    label: <Link to="/jobs">Find Jobs</Link>,
  },
];
const mobileItems = [
  {
    key: "/home",
    label: <Link to="/">Home</Link>,
  },
  {
    key: "/jobs",
    label: <Link to="/jobs">Find Jobs</Link>,
  },
  {
    key: "/login",
    label: <Link to="/login">Login</Link>,
  },
  {
    key: "/post",
    label: "Post a job",
  },
];

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      {/* START OF HEADER */}
      <Header style={{ background: colorBgContainer }}>
        {/* WRAPPER CONTAINER */}
        <Flex justify="space-between" align="center">
          {/* LEFT CONTAINER */}
          <Flex gap={30} style={{ width: "100%" }}>
            <Link to="/">
              <img src={logo} alt="" className="logo" />
            </Link>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={items}
              style={{ flex: 1, minWidth: 0 }}
              className="navMenue"
            />
          </Flex>
          {/* RIGHT CONTAINER */}
          <Flex gap={20} className="navButtonContainer">
            <Link to="/login">
              <Button type="primary">Login</Button>
            </Link>
            <Link to="/post-job">
              <Button>Post a job</Button>
            </Link>
          </Flex>
          <MenuOutlined
            className="hamburgerIcon"
            onClick={() => {
              setOpen(true);
            }}
            style={{ fontSize: "18px", cursor: "pointer" }}
          />
        </Flex>
      </Header>
      {/* DRAWER FOR MOBILE MENUE */}
      <Drawer
        title={<img src={logo} alt="" className="logo" />}
        onClose={() => {
          setOpen(false);
        }}
        open={open}
        width={"100%"}
      >
        <Menu items={mobileItems} />
      </Drawer>
      {/* END OF HEADER */}
      <Content
        style={{
          padding: "0",
          //   background: colorBgContainer,
        }}
      >
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center", background: colorBgContainer }}>
        <div>
          <Typography.Paragraph>
            © 2024 Shahzaib's Job Portal
          </Typography.Paragraph>
          <Typography.Paragraph>
            Designed and developed by{" "}
            <Typography.Link href="https://github.com/MuhammadShahzaibAfzal">
              Muhammad Shahzaib Afzal
            </Typography.Link>
          </Typography.Paragraph>
        </div>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
