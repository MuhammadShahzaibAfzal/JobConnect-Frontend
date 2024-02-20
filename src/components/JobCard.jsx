/* eslint-disable react/prop-types */
import { Card, Typography, Space, Tag, Col } from "antd";
import {
  EnvironmentOutlined,
  CalendarOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

// eslint-disable-next-line react/prop-types
const JobCard = ({ job }) => {
  return (
    <Col
      xs={24}
      sm={12}
      md={8}
      lg={6}
      style={{ marginBottom: "20px", display: "flex" }}
    >
      <div style={{ flex: 1 }}>
        <Card
          style={{
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            height: "100%",
          }}
        >
          <Title level={4}>{job.title}</Title>
          <Text strong>{job.company}</Text>
          <Space direction="vertical" style={{ width: "100%" }} size="small">
            <Text>
              <EnvironmentOutlined /> {job.location}
            </Text>
            <Text>
              <CalendarOutlined /> {job.datePosted}
            </Text>
            <Text>
              <DollarOutlined /> {job.salary}
            </Text>
            <Text>{job.description}</Text>
          </Space>
          <div style={{ marginTop: "6px" }}>
            {job.tags.map((tag) => (
              <Tag key={tag} style={{ marginTop: "10px" }}>
                {tag}
              </Tag>
            ))}
          </div>
        </Card>
      </div>
    </Col>
  );
};

export default JobCard;
