import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';

import {
        Input,
        Password} from '../../../components/form'

const FormRegister = () => {
    const [form,setForm] = useState({})
    const [error,setError] = useState({})
    const [isDisabled,setIsDisabled] = useState(true)

    // handle
    const handleSubmit = e => {
        e.preventDefault()
        if(form.email){
            if(form.name){
                if(form.password){
                    if(form.passwordConfirmation){
                        if(form.passwordConfirmation === form.password){
                            swal("Pendaftaran Berhasil", "Silakan kembali ke halaman login untuk masuk", "success").then(() => {
                                window.location.href = '/auth/login'
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
            }else{
                setError({
                    name : `name tidak boleh kosong`
                })
            }                    
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
    const handleCheck = e => {
        setIsDisabled(!e.target.checked)
    }

    return (
        <>
            <p className="text-regular-base text-gray-80">
            Isi data pendaftaran berikut ini. <br />
            Yang Anda butuhkan hanyalah nomor telepon dan email            
            </p>
            <form onSubmit={e => handleSubmit(e)} >
                <Input 
                    id="email"
                    label="Email"
                    type="text"
                    error={error.email}
                    onChange={handleChange}
                    />                     
                <Input 
                    id="name"
                    label="Nama"
                    type="text"
                    error={error.name}
                    onChange={handleChange}
                    />                     
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
                <div className="form-check mt-3">
                    <input 
                        onChange={handleCheck}
                        className="form-check-input" 
                        type="checkbox" 
                        value="" 
                        id="flexCheckDefault" />
                    <label 
                        className="form-check-label" 
                        htmlFor="flexCheckDefault">
                        Saya telah membaca dan menyetujui Syarat & Ketentuan serta Kebijakan Privasi
                    </label>
                </div>                                    
                <button
                    disabled={isDisabled}
                    type="submit" 
                    className="btn btn-primary rounded mt-4 px-5 py-3 shadow-2dp text-bold-base w-100">
                    Daftar
                </button>                                                                     
            </form>     
        </>
    )
}

export default FormRegister ;