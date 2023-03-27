import About from "./About";
export default function Header() {

    const desktopImage = 'images/egatnom-cover-D.jpg';
    const mobileImage = 'images/egatnom-cover-M.jpg';
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

    return (
        <>
            <header class="py-5 bg-image-full" style={{ backgroundImage: `url(${imageUrl})` }}></header>
            <About />
        </>
    )
}