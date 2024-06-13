'use client';
import React from 'react'
import { useState } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

function Contact_us() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [formSuccess, setFormSuccess] = useState(false);
    const [formError, setFormError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData();
        data.append('firstname', formData.firstName);
        data.append('lastname', formData.lastName);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('message', formData.message);
        await fetch('/api/contact_us', {
            method: 'POST',
            body: data,
        }).then(async (res) => {
            console.log(await res.json());
            if (res.ok) {
                setFormSuccess(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            } else {
                setFormError(true);
            }
        }).catch((err) => {
            console.log(err);
            setFormError(true);
        });
    }
    return (
        <>
            {formSuccess && <p className='text-green-500 text-lg font-bold'>Your request has been submitted successfully!</p>}
            {formError && <p className='text-red-500 text-lg font-bold'>There was an error submitting your request. Please try again later.</p>}
            <form onSubmit={handleSubmit} className='w-4/5 md:w-4/6 mx-auto flex flex-col justify-evenly items-center py-14'>
                <div className='w-11/12 flex flex-col justify-evenly items-center'>
                    <label className='font-bold text-lg mb-7 text-left w-full'>Name</label>
                    <div className='flex flex-col md:flex-row w-full -mt-4'>
                        <input type='text' placeholder='First Name' className='w-full border rounded-full h-12 p-3 mr-4' value={formData.firstName} name='firstName' onChange={handleChange} />
                        <input type='text' placeholder='Last Name' className='w-full border rounded-full h-12 mt-3 md:mt-auto p-3' value={formData.lastName} name='lastName' onChange={handleChange} />
                    </div>
                    <div className='flex flex-col md:flex-row w-full my-5'>
                        <div className='flex flex-col w-full mt-5 mr-4'>
                            <label className=' font-bold text-lg'>Email</label>
                            <input type='email' placeholder='Email' className='w-full border p-2 rounded-full h-12' value={formData.email} name='email' onChange={handleChange} />
                        </div>
                        <div className='flex flex-col w-full mt-5'>
                            <label className=' font-bold text-lg'>Phone</label>
                            <input type='text' placeholder='Phone' className='w-full border h-12 rounded-full p-2' value={formData.phone} name='phone' onChange={handleChange} />
                        </div>
                    </div>
                    <label className='font-bold text-lg text-left w-full mt-3'>Message</label>
                    <textarea placeholder='Message' className='w-full border mb-7 p-2 h-40 rounded-3xl' value={formData.message} name='message' onChange={handleChange}></textarea>
                    <button type='submit' className='w-full md:w-1/2 bg-[#922f25] text-white font-bold text-lg py-2 rounded-lg hover:bg-black'>Submit Your Request</button>
                </div>
            </form>
        </>
    )
}

export default Contact_us;