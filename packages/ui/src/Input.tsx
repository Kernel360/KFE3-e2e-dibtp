import React from 'react';

const Input = ({ className, title }: { className: string; title: string }) => {
  return <div className={className}>{title}</div>;
};

export default Input;
