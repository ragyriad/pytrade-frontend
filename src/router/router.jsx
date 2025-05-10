import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageLayout from "../components/Layout/PageLayout";
import HomePage from "../components/Pages/HomePage";
import OverviewPage from "../components/Pages/OverviewPage";
import ActivityPage from "../components/Pages/ActivityPage";
import UpdatePage from "../components/Pages/UpdatePage";
import ProtectedRoute from "./protectedRoute";

const isAuthenticated = true; // Placeholder, update with real auth logic

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <PageLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<><HomePage /><OverviewPage /></>} />
          <Route path="activity" element={<><HomePage /><ActivityPage /></>} />
          <Route path="refresh" element={<><HomePage /><UpdatePage /></>} />
          <Route path="positions" element={<><HomePage />Positions</>} />
          <Route path="*" element={<Navigate to="/overview" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
