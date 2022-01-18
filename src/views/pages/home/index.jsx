import Image from '../../components/lazyImage';

// module
import Hero from './hero'
import AboutUs from './aboutUs';
import HowItWork from './howItWork'
import DownloadApp from './downloadApp'
import Service from './service'
import Testimonies from './testimonies'
import ContactUs from './contactUs';
import KnowMore from './knowMore';

const Home = () => {
    return (
        <div className="home mt-4">
            <Image 
                src={`${process.env.REACT_APP_BASE_URL}assets/images/home/bg-hero.svg`}
                className="bg-hero" />
            <Hero />
            <AboutUs />
            <div className="position-relative">
                <Image 
                    src={`${process.env.REACT_APP_BASE_URL}assets/images/home/bg-how-it-work.svg`}
                    className="bg-how-it-work" />
                <HowItWork />
            </div>
            <div className="position-relative mt-5">
                <Image 
                    src={`${process.env.REACT_APP_BASE_URL}assets/images/home/bg-download-app.svg`}
                    className="bg-download-app" />
                <DownloadApp />
            </div>
            <Service />
            <div className="position-relative">
                <Image 
                    src={`${process.env.REACT_APP_BASE_URL}assets/images/home/bg-testimonies.svg`}
                    className="bg-testimonies" />
            </div>
            <Testimonies />
            <ContactUs />
            <KnowMore />
        </div>
    )
}

export default Home 