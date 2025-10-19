import { useContext } from 'react';
import { PCBuilderContext } from '../contexts/PCBuilderContext';

export const usePCBuilder = () => {
  const context = useContext(PCBuilderContext);
  if (context === undefined) {
    throw new Error('usePCBuilder must be used within a PCBuilderProvider');
  }
  return context;
};
