import React, { useState,useEffect } from 'react';

import {Phone} from '../../../components/form'
import Image from '../../../components/lazyImage';

const FormPhone = ({
    handlePhone,
    handleStep}) => {
    const [form,setForm] = useState({})
    const [error,setError] = useState({})

    // handle
    const handleSubmit = e => {
        e.preventDefault()
        if(form.phone){
            handleStep(2)
            handlePhone(form.phone)
        }else{
            setError({
                phone : `No Handphone tidak boleh kosong`
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
                Isi data pendaftaran berikut ini. <br />
                Yang Anda butuhkan hanyalah nomor telepon dan email                           
            </p>
            <div 
                className="alert alert-register alert-dismissible fade show" 
                role="alert">
                <div className="row">
                    <div className="col-2">
                    <Image 
                        src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/lock.svg`} 
                        className="img-fluid"/>
                    </div>
                    <div className="col-9">
                        <p className="text-regular-sm mb-0">
                            Kami selalu melindungi privasi dengan serius. Data pribadi Anda terlindungi dengan aman.
                        </p>
                    </div>
                    <button 
                        type="button" 
                        className="btn-close" 
                        data-bs-dismiss="alert" 
                        aria-label="Close"></button>
                </div>
            </div>                            
            <form onSubmit={handleSubmit}>
                <div class="card">
                    <div class="card-body">
                        <Phone 
                            id="phone"
                            label="Masukkan nomor Handphone anda"
                            type="text"
                            error={error.phone}
                            onChange={handleChange}
                            />     
                    </div>
                </div>
                <button
                    type="submit" 
                    className="btn btn-primary rounded mt-3 py-2 shadow-2dp text-bold-base w-25">
                    Kirim
                </button>                                                                     
            </form>        
        </>
    )
}

export default FormPhone ;