import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : children ;
};
{/* <Navigate to="/login" /> */}
export default ProtectedRoute;
