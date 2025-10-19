import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose: () => void;
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const ToastContainer = styled.div<{ type: string }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${({ type }) => 
    type === 'success' ? '#4CAF50' : 
    type === 'error' ? '#f44336' : 
    '#2196F3'};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  animation: ${slideIn} 0.3s ease-out;
  max-width: 300px;
  word-wrap: break-word;

  &.closing {
    animation: ${slideOut} 0.3s ease-out;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  float: right;
  margin-left: 10px;
  padding: 0;
  line-height: 1;

  &:hover {
    opacity: 0.8;
  }
`;

const Toast: React.FC<ToastProps> = ({ message, type = 'info', duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <ToastContainer type={type}>
      <CloseButton onClick={onClose}>×</CloseButton>
      {message}
    </ToastContainer>
  );
};

export default Toast;

