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
import { getPopularCategories, getRecentJobs } from "../http";
import { useQuery } from "react-query";

const HomePage = () => {
  const { data: popularCategories } = useQuery(
    "popularCategories",
    getPopularCategories
  );

  const { data: recentJobs } = useQuery("recent-jobs", getRecentJobs);

  console.log(recentJobs);

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
          {popularCategories?.data?.map((category) => (
            <Col key={category.id} xs={24} sm={12} md={8} lg={6}>
              <Card>
                <Typography.Title level={4}>{category?._id}</Typography.Title>
                <Typography.Paragraph>
                  Available Jobs: {category?.count}
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
          {recentJobs?.data?.map((job) => (
            <JobCard key={job?._id} job={job} />
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
