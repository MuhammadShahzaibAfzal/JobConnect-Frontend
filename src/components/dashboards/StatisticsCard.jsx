import { UsergroupAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Flex, Space, Typography } from "antd";
const { Text, Title } = Typography;

const StatisticsCard = ({ icon, title, count }) => {
  return (
    <Col xs={24} sm={24} md={12} lg={6}>
      <Card>
        <Space>
          <Avatar
            icon={<UsergroupAddOutlined />}
            style={{
              backgroundColor: "#fde3cf",
              color: "#f56a00",
            }}
          />
          <Text strong>{title}</Text>
        </Space>
        <Flex justify="space-between" align="center">
          <Title level={2} style={{ marginTop: "8px" }}>
            {count}
          </Title>
          <Button type="link">View</Button>
        </Flex>
      </Card>
    </Col>
  );
};

export default StatisticsCard;
