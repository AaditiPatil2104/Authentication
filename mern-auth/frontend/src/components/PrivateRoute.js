import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div style={{ color: '#fff', textAlign: 'center', marginTop: '40vh' }}>Loading...</div>;

  return user ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
