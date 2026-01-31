
import React from 'react';
import { Leaf } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-32 animate-in fade-in duration-500">
      <div className="relative w-24 h-24">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-emerald-100 rounded-full"></div>
        
        {/* Animated Inner Ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-emerald-600 rounded-full animate-spin"></div>
        
        {/* Middle Pulse Ring */}
        <div className="absolute inset-4 border-2 border-emerald-200 rounded-full animate-ping opacity-20"></div>
        
        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Leaf className="w-8 h-8 text-emerald-600 animate-pulse" />
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-emerald-900 font-bold text-lg tracking-tight">Gathering Fresh Produce</p>
        <div className="flex justify-center space-x-1 mt-2">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
