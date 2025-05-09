import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '../components/Layout/AppLayout';
import Home from '../pages/Home';
import Data from '../pages/Data';
import Dividends from '../pages/Dividends';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute'; 

const Router = () => {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="data" element={<Data />} />
          <Route path="dividends" element={<Dividends />} />

          {/* Enable when needed:
          <Route
            path="protected"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ProtectedPage />
              </ProtectedRoute>
            }
          />
          */}

          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
