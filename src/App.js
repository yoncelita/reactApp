import './App.css';
import './Styles.css';
// import { Button } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { CreatePost } from './components/CreatePost';
import { Login } from './components/Login';
import { Register } from './components/Register';


function App() {
    return (
        <div id="app">
            <Header />
            <main>
                {/* Routes is When the url manually matches the path --> show this component */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer />
            </main>
        </div>
    );
}

export default App;
