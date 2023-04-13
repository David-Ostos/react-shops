import React, { useState } from 'react';

const Button = () => {
  const [name, setName] = useState('Hello word');
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Button;
