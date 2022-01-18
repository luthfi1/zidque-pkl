
import React, { useState,useEffect } from 'react';

// components
import Image from '../../components/lazyImage';
import {
    Input,
    TextArea} from '../../components/form';

const ContactUs = () => {
    const [form,setForm] = useState({})
    const [error,setError] = useState({})

    // handle
    const handleSubmit = e => {
        e.preventDefault()
        if(form.name){
            if(form.email){
                if(form.message){
                    setError({})
                    window.location.href = "/"
                }else{
                    setError({
                        message : `pesan tidak boleh kosong`
                    })                
                }
            }else{
                setError({
                    email : `email tidak boleh kosong`
                })                
            }
        }else{
            setError({
                name : `nama tidak boleh kosong`
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
        <div className="contact-us">
            <div className="container">
                <h1 className="text-bold-2xl">
                Kontak Kami
                </h1>
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-5 mt-5">
                        <div className="d-flex flex-row">
                            <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/phone.svg`} />
                            <p className="text-regular-lg ms-2"> +62 21 3456 7890</p>
                        </div>
                        <div className="d-flex flex-row">
                            <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/mail.svg`} />
                            <p className="text-regular-lg ms-2">sample@mail.com</p>
                        </div>
                        <div className="d-flex flex-row">
                            <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/loc_pin.svg`} />
                            <p className="text-regular-lg ms-2">Gedung BAP, Jl. Bambu Kuning Utara No.212, Bambu Apus, Cipayung, Jakarta Timur 13890 DKI Jakarta, Indonesia</p>
                        </div>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.655746230726!2d106.8999584!3d-6.307807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x836026bb2f4813d7!2sBestada!5e0!3m2!1sid!2sid!4v1629795244952!5m2!1sid!2sid" 
                            width="100%" 
                            height="272" 
                            style={{
                                border:0,
                                marginTop : "24px"
                            }} 
                            allowFullScreen="" 
                            loading="lazy"></iframe>
                    </div>
                    <div className="col-12 col-lg-6 mt-5">
                        <div className="contact-us-container">
                            <h1 className="text-bold-2xl">
                            Ada kendala?
                            </h1>
                            <p>Silakan hubungi Kami atau sampaikan kendala Anda dengan mengisi formulir berikut.</p>
                            <form onSubmit={handleSubmit} className="mt-4">
                                <Input 
                                    id="name"
                                    label="Nama"
                                    type="text"
                                    error={error.name}
                                    onChange={handleChange}
                                     />
                                <Input 
                                    id="email"
                                    label="Email"
                                    type="text"
                                    error={error.email}
                                    onChange={handleChange}
                                     />        
                                <TextArea 
                                    id="message"
                                    label="Pesan"
                                    row={5}
                                    error={error.message}
                                    onChange={handleChange}
                                     />
                                <button
                                    type="submit" 
                                    className="btn btn-primary rounded mt-4 px-5 py-3 shadow-2dp text-bold-base">
                                    Kirim Pesan
                                </button>                                                                     
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactUs