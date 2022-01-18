

// components
import Image from '../../components/lazyImage';

const HowItWork = () => {
    const data = [
        {
            title : "Order dengan Web/Aplikasi",
            desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est vestibulum elementum neque tellus."
        },
        {
            title : "Cetak Nomor Antrian",
            desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est vestibulum elementum neque tellus."
        },
        {
            title : "Antrean anda terdaftar pada sistem",
            desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est vestibulum elementum neque tellus."
        },

    ]
    return (
        <section className="how-it-work">
            <div className="container">
                <h2 className="title text-center">Bagaimana Kami bekerja</h2>
               <div className="d-flex justify-content-center">
                   <hr className="mt-0" />
               </div> 
               <Image 
                    src={`${process.env.REACT_APP_BASE_URL}assets/images/home/how-it-work-line.svg`}
                    className="img-how-it-work-line" />
               <div className="d-flex justify-content-center">
                    <div className="col-12 col-lg-10">
                        <p className="text-break text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est vestibulum elementum neque tellus. Diam ac odio in egestas. Vestibulum, commodo magna est dignissim sodales. Amet, augue nunc nunc quis amet scelerisque amet, mattis. Ac justo, sed tincidunt amet viverra diam proin.                    
                        </p>
                    </div>
                </div>
                <div className=" row d-flex justify-content-center mt-3">
                    {/* 1 */}
                    <div className="item col-12 col-lg-5 d-flex justify-content-center">
                        <Image 
                            src={`${process.env.REACT_APP_BASE_URL}assets/images/home/how-it-work-1.svg`}
                            className="img-fluid img-1" />
                    </div>
                    <div className="item col-12 col-lg-5 position-relative">
                        <div className="desc-1">
                            <p className="text-medium-xl mb-2">Order dengan Web/Aplikasi</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est vestibulum elementum neque tellus.</p>
                        </div>
                    </div>    

                    {/* 2 */}
                    <div className="item col-12 col-lg-5 order-1 order-lg-0 d-flex align-items-center position-relative">
                        <div >
                            <div className="desc-2">
                                <p className="text-medium-xl mb-2">Cetak Nomor Antrian</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est vestibulum elementum neque tellus.</p>
                            </div>
                        </div>
                    </div>    
                    <div className="item col-12 col-lg-5 order-0 order-lg-1 d-flex justify-content-center">
                        <Image 
                            src={`${process.env.REACT_APP_BASE_URL}assets/images/home/how-it-work-2.svg`}
                            className="img-fluid img-2" />
                    </div>
                    
                    {/* 3 */}
                    <div className=" col-12 col-lg-5 d-flex justify-content-center order-2  ">
                        <Image 
                            src={`${process.env.REACT_APP_BASE_URL}assets/images/home/how-it-work-3.svg`}
                            className="img-fluid img-3" />
                    </div>
                    <div className="item col-12 col-lg-5 position-relative order-3">
                        <div className="desc-3">
                            <p className="text-medium-xl mb-2">Order dengan Web/Aplikasi</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est vestibulum elementum neque tellus.</p>
                        </div>
                    </div>    

                </div>                          
            </div>            
        </section>
    )
}

export default HowItWork ;