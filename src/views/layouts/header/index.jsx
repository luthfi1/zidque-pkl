
import {
    Link
} from "react-router-dom";

// components
import Image from '../../components/lazyImage';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top  navbar-light shadow-2dp">
            <div className="container">
                <Link 
                    className="navbar-brand" 
                    to="/">
                    <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/logo.svg`} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link  active" aria-current="page" href="#">Beranda</a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href="#">Tentang Kami</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="#" 
                                id="navbarDropdown" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false">
                                Layanan
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href="#">Tentang Kami</a>
                        </li>

                    </ul>
                        <Link 
                            to="/auth/login"
                            className="btn btn-outline-primary me-4" 
                            type="submit">Masuk</Link>
                        <Link 
                            to="/auth/register"
                            className="btn btn-primary text-white" 
                            type="submit">Daftar</Link>
                </div>
            </div>
        </nav>         
    )
}

export default Header ;