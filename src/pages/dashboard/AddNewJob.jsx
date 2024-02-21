import { Button, Card, Col, Form, Input, Row, Select } from "antd";
const { TextArea } = Input;
const AddNewJob = () => {
  return (
    <div>
      <Form layout="vertical">
        <Card title="Job Details">
          <Row gutter={[10, 10]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Job title is required.",
                  },
                ]}
              >
                <Input placeholder="Enter job title" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Category"
                name="category"
                rules={[
                  {
                    required: true,
                    message: "Job Category is required.",
                  },
                ]}
              >
                <Select
                  options={[
                    {
                      label: "Web Developer",
                      value: "web-developer",
                    },
                    {
                      label: "Software Developer",
                      value: "software-developer",
                    },
                    {
                      label: "Androd Developer",
                      value: "android-developer",
                    },
                    {
                      label: "Graphic Designer",
                      value: "graphic-designer",
                    },
                  ]}
                  placeholder="Select category"
                />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Job Nature"
                name="job-nature"
                rules={[
                  {
                    required: true,
                    message: "Job Nature is required.",
                  },
                ]}
              >
                <Select
                  options={[
                    {
                      label: "Full Time",
                      value: "full-time",
                    },
                    {
                      label: "Part Time",
                      value: "part-time",
                    },
                    {
                      label: "Remote Job",
                      value: "romote-job",
                    },
                  ]}
                  placeholder="Select job nature"
                />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Vacancy"
                name="vacancy"
                rules={[
                  {
                    required: true,
                    message: "Vacancy is required.",
                  },
                ]}
              >
                <Input placeholder="Enter vacancy" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="salary"
                label="Salary"
                rules={[
                  {
                    required: true,
                    message: "Salary is required.",
                  },
                ]}
              >
                <Input placeholder="Enter job salary" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="location"
                label="Location"
                rules={[
                  {
                    required: true,
                    message: "Location is required.",
                  },
                ]}
              >
                <Input placeholder="Enter location" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Description is required",
                  },
                ]}
              >
                <TextArea />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Requirements" name="requirements">
                <TextArea />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Responsibilites" name="responsibilities">
                <TextArea />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card title="Company Details" style={{ marginTop: "13px" }}>
          <Row gutter={[10, 10]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Company name"
                name="company-name"
                rules={[
                  {
                    required: true,
                    message: "Company name is required.",
                  },
                ]}
              >
                <Input placeholder="Enter job title" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item label="Website" name="website">
                <Input placeholder="Enter company url" />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Button type="primary" style={{ margin: "15px 0" }}>
          Save Job
        </Button>
      </Form>
    </div>
  );
};

export default AddNewJob;
