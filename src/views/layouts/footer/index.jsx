
import {
    Link
} from "react-router-dom";

import Image from '../../components/lazyImage';

const Footer = () => {
    return(
        <footer className="bg-gray-90 text-white">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <Link to="/">
                            <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/logoFull.svg`} />
                        </Link>
                        <p className="text-regular-base mt-4 text-gray-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non id facilisi sapien sit posuere urna, elit. Accumsan, felis justo, placerat egestas imperdiet.
                        </p>
                    </div>
                    <div className="col-12 col-lg-2">
                        <h1 className="text-medium-xl">
                            Navigasi
                        </h1>
                        <div className="d-flex flex-column mt-4">
                            <a  
                                className="text-white text-regular-base my-1"
                                href="">Beranda</a>
                            <a  
                                className="text-white text-regular-base my-1"
                                href="">Tentang Kami</a>
                            <a  
                                className="text-white text-regular-base my-1"
                                href="">Layanan</a>
                            <a  
                                className="text-white text-regular-base my-1"
                                href="">Kontak</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-2">
                        <h1 className="text-medium-xl">
                            Hubungan Kami
                        </h1>
                        <div className="mt-4">
                            <div className="d-flex flex-row">
                                <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/mail-blue.svg`} /> 
                                <p className="text-regular-base ms-2">
                                    example@mail.co.id
                                </p>
                            </div>
                            <div className="d-flex flex-row">
                                <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/phone-blue.svg`} /> 
                                <p className="text-regular-base ms-2">
                                    (+62) 21 1234 5678
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <h1 className="text-medium-xl">
                            Ikuti Kami
                        </h1>
                        <div className="d-flex flex-row mt-4">
                            <a href="" className="mx-2">
                                <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/google.svg`} />
                            </a>
                            <a href="" className="mx-2">
                                <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/facebook.svg`} />
                            </a>
                            <a href="" className="mx-2">
                                <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/twitter.svg`} />
                            </a>
                            <a href="" className="mx-2">
                                <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/linkedin.svg`} />
                            </a>                        
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer ;