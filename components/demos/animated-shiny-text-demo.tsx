import React, { ReactNode } from 'react';

interface AnimatedShinyTextProps {
  children: ReactNode;
}

const AnimatedShinyText: React.FC<AnimatedShinyTextProps> = ({ children }) => {
  return (
    <div className="animated-shiny-text">
      {React.Children.map(children, (child, index) => (
        <span key={index} className="text-container">
          {child}
        </span>
      ))}
    </div>
  );
};

export const AnimatedShinyTextDemo: React.FC = () => {
  return (
    <div className="flex items-center justify-center ">
      <AnimatedShinyText>
        <span className="text-4xl font-bold">Your Trusted Odoo Partner for Tailored ERP Solutions</span><br/>
        <span className="text-4xl font-bold text-blue-500  text-center flex items-center justify-center ">Pivot Aide Consulting</span>
      </AnimatedShinyText>
    </div>
  );
};
