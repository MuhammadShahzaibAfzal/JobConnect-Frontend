import { Button, Card, Table, Tag, Typography } from "antd";
import { Link } from "react-router-dom";

const dataSource = [
  {
    key: "1",
    title: "Django Web Developer Required",
    createdAt: "2024-07-23",
    applicants: 23,
    status: "Active",
  },
  {
    key: "2",
    title: "React Native Developer",
    createdAt: "2024-07-20",
    applicants: 15,
    status: "Active",
  },
  {
    key: "3",
    title: "Full Stack JavaScript Developer",
    createdAt: "2024-07-18",
    applicants: 30,
    status: "Active",
  },
  {
    key: "4",
    title: "UI/UX Designer",
    createdAt: "2024-07-15",
    applicants: 12,
    status: "Active",
  },
  {
    key: "5",
    title: "Cloud Infrastructure Engineer",
    createdAt: "2024-07-10",
    applicants: 20,
    status: "Active",
  },
  {
    key: "6",
    title: "Cybersecurity Analyst",
    createdAt: "2024-07-05",
    applicants: 18,
    status: "Expired",
  },
  {
    key: "7",
    title: "Data Scientist",
    createdAt: "2024-07-03",
    applicants: 25,
    status: "Active",
  },
  {
    key: "8",
    title: "Product Manager",
    createdAt: "2024-06-30",
    applicants: 22,
    status: "Active",
  },
  {
    key: "9",
    title: "SEO Specialist",
    createdAt: "2024-06-25",
    applicants: 10,
    status: "Expired",
  },
];

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Job Created",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Applicants",
    dataIndex: "applicants",
    key: "applicants",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) =>
      status == "Active" ? (
        <Tag color="green">{status}</Tag>
      ) : (
        <Tag color="red">{status}</Tag>
      ),
  },
];

const MyJobs = () => {
  return (
    <Card
      title="My jobs"
      extra={
        <Link to="/dashboard/new-job">
          <Button type="primary">Post a job</Button>
        </Link>
      }
    >
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  );
};

export default MyJobs;
