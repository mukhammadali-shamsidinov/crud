import React, { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";
import AddForm from "./components/Add-form";
import Navbar from "./components/Navbar";
import TodoItem from "./components/TodoItem";
import Error from './components/Error';
import axios from 'axios';
function App(props) {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        axios({
            method:'get',
            url:'http://localhost:5000/posts'
        }).then(res=>{
            setPosts(res.data)
        })
    },[posts])
    return (
        <div>
           
            <Routes>
                <Route path='/' element={<>
                    <Navbar />
                    <TodoItem posts={posts} />
                </>} />
                <Route path={'/add'} element={<>
                    <Navbar />
                    <AddForm />
                    </>} />
                <Route path={'*'} element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;