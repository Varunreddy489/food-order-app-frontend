import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout showHero>
              <HomePage />
            </Layout>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route path="/user-profile" element={<AuthCallbackPage />} />
          <Route
            path="/auth-callback"
            element={
              <Layout>
                <UserProfilePage />{" "}
              </Layout>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
