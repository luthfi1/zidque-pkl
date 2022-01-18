import React, { useState,useEffect } from 'react';

import Image from './lazyImage';

export const Input = ({
    id,
    value,
    placeHolder,
    label,
    onChange,
    type,
    error
}) => {
    return (
        <div className="form-group mt-3">
            <label 
                htmlFor={id} 
                className="form-label">
                   {label}
            </label>
            <input 
                onChange={onChange}
                type={type}
                className={`form-control ${error ? 'form-control-danger' : ''}`} 
                id={id} />
            <span className="text-danger">{error}</span>                  
        </div>
    )
}

export const TextArea = ({
    id,
    value,
    placeHolder,
    label,
    row,
    onChange,
    error
}) => {
    return (
        <div className="form-group mt-3">
            <label 
                htmlFor={id} 
                className="form-label">
                   {label}
            </label>
            <textarea 
                onChange={onChange}
                className={`form-control ${error ? 'form-control-danger' : ''}`} 
                id={id}
                rows={row} />
            <span className="text-danger">{error}</span>                  

        </div>
    )
}

export const Password = ({
    id,
    value,
    placeHolder,
    label,
    onChange,
    error
}) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <div className="form-group mt-3">
            <label 
                htmlFor={id} 
                className="form-label">
                   {label}
            </label>
            <div className="position-relative">
                <input 
                    onChange={onChange}
                    type={`${isShowPassword ? 'text' : 'password'}`} 
                    className={`form-control ${error ? 'form-control-danger' : ''}`} 
                    id={id}  />
                <span onClick={() => setIsShowPassword(!isShowPassword)} >
                    <Image
                        className="toggle-password" 
                        src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/eye.svg`} />
                </span>
                <span className="text-danger">{error}</span>                  
            </div>
        </div>
    )
}

export const Otp = ({
    id,
    value,
    placeHolder,
    label,
    onChange,
    type,
    span,
    error
}) => {
    return (
        <div className="form-group mt-3 otp">
            <label 
                htmlFor={id} 
                className="form-label">
                   {label}
            </label>
            <input 
                placeHolder={placeHolder}
                onChange={onChange}
                type={type}
                className={`form-control ${error ? 'form-control-danger' : ''}`} 
                id={id} />
            {
                error ? 
                <span className="text-regular-xs text-danger">{error}</span> :
                <span className="text-regular-xs text-gray-70">{span}</span>

            }
        </div>
    )
}

export const Phone = ({
    id,
    value,
    placeHolder,
    label,
    onChange,
    type,
    error
}) => {
    return (
        <div className="form-group mt-3 phone">
            <label 
                htmlFor={id} 
                className="form-label">
                   {label}
            </label>
            <input 
                placeHolder={placeHolder}
                onChange={onChange}
                type={type}
                className={`form-control ${error ? 'form-control-danger' : ''}`} 
                id={id} />
            <span className="text-regular-xs text-danger">{error}</span>        </div>
    )
}