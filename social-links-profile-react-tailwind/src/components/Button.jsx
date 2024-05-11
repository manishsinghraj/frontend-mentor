import React from 'react';

const Button = ({ label, value }) => {
  return (
    <a href={value} target='_blank'>
      <button className='w-full'>
        {label}
      </button>
    </a>
  );
}

export default Button;
