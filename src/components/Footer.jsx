/* eslint-disable react/no-unescaped-entities */
import { Typography, theme } from "antd";
import { Footer } from "antd/es/layout/layout";

const MyFooter = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Footer
      style={{
        textAlign: "center",
        background: colorBgContainer,
        marginTop: "20px",
      }}
    >
      <div>
        <Typography.Paragraph>
          © 2024 Shahzaib's Job Portal
        </Typography.Paragraph>
        <Typography.Paragraph>
          Designed and developed by{" "}
          <Typography.Link href="https://github.com/MuhammadShahzaibAfzal">
            Muhammad Shahzaib Afzal
          </Typography.Link>
        </Typography.Paragraph>
      </div>
    </Footer>
  );
};

export default MyFooter;
