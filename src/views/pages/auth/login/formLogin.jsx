import {
    Link
} from "react-router-dom";
import React, { useState } from 'react';
import {
    Input,
    Password} from '../../../components/form'

const FormLogin = ({handleStep}) => {
    const [form,setForm] = useState({})
    const [error,setError] = useState({})

    // handle
    const handleSubmit = e => {
        e.preventDefault()
        if(form.email){
            if(form.password){
                handleStep(2)
            }else{
                setError({
                    password : `password tidak boleh kosong`
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

    return (
        <>
            <p className="text-regular-base text-gray-80">
                Silakan masukkan Email dan Kata Sandi yang duah terdaftar ini untuk masuk.
            </p>
            <form onSubmit={handleSubmit}>
                <Input 
                    id="email"
                    label="Email"
                    type="text"
                    error={error.email}
                    onChange={handleChange}
                        />     
                <Password 
                    id="password"
                    label="Kata Sandi"
                    error={error.password}
                    onChange={handleChange}
                        />
                <div className="d-flex justify-content-between mt-2">
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="" 
                            id="flexCheckDefault" />
                        <label 
                            className="form-check-label" 
                            htmlFor="flexCheckDefault">
                            Ingat Saya
                        </label>
                    </div>                                    
                    <p>Lupa kata sandi ?  
                        <Link to="/auth/forgot">
                            <span className="text-primary">Klik Disini</span> 
                        </Link>
                    </p>
                </div> 
                <button
                    type="submit" 
                    className="btn btn-primary rounded mt-3 px-5 py-3 shadow-2dp text-bold-base w-100">
                    Masuk
                </button>                                                                     
                <p className="text-center mt-3">Belum punya akun? 
                    <Link to="/auth/register">
                        <span className="text-primary">Daftar Sekarang</span> 
                    </Link>
                </p>
            </form>        
        </>
    )
}

export default FormLogin ;