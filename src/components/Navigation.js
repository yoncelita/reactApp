import { Link } from "react-router-dom";
import { useState } from 'react';


export default function Navigation() {

    const [isShown, setIsShown] = useState(true);
    const logohandlerAbout = event => {
        // 👇️ simply set it to true
        setIsShown(false);
    };
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
                        {isShown && (
                            <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" to="/" href="#About">About</a>
                            </li>
                        )}
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog" onClick={logohandlerAbout}>Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add" onClick={logohandlerAbout}>Add post</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" onClick={logohandlerAbout}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register" onClick={logohandlerAbout}>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}