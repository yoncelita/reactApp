import { Link } from "react-router-dom";


export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top p-0">
            <div className="container">
                <Link className="navbar-brand" to="/">FOLLOW ME</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul
                        className="navbar-nav ms-auto mb-lg-0 flex-row flex-wrap justify-content-lg-center justify-content-between">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Services">Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Projects">Our Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contacts">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}