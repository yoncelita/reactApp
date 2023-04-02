import { About } from './About';


export const Home = () => {

    const desktopImage = 'images/banner-D.webp';
    const mobileImage = 'images/banner-D.webp'; //new
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

    return (
        <>
            <header className="py-1 py-lg-5 bg-image-full d-flex align-items-end text-center" style={{ backgroundImage: `linear-gradient(to bottom, rgb(243 243 243 / 0%), rgb(33 33 33)), url(${imageUrl})` }}>
                <div className="container">
                    <a className="text-white fw-bold d-inline-block about-text-hook text-decoration-none" href="#About"><span className="fw-bold color-accent">Are you </span>a follower?</a>
                </div>
            </header>
            <About />
        </>
    )
}