import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './authProvider';
import { supabase } from './supabaseClient';

export function ProtectedRoute({ children, adminOnly = false }) {
  const { user, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(adminOnly);
  const location = useLocation();

  useEffect(() => {
    async function checkAdminStatus() {
      if (adminOnly && user) {
        try {
          const { data, error } = await supabase
            .from('Admin portal')
            .select('is_admin')
            .eq('admin_access', user.id)
            .single();
          
          if (error) {
            console.error('Error checking admin status:', error);
            setIsAdmin(false);
          } else {
            setIsAdmin(data?.is_admin || false);
          }
        } catch (error) {
          console.error('Error checking admin status:', error);
          setIsAdmin(false);
        }
      }
      setCheckingAdmin(false);
    }

    checkAdminStatus();
  }, [user, adminOnly]);

  if (loading || checkingAdmin) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
}