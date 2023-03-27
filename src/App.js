import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './Styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';


function App() {
    return (
        <Router>
            <Navigation />
            <Header />
            <Footer />
        </Router>
    );
}

export default App;
