import React from 'react'

const Button = ({ buttons }) => {
    return (
        <div className='flex flex-col justify-center gap-6 w-full sm:flex-row'>
            {buttons.map(button => (
                <a key={button.id} href={button.link}>
                    <button className={`${button.bg} w-full py-4 px-10 font-w-medium rounded-full text-white border border-b-4 ${button.border}`}>{button.label}</button>
                </a>
            ))}
        </div>
    );
};
export default Button

