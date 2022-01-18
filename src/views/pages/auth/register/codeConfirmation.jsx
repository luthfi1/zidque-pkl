import {
    Link
} from "react-router-dom";
import React, { useState, useEffect } from 'react';

// components
import Image from '../../../components/lazyImage';
import {Otp} from '../../../components/form'

const CodeConfirmation = ({
        handleStep}) => {
    const [form,setForm] = useState({})
    const [error,setError] = useState({})

    // handle
    const handleSubmit = e => {
        e.preventDefault()
        if(form.confirmation){
            handleStep(3)
        }else{
            setError({
                confirmation : `Kode konfirmasi tidak boleh kosong`
            })
        }    
    }
    const handleChange = e => {
        const {value,id} = e.target
        setForm({
            ...form,
            [id] : value
        })
    }        
    return (
        <>
            <p className="text-regular-base text-gray-80">
            Silakan masukkan kode yang sudah terkirim ke nomor handphone anda untuk konfirmasi akun.            
            </p>
            <div className="card">
                <div className="card-body d-flex align-items-end justify-content-between">
                    <div>
                        <h3 className="text-medium-lg mb-0">mail@sample.com</h3>
                        <p className="text-regular-sm text-gray-70 mb-0">Terakhir login 4 Agustus 2021</p>
                    </div>
                    <div onClick={e => handleStep(1)}>
                        <Image
                            className="text-pointer" 
                            src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/pen.svg`} />
                    </div>
                </div>
            </div>       
            <form onSubmit={e => handleSubmit(e)} >
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <Otp 
                            id="confirmation"
                            label="Kode Konfirmasi"
                            placeHolder="- - - -"
                            type="text"
                            span="Masukkan dengan kode dari sms yang anda terima"
                            error={error.confirmation}
                            onChange={handleChange}                    
                            />     
                    </div>
                    <div className="col-12 col-lg-5 reload">
                        <div className="d-flex flex-row text-pointer">
                            <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/reload.svg`} />
                            <p className="text-medium-base text-primary mt-1 ms-1">Kirim Ulang</p>
                        </div>
                    </div>
                </div>
                <button
                    type="submit" 
                    className="btn btn-primary rounded mt-4  shadow-2dp text-bold-base w-25">
                    Konfirmasi
                </button>                                                                     
            </form>     
        </>
    )
}

export default CodeConfirmation ;