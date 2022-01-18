
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components
import Image from '../../components/lazyImage';


const Testimonies = () => {
    const NextArrow = props => {
        const { className, style, onClick } = props;
        return (
            <div
                onClick={onClick} 
                style={{
                    display : "flex",
                    alignItems : "center",
                    backgroundColor : "#FFFFFF",
                    boxShadow : "0px 6px 10px rgba(66, 66, 66, 0.2), 0px 0px 4px rgba(66, 66, 66, 0.2)",
                    width : "52px",
                    height : "52px",
                    zIndex : "99",
                    borderRadius : "26px"
                }}
                className={className}>
                <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/arrow_right_ios.svg`} />
            </div>
        )
    }
    const PrevArrow = props => {
        const { className, style, onClick } = props;
        return (
            <div
                onClick={onClick} 
                style={{
                    display : "flex",
                    alignItems : "center",
                    backgroundColor : "#FFFFFF",
                    boxShadow : "0px 6px 10px rgba(66, 66, 66, 0.2), 0px 0px 4px rgba(66, 66, 66, 0.2)",
                    width : "52px",
                    height : "52px",
                    zIndex : "99",
                    borderRadius : "26px"                
                }}
                className={className}>
                <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/arrow_left_ios.svg`} />
            </div>
        )
    }
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow : <NextArrow />,
        prevArrow : <PrevArrow />,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]

    };

    return (
        <section className="Testimonies mb-5">
            <div className="container">
                <h1 className="text-bold-2xl text-center">Pendapat mereka tentang Kami</h1>
                <div className="mt-5">
                <Slider {...settings}>
                    <div className="item">
                        <p className="quote">“</p>
                        <p className="desc">Sebuah inovasi yang solutif bagi orang super sibuk seperti saya. Dengan adanya ZidQue, saya dapat mendapatkan produk meskipun tidak mengantre.</p>
                        <hr />
                        <div className="d-flex flex-row">
                            <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/avatar.png`} />
                            <div className="ms-3 profile">
                                <h6 className="mb-0 text-bold-lg">Muhammad Baihaqy</h6>
                                <p className="text-regular-xs">Mahasiswa</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <p className="quote">“</p>
                        <p className="desc">Sebuah inovasi yang solutif bagi orang super sibuk seperti saya. Dengan adanya ZidQue, saya dapat mendapatkan produk meskipun tidak mengantre.</p>
                        <hr />
                        <div className="d-flex flex-row">
                            <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/avatar.png`} />
                            <div className="ms-3 profile">
                                <h6 className="mb-0 text-bold-lg">Muhammad Baihaqy</h6>
                                <p className="text-regular-xs">Mahasiswa</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <p className="quote">“</p>
                        <p className="desc">Sebuah inovasi yang solutif bagi orang super sibuk seperti saya. Dengan adanya ZidQue, saya dapat mendapatkan produk meskipun tidak mengantre.</p>
                        <hr />
                        <div className="d-flex flex-row">
                            <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/avatar.png`} />
                            <div className="ms-3 profile">
                                <h6 className="mb-0 text-bold-lg">Muhammad Baihaqy</h6>
                                <p className="text-regular-xs">Mahasiswa</p>
                            </div>
                        </div>
                    </div>

                </Slider>                    
                </div>
            </div>
        </section>
    )
}

export default Testimonies ;