// import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import './Styles.css';
// import { Button } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import {useState} from 'react';


function App() {
    return (
        <BrowserRouter>
            {/* When the url matches the path --> show this component */}
            <Routes>
                <Route path="/*" element={<Navigation />} />
            </Routes>
            <Routes>
                <Route path="/" element={<Header />} />
            </Routes>
            <Routes>
                <Route path="/*" element={<Footer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
