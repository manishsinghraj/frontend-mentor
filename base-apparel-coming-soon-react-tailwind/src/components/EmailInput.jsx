import React, { useEffect, useState } from 'react';
import iconArrow from "../assets/images/icon-arrow.svg";
import iconError from "../assets/images/icon-error.svg";

const EmailInput = () => {
    const [text, setText] = useState('');
    const [emailError, setEmailError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [registeredEmail, setRegisteredEmail] = useState([]);

    useEffect(() => {
        const storedEmails = JSON.parse(localStorage.getItem('emails')) || [];
        setRegisteredEmail(storedEmails);
    }, []);

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const isEmailAlreadyRegistered = (email) => {
        return registeredEmail.includes(email);
    };

    const handleEmailError = (errorMessage) => {
        setSuccessMessage('');
        setEmailError(errorMessage);
    };

    const storeEmail = (email) => {
        const updatedEmails = [...registeredEmail, email];
        localStorage.setItem('emails', JSON.stringify(updatedEmails));
    }

    const handleSuccess = () => {
        setEmailError('');
        setSuccessMessage('Thank you for subscribing! You will be the first to know about our launch deals.');
        storeEmail(text);

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(text)) {
            handleEmailError('Please provide a valid email');
        } else if (isEmailAlreadyRegistered(text)) {
            handleEmailError('Email already registered');
        } else {
            setRegisteredEmail([...registeredEmail, text]);
            handleSuccess();
            setText('');
        }
    };

    useEffect(() => {
        if (!text) {
            setEmailError('');
        }
    }, [text]);

    return (
        <form
            aria-label="Email Subscription Form"
            className='w-[85%] mb-10' onSubmit={handleSubmit}>
            <div className='relative flex items-center'>
                <label htmlFor="email-input" className="sr-only">Email Address</label>
                <input
                    id="email-input"
                    type="text"
                    placeholder='Email Address'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    aria-required="true"
                    tabIndex={0}
                    aria-invalid={!!emailError}
                    aria-describedby="email-error" //links with below error section(id="email-error")
                    className={`border-[1px] py-5 px-6 rounded-full w-full placeholder-dark-grayish-red placeholder-opacity-30 overflow-hidden outline-none ${emailError ? 'border-red-500 border-2' : 'border-dark-grayish-red border-opacity-30'}`}

                />
                <div className='absolute right-0 flex items-center'>
                    {emailError && (
                        <img src={iconError} alt='email error icon' className="mr-5" />
                    )}
                    <button
                        type='submit'
                        disabled={!text}
                        className={`bg-gradient-2 rounded-full px-11 py-[23px] shadow-xl ${!text ? 'cursor-not-allowed' : 'hover:shadow-red-100 hover:bg-none hover:scale-105 hover:bg-soft-desaturated-red'} z-50`}>
                        <img src={iconArrow} alt="Arrow icon indicating submit action" />
                    </button>
                </div>

                {emailError && (
                    <div role="alert" id="email-error"
                        className='absolute left-6 bottom-[-2rem] w-full text-soft-red font-semibold'>
                        <p className='text-sm'>{emailError}</p>
                    </div>
                )}
                {successMessage && (
                    <div aria-live="polite"
                        className='absolute left-6 bottom-[-4rem] w-full text-black font-semibold'>
                        <p className='text-sm'>{successMessage}</p>
                    </div>
                )}
            </div>
        </form>
    );
};

export default EmailInput;
