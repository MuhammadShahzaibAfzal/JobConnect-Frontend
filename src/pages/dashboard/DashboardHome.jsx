import { Card, Col, Row, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import StatisticsCard from "../../components/dashboards/StatisticsCard";
const { Title } = Typography;

const statsData = [
  {
    title: "Total Jobs",
    count: 230,
  },
  {
    title: "My Jobs",
    count: 20,
  },
  {
    title: "Saved Jobs",
    count: 2,
  },
  {
    title: "Active Jobs",
    count: 21,
  },
];

const DashboardHome = () => {
  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOfDay(getTimeOfDay());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, []);

  function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "morning";
    } else if (hour >= 12 && hour < 17) {
      return "afternoon";
    } else {
      return "evening";
    }
  }

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Title level={4}>Good {timeOfDay}! Shahzaib 😊</Title>
      <Row gutter={[10, 10]}>
        {statsData.map((stat) => (
          <StatisticsCard
            title={stat.title}
            count={stat.count}
            key={stat.title}
          />
        ))}
      </Row>

      <Row gutter={[10, 10]}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Card title="Graph 1">
            <p>Chart goes here</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Card title="Graph 1">
            <p>Chart goes here</p>
          </Card>
        </Col>
      </Row>
    </Space>
  );
};

export default DashboardHome;
