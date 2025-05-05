import React from 'react';

export function LoadingSpinner({ size = 'medium', className = '' }) {
  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };
  
  return (
    <div className="flex justify-center items-center">
      <div 
        className={`animate-spin rounded-full border-4 border-gray-200 border-t-blue-600 ${sizes[size]} ${className}`} 
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}