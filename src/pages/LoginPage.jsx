import {
  Button,
  Card,
  Checkbox,
  Flex,
  Form,
  Input,
  Space,
  Typography,
} from "antd";
import { LockFilled, LockOutlined, MailOutlined } from "@ant-design/icons";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const LoginPage = () => {
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
              Login
            </Space>
          }
          style={{ width: 350, maxWidth: "90%" }}
        >
          <Form>
            <Form.Item>
              <Input
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
            <Flex justify="space-between" align="baseline">
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="" id="login-form-forgot">
                Forgot password
              </a>
            </Flex>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Log in
              </Button>
            </Form.Item>
            <Typography.Text>
              Do not have an account ?<Link to="/register"> Register Here</Link>
            </Typography.Text>
          </Form>
        </Card>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
