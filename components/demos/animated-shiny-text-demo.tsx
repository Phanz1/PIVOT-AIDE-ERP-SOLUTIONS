import React from 'react';

const AnimatedShinyText = ({ children }) => {
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

export const AnimatedShinyTextDemo = () => {
  return (
    <AnimatedShinyText>
      <span className="text-4xl font-bold">
        Elevate Your Brand With
      </span>
      <span className="text-4xl font-bold text-blue-500">
        Pivot Aide Consulting
      </span>
    </AnimatedShinyText>
  );
};