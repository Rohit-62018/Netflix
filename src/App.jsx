import React, { useEffect } from "react";
import Home from "./pages/Home/Home"
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login'
import Player from "./pages/Player/player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App(){
    const navigation = useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth,async(user)=>{
            if(user){
                console.log('logged In');
                navigation('/');
            }else{
                console.log('logged Out')
                navigation('/login');
            }
        })
    },[])
    return (
        <div>
            <ToastContainer theme="dark"/>
            <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/login" element={<Login/>}/> 
                <Route path="/player/:id" element={<Player/>} />
            </Routes>
        </div>
    )
}