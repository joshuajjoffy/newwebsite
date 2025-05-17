import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <h2 className="section-heading">{children}</h2>
  );
};

export default SectionHeading;