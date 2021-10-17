import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector((state)=>{
        return state.user.value
    })

    const color = useSelector((state)=>{
        return state.color.value
    })

    return (
        <div style={{color: color}}>
            <h2 className={`${color}`}>Profile</h2> 
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Theme Color: {color}</p>
        </div>
    )
}

export default Profile