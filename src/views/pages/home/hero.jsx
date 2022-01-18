
// components
import Image from '../../components/lazyImage';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container ">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-5 col-md-12 d-flex align-items-center">
                        <div>
                            <h1 
                                className="text-bold-3xl text-break">
                                Biarkan Kami Antri Untuk Anda.
                            </h1>
                            <p 
                                className="text-medium-2xl text-gray-90 text-break">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>                  
                            <button 
                                type="button" 
                                className="btn btn-primary rounded px-5 py-3 text-bold-base">
                                Coba Sekarang
                            </button>      
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <Image 
                            src={`${process.env.REACT_APP_BASE_URL}assets/images/home/hero.svg`}
                            className="img-hero" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero ;