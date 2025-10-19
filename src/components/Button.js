import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  className = '', 
  size = 'md', 
  variant = 'primary',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'btn-modern inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const variantClasses = {
    primary: 'btn-primary focus:ring-blue-500',
    secondary: 'btn-secondary focus:ring-orange-500',
    outline: 'border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-500',
    ghost: 'text-gray-700 bg-transparent hover:bg-gray-100 focus:ring-gray-500',
    default: 'btn-primary focus:ring-blue-500'
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };

