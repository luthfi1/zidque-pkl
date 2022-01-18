import {
    Link
} from "react-router-dom";
import React, { useState, useEffect } from 'react';

import {Input} from '../../../components/form'

const FormEmail = ({
        handleEmail,
        handleStep}) => {
    const [form,setForm] = useState({})
    const [error,setError] = useState({})

    // handle
    const handleSubmit = e => {
        e.preventDefault()
        if(form.email){
            handleStep(2)
            handleEmail(form.email)
        }else{
            setError({
                email : `email tidak boleh kosong`
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
            Silakan masukkan email anda yang sudah terdaftar untuk konfirmasi akun anda.
            </p>
            <form onSubmit={e => handleSubmit(e)} >
                <Input 
                    id="email"
                    label="Email"
                    type="text"
                    error={error.email}
                    onChange={handleChange}                    
                    />     
                <button
                    type="submit" 
                    className="btn btn-primary rounded mt-4 px-5 py-3 shadow-2dp text-bold-base w-100">
                    Konfirmasi
                </button>                                                                     
            </form>
            <p className="text-center mt-5 pt-5">Belum punya akun? 
                <Link to="/">
                    <span className="text-primary"> Daftar Sekarang</span> 
                </Link>
            </p>        
        </>
    )
}

export default FormEmail ;