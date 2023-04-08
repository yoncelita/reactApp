import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Header = () => {

    const { isAuthenticated, userEmail } = useContext(AuthContext);


    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top p-0">
            <div className="container">
                <Link className="navbar-brand" to="/">#FOLLOW-ME</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul
                        className="navbar-nav ms-auto mb-lg-0 flex-row flex-wrap justify-content-lg-center justify-content-evenly">

                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">Catalog</Link>
                        </li>

                        {/* ---------Logged in users only------ */}
                        {isAuthenticated && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/create-post">Create post</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
                                <span className="wellcome-user">Hi, {userEmail.substring(0, userEmail.lastIndexOf("@"))}</span>
                            </>

                        )}

                        {/* ---------Guests users only------ */}
                        {!isAuthenticated && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>

                        )}

                    </ul>
                </div>
            </div>
        </nav>
    );
}