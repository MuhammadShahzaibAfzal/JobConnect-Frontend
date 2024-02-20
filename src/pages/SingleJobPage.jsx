import {
  CalendarOutlined,
  DollarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Button, Card, Space, Tag, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
const { Text, Paragraph } = Typography;
const SingleJobPage = () => {
  const navigate = useNavigate();
  return (
    <div className="my-48 px-48">
      <Card
        title="Frontend Developer"
        actions={[
          <Button
            key={1}
            type="primary"
            onClick={() => {
              navigate("/jobs");
            }}
          >
            Go Back
          </Button>,
          <Link to="/jobs/111" key={2}>
            <Button type="primary">Apply Now</Button>
          </Link>,
          <Button key={3} type="primary">
            Save
          </Button>,
        ]}
      >
        <Text strong>Microsoft</Text>
        <Space direction="vertical" style={{ width: "100%" }} size="small">
          <Text>
            <EnvironmentOutlined /> New Yourk
          </Text>
          <Text>
            <CalendarOutlined /> 23 July 2024
          </Text>
          <Text>
            <DollarOutlined /> 20,000
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            arcu sit amet euismod consequat. Nulla facilisi.
          </Text>
          <Text strong>Skills Required</Text>
          <Space>
            <Tag>Web Development</Tag>
            <Tag>Node JS</Tag>
            <Tag>Express JS</Tag>
            <Tag>MongoDB</Tag>
          </Space>

          <Text strong>Job Requirements</Text>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, provident omnis! Sunt deleniti quae, consequuntur at
            optio necessitatibus possimus maxime fugiat? Fuga asperiores neque
            accusamus itaque nostrum omnis non laboriosam. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Magnam inventore quam ducimus
            ipsum facilis recusandae natus impedit totam dolorem a, soluta
            consequuntur nemo, cupiditate corporis, enim ab excepturi amet
            alias!
          </Paragraph>

          <Text strong>Job Responsibilities</Text>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, provident omnis! Sunt deleniti quae, consequuntur at
            optio necessitatibus possimus maxime fugiat? Fuga asperiores neque
            accusamus itaque nostrum omnis non laboriosam. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Magnam inventore quam ducimus
            ipsum facilis recusandae natus impedit totam dolorem a, soluta
            consequuntur nemo, cupiditate corporis, enim ab excepturi amet
            alias!
          </Paragraph>
        </Space>
      </Card>
    </div>
  );
};

export default SingleJobPage;
// {
//     id: 1,
//     title: "Frontend Developer",
//     company: "ABC Tech Solutions",
//     location: "New York, NY",
//     datePosted: "2024-02-20",
//     salary: "$80,000 - $100,000 per year",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet arcu sit amet euismod consequat. Nulla facilisi.",
//     tags: ["React", "JavaScript", "HTML", "CSS"],
//     coverImage: "https://via.placeholder.com/150", // URL of the cover image
//   },
