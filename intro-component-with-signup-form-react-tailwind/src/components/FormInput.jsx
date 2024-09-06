import React, { useState } from 'react';
import errorIcon from "../assets/images/icon-error.svg";

const FormInput = (props) => {
    const { label, onChange, errorMessage, focused, isValidEmail, value, ...inputProps } = props;

    const [localFocused, setLocalFocused] = useState(false);

    const handleFocus = () => {
        setLocalFocused(true);
    };

    const handleChange = (e) => {
        onChange(e);
    };

    const isFocused = focused || localFocused;

    return (
        <div className="relative mb-4">
            <div className="flex items-center">
                <input
                    {...inputProps}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleFocus}
                    placeholder={inputProps.type === "email" && value === "" && isFocused ? "email@example.com" : inputProps.placeholder}
                    className={`w-full px-4 py-2 rounded-md border 
                    ${(!value && isFocused) || (!isValidEmail && inputProps.type === "email") ? 'border-red-500' : 'border-gray-300'} 
                    focus:outline-none`}
                />

                {/* Shows error icon when the input is invalid */}
                {((!value && isFocused) || (!isValidEmail && inputProps.type === "email")) && (
                    <img src={errorIcon} alt="error" className="absolute right-3 top-3 w-5 h-5" />
                )}
            </div>

            {/* Shows error message when the input is focused and invalid */}
            <span className={`text-xs text-red-500 ${(!value && isFocused) || (!isValidEmail && inputProps.type === "email") ? 'block' : 'hidden'}`}>
                {errorMessage}
            </span>
        </div>
    );
};

export default FormInput;
