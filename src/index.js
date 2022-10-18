import {React, StrictMode} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import Home from './routes/Home';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';


ReactDom.render(
    <StrictMode> 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='blog' element={<Blog/>}></Route>
                    <Route path='contact' element={<Contact/>}></Route>
                    <Route path='*' element={<NotFound/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode >, 
    document.getElementById('root')
);