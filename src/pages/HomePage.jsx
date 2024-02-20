import {
  Button,
  Card,
  Carousel,
  Col,
  Input,
  Layout,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import JobCard from "../components/JobCard";

const popularCategories = [
  {
    id: 1,
    title: "Web Development",
    availableJobs: 43,
  },
  {
    id: 2,
    title: "Software Engineering",
    availableJobs: 32,
  },
  {
    id: 3,
    title: "Mobile Development",
    availableJobs: 27,
  },
  {
    id: 4,
    title: "Data Science",
    availableJobs: Math.floor(Math.random() * 100),
  },
  {
    id: 5,
    title: "UI/UX Design",
    availableJobs: Math.floor(Math.random() * 100),
  },
  {
    id: 6,
    title: "Digital Marketing",
    availableJobs: Math.floor(Math.random() * 100),
  },
  {
    id: 7,
    title: "Project Management",
    availableJobs: Math.floor(Math.random() * 100),
  },
  {
    id: 8,
    title: "Customer Support",
    availableJobs: Math.floor(Math.random() * 100),
  },
];

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

const HomePage = () => {
  return (
    <div>
      <Carousel autoplay autoplaySpeed={6000} infinite>
        {/* HERO SECTION START */}
        <Layout className="hero">
          <Space
            direction="vertical"
            size={20}
            className="left"
            style={{
              textAlign: "center",
            }}
          >
            <Typography.Title
              level={1}
              style={{ color: "white", lineHeight: "1.5" }}
              className="responsive-heading"
            >
              Connect. Discover. Excel. Your Gateway to Career Success.
            </Typography.Title>
            <Typography.Paragraph style={{ color: "white", fontSize: "16px" }}>
              Welcome to Job Portal, where opportunities meet ambition! Our
              platform is designed to empower job seekers like you to discover
              exciting career prospects and connect with leading employers
              worldwide.
            </Typography.Paragraph>
            <Button size="large">Explore Now</Button>
          </Space>
        </Layout>

        <Layout className="hero1">
          <Space
            direction="vertical"
            size={20}
            className="left"
            style={{
              textAlign: "center",
            }}
          >
            <Typography.Title
              level={1}
              style={{ color: "white", lineHeight: "1.5" }}
              className="responsive-heading"
            >
              Unlock Your Potential, Find Your Dream Job!
            </Typography.Title>
            <Typography.Paragraph style={{ color: "white", fontSize: "16px" }}>
              Welcome to Job Portal, where opportunities meet ambition! Our
              platform is designed to empower job seekers like you to discover
              exciting career prospects and connect with leading employers
              worldwide.
            </Typography.Paragraph>
            <Button size="large">Explore Now</Button>
          </Space>
        </Layout>

        <Layout className="hero">
          <Space
            direction="vertical"
            size={20}
            className="left"
            style={{
              textAlign: "center",
            }}
          >
            <Typography.Title
              level={1}
              style={{ color: "white", lineHeight: "1.5" }}
              className="responsive-heading"
            >
              Connecting Talent with Opportunity
            </Typography.Title>
            <Typography.Paragraph style={{ color: "white", fontSize: "16px" }}>
              Welcome to Job Portal, where opportunities meet ambition! Our
              platform is designed to empower job seekers like you to discover
              exciting career prospects and connect with leading employers
              worldwide.
            </Typography.Paragraph>
            <Button size="large">Explore Now</Button>
          </Space>
        </Layout>
      </Carousel>
      {/* HERO SECTION END */}

      {/* FILTER SECTION START */}
      <Card className="m-48" title="Search Jobs">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <Input placeholder="Keywords" name="keywords" allowClear />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Input placeholder="Locations" name="location" allowClear />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Select
              placeholder="Select Category"
              style={{ width: "100%" }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Button type="primary" block>
              SEARCH
            </Button>
          </Col>
        </Row>
      </Card>
      {/* FILTER SECTION END */}

      {/* POPULAR CATEGORY SECTION */}

      <section className="px-48" style={{ margin: "40px 0" }}>
        <Typography.Title level={2}>POPULAR CATEGORIES</Typography.Title>
        <Row gutter={[16, 16]} style={{ marginTop: "36px" }}>
          {popularCategories.map((category) => (
            <Col key={category.id} xs={24} sm={12} md={8} lg={6}>
              <Card>
                <Typography.Title level={4}>{category.title}</Typography.Title>
                <Typography.Paragraph>
                  Available Jobs: {category.availableJobs}
                </Typography.Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* END OF POPULAR CATEGORY SECTION */}

      {/* POPULAR CATEGORY SECTION */}

      <section className="px-48" style={{ margin: "40px 0" }}>
        <Typography.Title level={2}>LATEST JOBS</Typography.Title>
        <Row gutter={[16, 16]} style={{ marginTop: "36px" }}>
          {dummyJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Row>
        <div className="py-48 text-center">
          <Button type="primary" size="large">
            More Jobs
          </Button>
        </div>
      </section>

      {/* END OF POPULAR CATEGORY SECTION */}
    </div>
  );
};

export default HomePage;
