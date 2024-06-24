"use client"

import React, { useState } from 'react';
import Logos from '@/assets/logos.svg'
import rightImage from '@/assets/right.jpeg'
import Image from 'next/image';
const LoginPage = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <section className='  flex items-center justify-center '>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden'>
                    {/* Left div */}
                    <div className='p-8 md:p-14'>
                        <div className='md:flex items-center gap-x-40'>
                            {/* left Logo0 */}
                            <div className=''>
                                <div className=''>
                                    <div className='md:flex justify-between '>
                                        <div className='md:flex-row sm:flex  md:gap-x-40'>
                                            <Image src={Logos} alt='logo' />
                                            <button className='mt-5'>
                                                <span className='flex gap-x-2 bg-slate-200 w-40 h-14 text-center items-center rounded-full'>
                                                    <svg className='ml-5' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.57129 11C1.57129 16.2069 5.79293 20.4286 10.9999 20.4286C16.2068 20.4286 20.4284 16.2069 20.4284 11C20.4284 5.79308 16.2068 1.57144 10.9999 1.57144C5.79293 1.57144 1.57129 5.79308 1.57129 11ZM11.982 6.28573C11.982 6.54621 11.8785 6.79602 11.6943 6.98021C11.5102 7.16439 11.2603 7.26787 10.9999 7.26787C10.7394 7.26787 10.4896 7.16439 10.3054 6.98021C10.1212 6.79602 10.0177 6.54621 10.0177 6.28573C10.0177 6.02525 10.1212 5.77544 10.3054 5.59125C10.4896 5.40706 10.7394 5.30358 10.9999 5.30358C11.2603 5.30358 11.5102 5.40706 11.6943 5.59125C11.8785 5.77544 11.982 6.02525 11.982 6.28573ZM10.9999 8.64287C11.2082 8.64287 11.4081 8.72565 11.5554 8.873C11.7028 9.02035 11.7856 9.2202 11.7856 9.42859V15.7143C11.7856 15.9227 11.7028 16.1225 11.5554 16.2699C11.4081 16.4172 11.2082 16.5 10.9999 16.5C10.7915 16.5 10.5916 16.4172 10.4443 16.2699C10.2969 16.1225 10.2141 15.9227 10.2141 15.7143V9.42859C10.2141 9.2202 10.2969 9.02035 10.4443 8.873C10.5916 8.72565 10.7915 8.64287 10.9999 8.64287Z" fill="#CEA666" />
                                                    </svg>Learn More</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className='text-2xl font-bold mb-4 mt-5'>Log in </h2>
                        <p className='mb-4'>
                            Log in with your Email, Phone number                         </p>
                        <p className='font-bold mb-4'>Gold: Security for 6,000 years</p>
                        <form>

                            <div className='mb-4'>
                                <label className='block text-gray-700'>Email *</label>
                                <input type='email' className='w-full px-4 py-2 border rounded-lg  focus:outline-[#cea666]' required />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700'>Password *</label>
                                <input type='password' className='w-full px-4 py-2 border rounded-lg  focus:outline-[#cea666]' required />
                            </div>
                            <div>
                                <span className='flex justify-between ml-1'>
                                    <input
                                        type='checkbox'
                                        id='remember-me'
                                        checked={isChecked}
                                        onChange={handleCheckboxChange} />
                                    <p className='ml-2'>Save preferences</p>
                                    <p className='ml-7 md:ml-16'>Forget Password<span className='text-[#cea666]'>?</span></p>
                                </span>
                            </div>

                            <button className='bg-[#cea666] text-white rounded-full w-28 h-9 mt-3 shadow-lg shadow-slate-400'>LOG IN</button>
                        </form>
                        <div className='mt-5'>
                            <h2 className='font-medium'>Don't have a Account?   <span className='text-[#cea666] ml-1'>Sign up Now</span></h2>
                        </div>
                        <p className='mt-6'>Gold.Smart.Chain Dashboard<br />
                            © 2023 All Rights Reserved</p>

                    </div>

                    {/* Right div */}
                    <div className='relative hidden md:block'>
                    <div
                            className='bg-no-repeat bg-cover bg-center h-full w-full'
                            style={{ backgroundImage: `url(${rightImage.src})` }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;


