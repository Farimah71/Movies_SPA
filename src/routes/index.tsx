import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SuspenseLoader } from "../components/suspense-loader";

// Import elements lazily::begin
const MainLayout = lazy(() => import("../layout/main_layout"));
const ErrorLayout = lazy(() => import("../layout/error_layout"));
const Home = lazy(() => import("../pages/home"));
const NotFound = lazy(() => import("../pages/not-found"));
// Import elements lazily::end

const AppRoutes = () => {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<ErrorLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
