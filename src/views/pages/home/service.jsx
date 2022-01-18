

import Image from '../../components/lazyImage';

const Service = () => {
    const service = [
        {
            title : "Layanan Kesehatan",
            img : "health"
        },
        {
            title : "Cafe",
            img : "cafe"
        },
        {
            title : "Restoran",
            img : "restaurant"
        },
        {
            title : "Otomotif",
            img : "otomotif"
        },
        {
            title : "Bioskop",
            img : "bioskop"
        },
        {
            title : "Lainnya",
            img : "other"
        },

    ]

    return (
        <section className="service mt-4">
            <div className="container">
                <h2 className="title text-center">Layanan</h2>
               <div className="d-flex justify-content-center">
                   <hr className="mt-0" />
               </div> 
               <div className="d-flex justify-content-center">
                    <div className="col-12 col-lg-10">
                        <p className="text-break text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est vestibulum elementum neque tellus. Diam ac odio in egestas. Vestibulum, commodo magna est dignissim sodales. Amet, augue nunc nunc quis amet scelerisque amet, mattis. Ac justo, sed tincidunt amet viverra diam proin.                         </p>
                    </div>
                </div>        
                <div className="row mt-5">
                    {
                        service.map((data,index) => (
                            <div key={index} className="col-12 col-md-6 col-xl-4">
                                <a href="#" className="text-medium-xl">
                                    <div className="service-item d-flex justify-content-center align-items-center">
                                        <div>
                                            <div className="d-flex justify-content-center">
                                                <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/home/service-${data.img}.svg`} />
                                            </div>
                                            <p className="text-center mt-3">
                                                {data.title}
                                            </p>       
                                        </div>
                                    </div>
                                </a>                            
                            </div>
                        ))
                    }
                </div>                   
            </div>
        </section>
    )
}

export default Service ;