import { Button, Card, Flex, Form, Input, Space, Typography } from "antd";
import {
  LockFilled,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <Flex justify="center" align="center" style={{ marginTop: "40px" }}>
      <Flex vertical align="center" gap={20}>
        <img src={logo} alt="logo" style={{ width: "200px" }} />
        <Card
          bordered={false}
          title={
            <Space
              style={{ width: "100%", fontSize: 16, justifyContent: "center" }}
            >
              <LockFilled />
              Create an Account
            </Space>
          }
          style={{ width: 350, maxWidth: "90%" }}
        >
          <Form>
            <Form.Item>
              <Input
                name="firstName"
                placeholder="Enter first name"
                prefix={<UserOutlined />}
                allowClear
              />
            </Form.Item>
            <Form.Item>
              <Input
                name="lastName"
                placeholder="Enter last name"
                prefix={<UserOutlined />}
                allowClear
              />
            </Form.Item>
            <Form.Item>
              <Input
                name="email"
                placeholder="Enter email"
                prefix={<MailOutlined />}
                allowClear
              />
            </Form.Item>
            <Form.Item>
              <Input.Password
                placeholder="Enter password"
                prefix={<LockOutlined />}
                allowClear
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Register
              </Button>
            </Form.Item>
            <Typography.Text>
              Already have an account ?<Link to="/login"> Login Here</Link>
            </Typography.Text>
          </Form>
        </Card>
      </Flex>
    </Flex>
  );
};

export default RegisterPage;
