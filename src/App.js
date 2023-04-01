import './App.css';
import './Styles.css';

import * as postService from './services/postService';
import { AuthContext } from './contexts/AuthContext';

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { PostDetails } from './components/PostDetails';
import { CreatePost } from './components/CreatePost';
import { Login } from './components/Login';
import { Register } from './components/Register';


function App() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        postService.getAll()
            .then(result => {
                console.log(result);
                setPosts(result)
            })
    }, []);

    const onCreatePostSubmit = async (data) => {
        const newPost = await postService.create(data);


        //add New Posts to the state => update State
        setPosts(state => [...state, newPost]);

        //redirect to catalog page using useNavigate hook
        navigate('/catalog');
    };


    const onLoginSubmit = async (data) => {
        console.log(data);
    };

    return (
        <AuthContext.Provider value={{ onLoginSubmit }}>
            <div id="app">
                <Header />
                <main className="main-content">
                    {/* Routes is When the url manually matches the path --> show this component */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create-post" element={<CreatePost onCreatePostSubmit={onCreatePostSubmit} />} />
                        <Route path="/catalog" element={<Catalog posts={posts} />} />
                        <Route path="/catalog/:postId" element={<PostDetails />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
