import React from 'react';

interface CustomHamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

const CustomHamburgerMenu: React.FC<CustomHamburgerMenuProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center justify-center h-10 w-10 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
      aria-label="Toggle menu"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Background glow effect */}
        <div 
          className={`absolute inset-0 rounded-full bg-primary/20 transition-all duration-500 ${
            isOpen ? 'scale-150 opacity-100' : 'scale-0 opacity-0'
          }`}
        />
        
        {/* Top bar */}
        <div
          className={`absolute w-5 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ease-out ${
            isOpen 
              ? 'rotate-45 translate-y-0 scale-110 shadow-[0_0_8px_theme(colors.primary)]' 
              : 'rotate-0 -translate-y-1.5 scale-100 group-hover:scale-110 group-hover:shadow-[0_0_4px_theme(colors.primary/50)]'
          }`}
        />
        
        {/* Middle bar */}
        <div
          className={`absolute w-4 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-300 ease-out delay-75 ${
            isOpen 
              ? 'opacity-0 scale-0 rotate-180' 
              : 'opacity-100 scale-100 rotate-0 group-hover:scale-110 group-hover:w-5'
          }`}
        />
        
        {/* Bottom bar */}
        <div
          className={`absolute w-5 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ease-out delay-150 ${
            isOpen 
              ? '-rotate-45 translate-y-0 scale-110 shadow-[0_0_8px_theme(colors.accent)]' 
              : 'rotate-0 translate-y-1.5 scale-100 group-hover:scale-110 group-hover:shadow-[0_0_4px_theme(colors.accent/50)]'
          }`}
        />
        
        {/* Animated corner dots */}
        <div
          className={`absolute w-1 h-1 bg-primary rounded-full transition-all duration-400 ease-out ${
            isOpen 
              ? 'translate-x-3 -translate-y-3 scale-150 opacity-100 shadow-[0_0_6px_theme(colors.primary)]' 
              : 'translate-x-2 -translate-y-2 scale-0 opacity-0'
          }`}
        />
        <div
          className={`absolute w-1 h-1 bg-accent rounded-full transition-all duration-400 ease-out delay-100 ${
            isOpen 
              ? '-translate-x-3 -translate-y-3 scale-150 opacity-100 shadow-[0_0_6px_theme(colors.accent)]' 
              : '-translate-x-2 -translate-y-2 scale-0 opacity-0'
          }`}
        />
        <div
          className={`absolute w-1 h-1 bg-primary rounded-full transition-all duration-400 ease-out delay-200 ${
            isOpen 
              ? 'translate-x-3 translate-y-3 scale-150 opacity-100 shadow-[0_0_6px_theme(colors.primary)]' 
              : 'translate-x-2 translate-y-2 scale-0 opacity-0'
          }`}
        />
        <div
          className={`absolute w-1 h-1 bg-accent rounded-full transition-all duration-400 ease-out delay-300 ${
            isOpen 
              ? '-translate-x-3 translate-y-3 scale-150 opacity-100 shadow-[0_0_6px_theme(colors.accent)]' 
              : '-translate-x-2 translate-y-2 scale-0 opacity-0'
          }`}
        />
        
        {/* Center pulse dot when active */}
        <div
          className={`absolute w-1.5 h-1.5 bg-gradient-to-br from-primary to-accent rounded-full transition-all duration-500 ${
            isOpen 
              ? 'scale-100 opacity-100 shadow-[0_0_12px_theme(colors.primary)] animate-pulse' 
              : 'scale-0 opacity-0'
          }`}
        />
        
        {/* Rotating border ring */}
        <div
          className={`absolute inset-0 border border-primary/30 rounded-full transition-all duration-700 ${
            isOpen 
              ? 'scale-125 opacity-100 rotate-180' 
              : 'scale-75 opacity-0 rotate-0'
          }`}
        />
      </div>
    </button>
  );
};

export default CustomHamburgerMenu;
