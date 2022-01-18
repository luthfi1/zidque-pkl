import {
    Link
} from "react-router-dom";
import React, { useState } from 'react';

// components
import Image from '../../../components/lazyImage';
import {Otp} from '../../../components/form'

const CodeConfirmation = () => {
    const [form,setForm] = useState({})
    const [error,setError] = useState({})

    // handle
    const handleSubmit = e => {
        e.preventDefault()
        if(form.confirmation){
            window.location.href = "/"
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
            Kode Autentikasi telah dikirimkan. <br />
            Masukkan kode Autentikasi yang telah dikirimkan
            </p>
            <form onSubmit={e => handleSubmit(e)} >
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <Otp 
                            id="confirmation"
                            label="Kode Autentikasi"
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
                <p className="text-center mt-5 pt-5">Belum punya akun? 
                    <Link to="/auth/register">
                        <span className="text-primary">Daftar Sekarang</span> 
                    </Link>
                </p>                                                                   
            </form>     
        </>
    )
}

export default CodeConfirmation ;