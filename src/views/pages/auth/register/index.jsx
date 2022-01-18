import {
    Link
} from "react-router-dom";
import React, { useState,useEffect } from 'react';

// components
import Image from '../../../components/lazyImage';

// modules
import FormPhone from './formPhone';
import CodeConfirmation from './codeConfirmation';
import FormRegister from './formRegister';

const Register = () => {
    const [step, setStep] = useState(3);
    const [phone, setPhone] = useState(0);

    // handle
    const handleStep = value => {
        setStep(value)  
    }
    const handlePhone = value => {
        setPhone(value)
    }

    const Layout = () => {
        switch(step){
            case 1 :
                return <FormPhone
                            handlePhone={handlePhone} 
                            handleStep={handleStep} /> ;
            case 2 : 
                return <CodeConfirmation 
                            handleStep={handleStep} /> ;
            case 3 : 
                return <FormRegister /> ;
            default :
                return <p>Tidak Ditemukan</p>
        }
    }    

    return (
        <div className="login register mb-5">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-6 d-flex align-items-center mt-4">
                        <Image
                            className="img-fluid bg-login" 
                            src={`${process.env.REACT_APP_BASE_URL}assets/images/auth/bg-register.svg`} />
                    </div>
                    <div className="col-12 col-lg-5 mt-5">
                        <div className="d-flex flex-row">
                            <Link to="/">
                                <Image 
                                    src={`${process.env.REACT_APP_BASE_URL}assets/images/logoFull.svg`} 
                                    className="img-fluid auth-logo"/>
                            </Link>
                            <p className="text-bold-lg ms-5">
                                Masukkan Nomor Handphone
                                <div className="step d-flex align-items-center">
                                    <div className={`indicator active`}></div>
                                    <hr />
                                    <div className={`indicator ${step >= 2 ? 'active' : ''}`}></div>
                                    <hr />
                                    <div className={`indicator ${step >= 3 ? 'active' : ''}`}></div>
                                </div>
                            </p>
                        </div>
                        <div className="ps-5 mt-4">
                            <h1 className="text-bold-2xl">Registrasi</h1>
                            <Layout />
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Register