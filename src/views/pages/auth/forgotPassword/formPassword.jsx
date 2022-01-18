import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';

import {Password} from '../../../components/form'

const FormPassword = () => {
    const [form,setForm] = useState({})
    const [error,setError] = useState({})

    // handle
    const handleSubmit = e => {
        e.preventDefault()
        if(form.password){
            if(form.passwordConfirmation){
                if(form.passwordConfirmation === form.password){
                    swal("Sandi Berhasil Diperbarui", "", "success").then(() => {
                        window.location.href = '/'
                    })
                }else{
                    setError({
                        passwordConfirmation : `Harus sama dengan Kata Sandi`
                    })
                }    
            }else{
                setError({
                    passwordConfirmation : `konfirmasi kata sandi tidak boleh kosong`
                })
            }    
        }else{
            setError({
                password : `kata sandi tidak boleh kosong`
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
            Silakan masukkan Kata Sandi yang baru. <br /> 
            Gunakanlah Kata Sandi yang aman dan mudah diingat.            </p>
            <form onSubmit={e => handleSubmit(e)} >
                <Password 
                    id="password"
                    label="Kata Sandi"
                    error={error.password}
                    onChange={handleChange}                    
                    />     
                <Password 
                    id="passwordConfirmation"
                    label="Konfirmasi Kata Sandi"
                    error={error.passwordConfirmation}
                    onChange={handleChange}                    
                    />     
                <button
                    type="submit" 
                    className="btn btn-primary rounded mt-4 px-5 py-3 shadow-2dp text-bold-base w-100">
                    Konfirmasi
                </button>                                                                     
            </form>     
        </>
    )
}

export default FormPassword ;