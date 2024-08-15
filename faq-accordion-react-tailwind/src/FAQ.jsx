import React, { useState } from 'react';
import iconPlus from "./assets/images/icon-plus.svg";
import iconMinus from "./assets/images/icon-minus.svg";

const FAQ = ({ faqs }) => {
  const [show, setShow] = useState(Array(faqs.length).fill(false));

  const handleClick = (index) => {
    const newShow = [...show]; //creat new copy and avoid mutating the original state
    newShow[index] = !newShow[index];
    console.log(newShow);
    setShow(newShow);
  };

  return (
    faqs.map((faq, index) => (
      <div key={index} className='border-b-2 last:border-b-0 mb-2'>
        <div className='flex justify-between items-center mb-4'>
          <p className='font-font-w-normal hover:text-Dark-purple cursor-pointer' onClick={() => handleClick(index)}>{faq.q}</p>
          {!show[index] ? (
            <img
              src={iconPlus}
              alt='iconPlus'
              onClick={() => handleClick(index)}
              className='cursor-pointer'
            />
          ) : (
            <img
              src={iconMinus}
              alt='iconMinus'
              onClick={() => handleClick(index)}
              className='cursor-pointer'
            />
          )}
        </div>
        <p className={`mb-4 text-sm text-Grayish-purple ${show[index] ? 'block' : 'hidden'}`}>
          {faq.a}
        </p>
      </div>
    ))
  );
};

export default FAQ;
