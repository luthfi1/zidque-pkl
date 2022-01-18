

import Image from '../../components/lazyImage'

const DownloadApp = () => {
    return (
        <div className="download-app">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
                        <Image 
                            src={`${process.env.REACT_APP_BASE_URL}assets/images/home/download-app.svg`}
                        />
                    </div>
                    <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="text-bold-2xl">Antre dimanapun Anda berada</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est vestibulum elementum neque tellus. Diam ac odio in egestas. Vestibulum, commodo magna est dignissim sodales. </p>
                            <div className="d-flex flex-row mt-4">
                                <Image src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/appstore.svg`} />
                                <Image 
                                    src={`${process.env.REACT_APP_BASE_URL}assets/images/icons/googleplay.svg`}
                                    className="ms-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp