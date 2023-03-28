import { Route } from "react-router-dom";
import About from "./About";
export default function Header() {

    const desktopImage = 'images/banner-D.jpg';
    const mobileImage = 'images/banner-D.jpg'; //new
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

    return (
        <>
            <header className="py-5 bg-image-full" style={{ backgroundImage: `linear-gradient(to bottom, rgb(243 243 243 / 0%), rgb(33 33 33)), url(${imageUrl})` }}></header>
                <About />
            </>
            )
}