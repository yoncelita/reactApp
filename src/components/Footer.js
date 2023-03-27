export default function Footer() {

    const footerLogo = 'images/egatnom-logo-footer.png';

    return (
        <footer class="py-lg-5 py-3">
            <div class="container-fluid footer-logo" style={{ backgroundImage: `url(${footerLogo})` }}></div>
            <p class="py-lg-0 my-0 text-center rights-reserved">2022 Egatnom. All rights reserved.</p>
        </footer>
    )
}