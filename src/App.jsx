import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Companies from './pages/Companies';
import Eligibility from './pages/Eligibility';
import Applications from './pages/Applications';
import Analytics from './pages/Analytics';
import Notifications from './pages/Notifications';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Landing from './pages/Landing';


const Layout = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  // Protect routes
  const publicRoutes = ['/login', '/'];
  if (!user && !publicRoutes.includes(location.pathname)) {
    return <Navigate to="/" />;
  }

  const isPublicPage = publicRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {!isPublicPage && <Navbar />}
      <main className={`${!isPublicPage ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8' : ''}`}>
        {children}
      </main>
    </div>
  );
};

// Route guard for Admin
const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  if (user?.role !== 'admin') return <Navigate to="/" />;
  return children;
};

// Route guard for Student
const StudentRoute = ({ children }) => {
  const { user } = useAuth();
  if (user?.role === 'admin') return <Navigate to="/admin" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Landing />} />

              {/* Admin Routes */}
              <Route path="/admin" element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } />

              {/* Shared Routes */}
              <Route path="/companies" element={<Companies />} />
              <Route path="/notifications" element={<Notifications />} />

              {/* Student Routes */}
              <Route path="/dashboard" element={
                <StudentRoute>
                  <Dashboard />
                </StudentRoute>
              } />
              <Route path="/eligibility" element={
                <StudentRoute>
                  <Eligibility />
                </StudentRoute>
              } />
              <Route path="/applications" element={
                <StudentRoute>
                  <Applications />
                </StudentRoute>
              } />
              <Route path="/analytics" element={
                <StudentRoute>
                  <Analytics />
                </StudentRoute>
              } />
            </Routes>
          </Layout>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
