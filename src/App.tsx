import { ConfigProvider, theme as antTheme } from "antd";
import AppRoutes from "./routes";

export const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: [antTheme.darkAlgorithm],
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  );
};
