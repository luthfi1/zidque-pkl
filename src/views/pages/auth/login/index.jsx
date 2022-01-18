import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";

// components
import Image from '../../../components/lazyImage';

// Modules
import FormLogin from './formLogin'
import CodeConfirmation from './codeConfirmation'

const Login = () => {
    const [step,setStep] = useState(1)

    const handleStep = value => {
        setStep(value)
    }

    return (
        <div className="login mb-5">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-6 d-flex align-items-center mt-4">
                        <Image
                            className="img-fluid bg-login" 
                            src={`${process.env.REACT_APP_BASE_URL}assets/images/auth/bg-login.svg`} />
                    </div>
                    <div className="col-12 col-lg-5 mt-5">
                        <Link to="/">
                            <Image 
                                src={`${process.env.REACT_APP_BASE_URL}assets/images/logoFull.svg`} 
                                className="img-fluid auth-logo"/>
                        </Link>
                        <div className="ps-5 mt-5">
                            <h1 className="text-bold-2xl">Masuk ke ZidQue</h1>
                            {
                                step === 1 ?
                                <FormLogin handleStep={handleStep} />
                                :
                                <CodeConfirmation />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login ;