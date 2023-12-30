import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/pages/Dashboard';
import SearchReport from './components/pages/SearchReport';
import withAuth from './HOC/withAuth';

const AuthenticatedDashboard = withAuth(Dashboard);
const AuthenticatedReport = withAuth(SearchReport);

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<AuthenticatedDashboard />} />
          <Route path="/search-report" element={<AuthenticatedReport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
