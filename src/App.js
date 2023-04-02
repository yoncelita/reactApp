import './App.css';
import './Styles.css';

import * as postService from './services/postService';
import * as authService from './services/authService';
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
import { Logout } from './components/Logout';
import { Edit } from './components/Edit';


function App() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        postService.getAll()
            .then(result => {
                setPosts(result)
            })
    }, []);


    //Create
    const onCreatePostSubmit = async (data) => {
        const newPost = await postService.create(data, auth.accessToken);


        //add New Posts to the state => update State
        setPosts(state => [...state, newPost]);

        //redirect to catalog page using useNavigate hook
        navigate('/catalog');
    };



    //Login
    const onLoginSubmit = async (data) => {
        console.log(data);
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log('There is a problem with login');
        }
    };


    //Register
    const onRegisterSubmit = async (values) => {
        const { repeatPassword, ...registerData } = values;
        if (repeatPassword !== registerData.password) {
            throw new Error('Passwords are different!')
            // return;
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result)

            navigate('/catalog');
        } catch (error) {
            console.log('There is a problem with register');
        }
    }



    //Logout
    const onLogout = async () => {

        //TODO: Authorized request
        // await authService.logout();
        setAuth({});
    }



    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={contextValues}>
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
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
