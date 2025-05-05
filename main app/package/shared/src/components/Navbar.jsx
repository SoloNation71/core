import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/authProvider';

export function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };
  
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold">Solo-Nation</span>
            </Link>
            
            {user && (
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  to="/view-room" 
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  View Room
                </Link>
                <Link 
                  to="/onboarding" 
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Onboarding
                </Link>
                <Link 
                  to="/nexus" 
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Nexus
                </Link>
              </div>
            )}
          </div>
          
          <div>
            {user ? (
              <button
                onClick={handleSignOut}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Sign Out
              </button>
            ) : (
              <div className="flex space-x-4">
                <Link 
                  to="/login" 
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}