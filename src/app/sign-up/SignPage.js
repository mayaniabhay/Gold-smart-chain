"use client";

import React, { useState } from 'react';
import Sign from '@/assets/sign.jpeg';

const SignPage = () => {

    

    return (
        <section className=' bg-red-300 flex items-center justify-center '>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden'>
                    {/* Left div */}
                    <div className='p-8 md:p-14'>
                        <h2 className='text-2xl font-bold mb-4 mt-5'>Sign up your account</h2>
                        <p className='mb-4'>
                            A revolution of the crypto and monetary system. Register here to buy and trade STAND the gold-backed cryptocurrency on its own independent blockchain. Decouple yourself from inflation, stop the creeping expropriation!
                        </p>
                        <p className='font-bold mb-4'>Gold: Security for 6,000 years</p>
                        <form>
                            <div className='mb-4'>
                                <label className='block text-gray-700'>Name *</label>
                                <input type='text' className='w-full px-4 py-2 border rounded-lg' required />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700'>Username *</label>
                                <input type='text' className='w-full px-4 py-2 border rounded-lg' required />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700'>Phone</label>
                                <input type='tel' className='w-full px-4 py-2 border rounded-lg' />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700'>Email *</label>
                                <input type='email' className='w-full px-4 py-2 border rounded-lg' required />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700'>Password *</label>
                                <input type='password' className='w-full px-4 py-2 border rounded-lg' required />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700'>Confirm Password *</label>
                                <input type='password' className='w-full px-4 py-2 border rounded-lg' required />
                            </div>
                            <button className='bg-[#cea666] text-white rounded-full w-28 h-9 mt-3 shadow-lg shadow-slate-400'>SIGN UP</button>
                        </form>
                        <div className='mt-5'>
                            <h2 className='font-medium'>Already have an account?? <span className='text-[#cea666] ml-1'>Sign up Now</span></h2>
                        </div>
                        <p className='mt-6'>Gold.Smart.Chain Dashboard<br />
                        © 2023 All Rights Reserved</p>
                    </div>

                    {/* Right div */}
                    <div className='relative hidden md:block'>
                        <div
                            className='bg-no-repeat bg-cover bg-center h-full w-full'
                            style={{ backgroundImage: `url(${Sign.src})` }}
                        >
                            <div className=' flex flex-col   text-black p-8'>
                                <h2 className='text-3xl font-bold mb-4 mt-10'>A revolution of the crypto and monetary system</h2>
                                <p className='text-xl mb-4 texy-sm font-bold'>Gold: Security for 6,000 years</p>
                                <button className='bg-[#cea666] text-white rounded-full w-28 h-9 mt-3 shadow-lg shadow-black'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignPage;
