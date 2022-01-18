import React, { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";

// components
import Image from '../../../components/lazyImage';

// module
import FormEmail from './formEmail'
import CodeConfirmation from './codeConfirmation'
import FormPassword from './formPassword'

const ForgotPassword = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');

    // handle
    const handleStep = value => {
        setStep(value)  
    }
    const handleEmail = value => {
        setEmail(value)
    }
    
    const Layout = () => {
        switch(step){
            case 1 :
                return <FormEmail
                            handleEmail={handleEmail} 
                            handleStep={handleStep} /> ;
            case 2 : 
                return <CodeConfirmation
                            handleStep={handleStep}  /> ;
            case 3 : 
                return  <FormPassword  /> ;
            default :
                return <p>Tidak Ditemukan</p>
        }
    }

    return (
        <div className="login mb-5">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-6 d-flex align-items-center mt-4">
                        <Image
                            className="img-fluid bg-login" 
                            src={`${process.env.REACT_APP_BASE_URL}assets/images/auth/bg-forgot.svg`} />
                    </div>
                    <div className="col-12 col-lg-5 mt-5">
                        <Link to="/">
                            <Image 
                                src={`${process.env.REACT_APP_BASE_URL}assets/images/logoFull.svg`} 
                                className="img-fluid auth-logo"/>
                        </Link>
                        <div className="ps-5 mt-5">
                            <h1 className="text-bold-2xl">Lupa Sandi</h1>
                            <Layout />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword