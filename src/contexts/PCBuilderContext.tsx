import { createContext, useState, ReactNode } from 'react';

export type PCComponent = {
  id: string;
  type: 'processor' | 'motherboard' | 'memory' | 'graphics' | 'storage' | 'powerSupply' | 'case' | 'cooling';
  name: string;
  brand: string;
  price: number;
  image: string;
  specifications: Record<string, string>;
  compatibleWith?: Record<string, string[]>;
  powerConsumption?: number;
  performanceScore?: number;
};

type PCBuilderContextType = {
  components: Record<string, PCComponent | null>;
  addComponent: (type: string, component: PCComponent) => void;
  removeComponent: (type: string) => void;
  clearComponents: () => void;
  getCompatibilityScore: () => number;
  getPowerConsumption: () => number;
  getPerformanceScore: () => number;
  getTotalPrice: () => number;
};

export const PCBuilderContext = createContext<PCBuilderContextType>({
  components: {
    processor: null,
    motherboard: null,
    memory: null,
    graphics: null,
    storage: null,
    powerSupply: null,
    case: null,
    cooling: null,
  },
  addComponent: () => {},
  removeComponent: () => {},
  clearComponents: () => {},
  getCompatibilityScore: () => 0,
  getPowerConsumption: () => 0,
  getPerformanceScore: () => 0,
  getTotalPrice: () => 0,
});

type PCBuilderProviderProps = {
  children: ReactNode;
};

export const PCBuilderProvider = ({ children }: PCBuilderProviderProps) => {
  const [components, setComponents] = useState<Record<string, PCComponent | null>>({
    processor: null,
    motherboard: null,
    memory: null,
    graphics: null,
    storage: null,
    powerSupply: null,
    case: null,
    cooling: null,
  });

  const addComponent = (type: string, component: PCComponent) => {
    setComponents((prev) => ({
      ...prev,
      [type]: component,
    }));
  };

  const removeComponent = (type: string) => {
    setComponents((prev) => ({
      ...prev,
      [type]: null,
    }));
  };

  const clearComponents = () => {
    setComponents({
      processor: null,
      motherboard: null,
      memory: null,
      graphics: null,
      storage: null,
      powerSupply: null,
      case: null,
      cooling: null,
    });
  };

  // Calculate compatibility score based on selected components
  const getCompatibilityScore = () => {
    const { processor, motherboard, memory, graphics, powerSupply } = components;
    
    // If no components are selected, return 0
    if (!processor && !motherboard && !memory && !graphics && !powerSupply) {
      return 0;
    }
    
    let score = 100; // Start with perfect score
    let checks = 0;
    
    // Check CPU and motherboard compatibility
    if (processor && motherboard) {
      checks++;
      // Example: Check if socket types match
      if (processor.specifications.socket !== motherboard.specifications.socket) {
        score -= 25; // Major incompatibility
      }
    }
    
    // Check memory and motherboard compatibility
    if (memory && motherboard) {
      checks++;
      // Example: Check if memory type is supported
      if (!motherboard.compatibleWith?.memoryType.includes(memory.specifications.type)) {
        score -= 20;
      }
    }
    
    // Check if power supply is sufficient
    if (powerSupply) {
      const totalPower = getPowerConsumption();
      const psuWattage = parseInt(powerSupply.specifications.wattage);
      
      if (totalPower > 0 && psuWattage > 0) {
        checks++;
        if (totalPower > psuWattage) {
          // Power supply is insufficient
          score -= 30;
        } else if (totalPower > psuWattage * 0.8) {
          // Power supply is cutting it close (above 80% utilization)
          score -= 10;
        }
      }
    }
    
    // If no compatibility checks were performed, return 0
    if (checks === 0) return 0;
    
    return Math.max(0, score);
  };

  // Calculate total power consumption
  const getPowerConsumption = () => {
    return Object.values(components).reduce((total, component) => {
      return total + (component?.powerConsumption || 0);
    }, 0);
  };

  // Calculate estimated performance score
  const getPerformanceScore = () => {
    const { processor, graphics, memory } = components;
    
    if (!processor && !graphics && !memory) return 0;
    
    let score = 0;
    let componentCount = 0;
    
    if (processor) {
      score += processor.performanceScore || 0;
      componentCount++;
    }
    
    if (graphics) {
      score += graphics.performanceScore || 0;
      componentCount++;
    }
    
    if (memory) {
      score += memory.performanceScore || 0;
      componentCount++;
    }
    
    return componentCount > 0 ? Math.round(score / componentCount) : 0;
  };

  // Calculate total price
  const getTotalPrice = () => {
    return Object.values(components).reduce((total, component) => {
      return total + (component?.price || 0);
    }, 0);
  };

  return (
    <PCBuilderContext.Provider
      value={{
        components,
        addComponent,
        removeComponent,
        clearComponents,
        getCompatibilityScore,
        getPowerConsumption,
        getPerformanceScore,
        getTotalPrice,
      }}
    >
      {children}
    </PCBuilderContext.Provider>
  );
};
