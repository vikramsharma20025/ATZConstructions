'use client';
import React, { useState,useEffect } from 'react'

function Login() {
    const [buildvars,setBuildVars] = useState({
        username: '',
        password: '',
        login: false
    });
    useEffect(() => {
        const login = window.localStorage.getItem('login');
        if (buildvars.login) {
            window.location.href = '/admin/';
        }
        if(login) {
            setBuildVars(JSON.parse(login));

        }
    }, [buildvars.login]);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(buildvars);
        window.localStorage.setItem('login',JSON.stringify(buildvars));
        setBuildVars((prevState) => {
            return {
                ...prevState,
                login: true
            }
        });
    }
    const handleChanges = (e: any) => {
        setBuildVars((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        });
    }
    return (
        <div>
            <form className='flex flex-col h-[70vh] items-center justify-evenly' onSubmit={handleSubmit}>
                <h1 className='text-4xl font-bold'>Login</h1>
                <input name='username' type='text' placeholder='Username' autoComplete='true' onChange={handleChanges} className='border border-black rounded p-2 mt-2' value={buildvars.username} />
                <input name='password' type='password' placeholder='Password' autoComplete='true' onChange={handleChanges} className='border border-black rounded p-2 mt-2' value={buildvars.password} />
                <button className='text-white rounded p-2 px-6 mt-2 bg-common-red hover:bg-black' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login