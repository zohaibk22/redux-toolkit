import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../features/userReducer'; 

const Login = () =>{
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=>{dispatch(login({name: "Zohaib", age: 24, email: "Zohaibk1111@gmail.com"}))}}>Login</button>
            <button onClick={()=>{dispatch(logout())}}>Logout</button>
        </div>
    )
}

export default Login