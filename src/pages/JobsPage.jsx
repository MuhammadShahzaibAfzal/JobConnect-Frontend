import {
  Typography,
  Layout,
  Input,
  Form,
  Select,
  Checkbox,
  Space,
  Card,
  Tag,
  Button,
  Pagination,
  Flex,
  Drawer,
} from "antd";
import {
  EnvironmentOutlined,
  CalendarOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
const { Sider, Content } = Layout;
const { Text } = Typography;
const dummyJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "ABC Tech Solutions",
    location: "New York, NY",
    datePosted: "2024-02-20",
    salary: "$80,000 - $100,000 per year",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet arcu sit amet euismod consequat. Nulla facilisi.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    coverImage: "https://via.placeholder.com/150", // URL of the cover image
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "XYZ Analytics",
    location: "San Francisco, CA",
    datePosted: "2024-02-19",
    salary: "$70,000 - $90,000 per year",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tags: ["Data Analysis", "SQL", "Python", "Statistics"],
    coverImage: "https://via.placeholder.com/150", // URL of the cover image
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Tech Innovations Inc.",
    location: "Seattle, WA",
    datePosted: "2024-02-18",
    salary: "$90,000 - $110,000 per year",
    description:
      "Fusce commodo mi ut ex ultrices bibendum. Maecenas varius massa a turpis sagittis, vitae posuere dui tempus.",
    tags: ["Java", "Spring", "Hibernate", "MySQL"],
    coverImage: "https://via.placeholder.com/150", // URL of the cover image
  },
  {
    id: 4,
    title: "Marketing Manager",
    company: "Digital Marketing Solutions",
    location: "Chicago, IL",
    datePosted: "2024-02-17",
    salary: "$75,000 - $95,000 per year",
    description:
      "Aenean euismod leo ut magna fringilla, vel molestie quam euismod. Integer id mi nec ligula consequat vehicula eget vel risus.",
    tags: ["Digital Marketing", "SEO", "SEM", "Social Media"],
    coverImage: "https://via.placeholder.com/150", // URL of the cover image
  },
  {
    id: 5,
    title: "UX/UI Designer",
    company: "Creative Design Studio",
    location: "Los Angeles, CA",
    datePosted: "2024-02-16",
    salary: "$80,000 - $100,000 per year",
    description:
      "Sed et ipsum et justo finibus accumsan. Nulla facilisi. Nam et purus a nisi accumsan condimentum vel eget magna.",
    tags: ["UI Design", "UX Design", "Adobe XD", "Figma"],
    coverImage: "https://via.placeholder.com/150", // URL of the cover image
  },
  {
    id: 6,
    title: "Backend Developer",
    company: "Tech Solutions LLC",
    location: "Austin, TX",
    datePosted: "2024-02-15",
    salary: "$85,000 - $105,000 per year",
    description:
      "Proin vitae mi vitae elit congue dignissim. Sed at fermentum magna. Nulla at mauris ac justo dignissim consequat.",
    tags: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    coverImage: "https://via.placeholder.com/150", // URL of the cover image
  },
  {
    id: 7,
    title: "Product Manager",
    company: "InnovateTech Inc.",
    location: "Boston, MA",
    datePosted: "2024-02-14",
    salary: "$95,000 - $115,000 per year",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris suscipit fermentum sem, eget ultricies lectus auctor id.",
    tags: ["Product Management", "Agile", "Scrum", "Product Roadmap"],
    coverImage: "https://via.placeholder.com/150", // URL of the cover image
  },
  {
    id: 8,
    title: "Network Engineer",
    company: "Networking Solutions Ltd.",
    location: "Dallas, TX",
    datePosted: "2024-02-13",
    salary: "$90,000 - $110,000 per year",
    description:
      "Integer eget sodales dolor. Sed commodo justo in urna ultrices dignissim. Fusce vestibulum leo nec eros consequat fermentum.",
    tags: ["Networking", "Cisco", "CCNA", "LAN/WAN"],
    coverImage: "https://via.placeholder.com/150", // URL of the cover image
  },
  // Add more job listings similarly
];

const JobsPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-48 my-48">
      <Flex
        justify="space-between"
        align="center"
        style={{ marginBottom: "10px" }}
      >
        <Typography.Title level={3}>FIND JOBS</Typography.Title>
        <Button
          type="primary"
          className="filterBtn"
          onClick={() => {
            setOpen(true);
          }}
        >
          Filters
        </Button>
      </Flex>
      <Layout>
        <Sider
          width="25%"
          theme="light"
          style={{ padding: "15px", borderRadius: "10px", marginRight: "20px" }}
          className="jobsSidebar"
        >
          <Form style={{ marginTop: "20px" }}>
            <Form.Item>
              <Typography.Text>Keywords</Typography.Text>
              <Input
                placeholder="Search by keywords"
                style={{ marginTop: "10px" }}
              />
            </Form.Item>

            <Form.Item>
              <Typography.Text>Location</Typography.Text>
              <Input
                placeholder="Search by location"
                style={{ marginTop: "10px" }}
              />
            </Form.Item>

            <Form.Item>
              <Typography.Text>Category</Typography.Text>
              <Select
                placeholder="Select Category"
                style={{ width: "100%", marginTop: "10px" }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </Form.Item>

            <Form.Item>
              <Typography.Paragraph>Job Type</Typography.Paragraph>
              <Space direction="vertical">
                <Checkbox>Full Time</Checkbox>
                <Checkbox>Part Time</Checkbox>
                <Checkbox>Freelance</Checkbox>
                <Checkbox>Remote</Checkbox>
              </Space>
            </Form.Item>

            <Form.Item>
              <Typography.Text>Experience</Typography.Text>
              <Select
                placeholder="Select Experience"
                style={{ width: "100%", marginTop: "10px" }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </Form.Item>
          </Form>
        </Sider>
        <Content>
          {dummyJobs.map((job) => (
            <Card
              key={job.id}
              title={job.title}
              style={{ marginBottom: "20px" }}
              actions={[
                <Button key={job.id} type="primary">
                  Apply Now
                </Button>,
                <Link to="/jobs/111" key={job.id}>
                  <Button type="primary">Read More</Button>
                </Link>,
                <Button key={job.id} type="primary">
                  Save
                </Button>,
              ]}
            >
              <Text strong>{job.company}</Text>
              <Space
                direction="vertical"
                style={{ width: "100%" }}
                size="small"
              >
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
          ))}
          <div className="text-center " style={{ marginTop: "40px" }}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </Content>
      </Layout>
      <Drawer
        open={open}
        title="FILTER JOBS"
        onClose={() => {
          setOpen(false);
        }}
      >
        <Form style={{ marginTop: "20px" }}>
          <Form.Item>
            <Typography.Text>Keywords</Typography.Text>
            <Input
              placeholder="Search by keywords"
              style={{ marginTop: "10px" }}
            />
          </Form.Item>

          <Form.Item>
            <Typography.Text>Location</Typography.Text>
            <Input
              placeholder="Search by location"
              style={{ marginTop: "10px" }}
            />
          </Form.Item>

          <Form.Item>
            <Typography.Text>Category</Typography.Text>
            <Select
              placeholder="Select Category"
              style={{ width: "100%", marginTop: "10px" }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Form.Item>

          <Form.Item>
            <Typography.Paragraph>Job Type</Typography.Paragraph>
            <Space direction="vertical">
              <Checkbox>Full Time</Checkbox>
              <Checkbox>Part Time</Checkbox>
              <Checkbox>Freelance</Checkbox>
              <Checkbox>Remote</Checkbox>
            </Space>
          </Form.Item>

          <Form.Item>
            <Typography.Text>Experience</Typography.Text>
            <Select
              placeholder="Select Experience"
              style={{ width: "100%", marginTop: "10px" }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default JobsPage;
