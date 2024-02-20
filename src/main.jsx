import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        token: {
          colorBgLayout: "#f5f5f5",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>
);
