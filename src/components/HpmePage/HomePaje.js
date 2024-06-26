"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Profil from '@/assets/profil/1profil.jpeg'
import Link from 'next/link'

const data = [
    {
        "firstName": "ABCD",
        "lastName": "Adam",
        "userName": "ABCD-123",
        "phone": 85435584,
        "email": "abcd@gmail.com",
        "profilePicture": Profil,
        "balance": "2.77 SOLID",
        "estimatedValue": "≈ €20.00",
        "withdrawalLimit": "0.0010 SOLID"

    }
]




const HomePaje = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const editProfile = (profile) => {
        setFirstName(profile.firstName);
        setLastName(profile.lastName);
        setUserName(profile.userName);
        setPhone(profile.phone);
        setEmail(profile.email);
    };


    return (
        <section className='bg-slate-100'>
            <div className=''>
                <div className='bg-white shadow-md shadow-slate-300 border m-3 mb-2 h-8 '>
                    <div className='mt-1 m-5'> <span className='text-[#cea666] font-medium'>Home/</span>Profile</div>
                </div>
                <div className='items-center text-center  flex ml-3 gap-x-5  h-16 '>
                    <Link href={"/"} className='bg-white  hover:bg-[#cea666] ml-3 hover:text-white rounded-full w-28 h-9  shadow-md shadow-slate-300 '>Profile setting</Link>
                    <Link href={"/security"} className='bg-white hover:bg-[#cea666] hover:text-white rounded-full w-28 h-9  shadow-md shadow-slate-300'>Security</Link>
                    <Link href={"/bank"} className='bg-white hover:bg-[#cea666] hover:text-white rounded-full w-28 h-9  shadow-md shadow-slate-300'>Bank Details</Link>                </div>

                {/* 2 section  */}
                <div className='mt-5 md:flex gap-8 justify-center '>
                    {/* left side  */}
                    <div className=' md:mt-8 rounded bg-white md:w-[334px] md:h-[446px]  h-[420px]  shadow-md shadow-black'>
                        <div>
                            <div className='flex w-52 h-36 justify-center'>
                                {
                                    data.map((item, index) => (
                                        <div key={item}>
                                            <div className=' md:ml-32 md:mt-16 ml-16 mt-20 '>
                                                <Image
                                                    className=' rounded-full md:w-[15rem] md:h-28 w-36 h-36  border-slate-300 border-4 shadow-lg shadow-slate-300'
                                                    src={item.profilePicture}
                                                    alt='img'
                                                />

                                                <div className='text-[#cea666] gap-6 mt-6 font-bold'><span className='ml-1'>{item.firstName}</span><span className='ml-2'>{item.lastName}</span></div>
                                                <div className=' mt-2 text-sm'>{item.email}</div>
                                                <button onClick={() => editProfile(item)} className=' mt-11  bg-[#cea666] text-white rounded-full w-28 h-9 shadow-lg shadow-slate-300'>Edit</button>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* rigth side  */}
                    <div className='border mt-8 rounded-md bg-white md:w-[800px] md:h-[450px]  h-[550px] shadow-md shadow-black'>
                        <div className='flex-1 grid-flow-row items-center ml-10 mt-8'>
                            <div className='md:flex '>
                                <div className='mb-4'>
                                    <label className='block text-gray-700'>First Name *</label>
                                    <input type='text' className='md:w-[282px] md:h-[50px] w-full  bg-slate-100 px-4 py-2 border rounded-xl' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className='mb-4 md:ml-7'>
                                    <label className='block text-gray-700'>Last Name *</label>
                                    <input type='text' className='md:w-[282px] md:h-[50px] w-full  bg-slate-100 px-4 py-2 border rounded-xl' required value={lastName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                            </div>
                            <div className='md:flex '>
                                <div className='mb-4'>
                                    <label className='block text-gray-700'>Username *</label>
                                    <input type='text' className='md:w-[282px] md:h-[50px] w-full  bg-slate-100 px-4 py-2 border rounded-xl' required value={userName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className='mb-4 md:ml-7'>
                                    <label className='block text-gray-700'>Phone *</label>
                                    <input type='number' className='md:w-[282px] md:h-[50px] w-full  bg-slate-100 px-4 py-2 border rounded-xl' required value={phone} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700'>Email *</label>
                                <input type='email' className='md:w-[282px] md:h-[50px] w-full  bg-slate-100 px-4 py-2 border rounded-xl' required value={email} onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                        </div>
                        <div className='items-center flex justify-center md:justify-end md:mr-8'>
                            <button className=' mt-11 ml-11 bg-[#cea666] text-white rounded-full w-28 h-9 shadow-lg shadow-slate-300'>Update</button>
                        </div>

                    </div>
                </div>

                {/* 3 section */}
               <div className='md:flex gap-8 justify-center  items-center '>
               <div className='bg-white shadow-md shadow-black   flex-col-reverse mt-5 items-center rounded-md md:w-[1156px] md:h-[281px] mb-9 md:mt-30 border  md:mt-8  flex justify-between'>
                    <div className='md:flex md:gap-x-[23rem]'>
                        {/* leaf side */}
                        <div className='ml-8 mt-4 rounded   w-[350px] h-[250px] '>
                            <h3 className='text-3xl font-bold mt-4'>Account Overview</h3>
                            <div className='flex gap-3 mt-16'>
                                <p className='flex'>Balance: </p><button className='flex gap-2 bg-[#cea666] text-white rounded-full w-36 h-10 text-center items-center'><span className='ml-2'><svg className='items-center gap-1' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.48053 13.3392L6.68781 11.1319C6.13211 10.547 5.82689 9.76811 5.83722 8.96138C5.84755 8.15465 6.17261 7.38387 6.7431 6.81338C7.3136 6.24288 8.08438 5.91782 8.89111 5.90749C9.69784 5.89716 10.4767 6.20239 11.0616 6.75809L13.3067 4.51266C12.0726 3.68473 10.637 3.27035 9.00004 3.26953C5.62152 3.26953 3.10082 5.0291 1.43793 8.54824C1.37109 8.68978 1.33643 8.84436 1.33643 9.00088C1.33643 9.1574 1.37109 9.31198 1.43793 9.45352C2.24969 11.1634 3.26389 12.4586 4.48053 13.3392Z" fill="#D4D4FF" fill-opacity="0.15" />
                                    <path d="M16.5621 8.54648C15.9441 7.24465 15.2087 6.18293 14.3561 5.36133L11.8209 7.89732C12.0333 8.45521 12.0798 9.06259 11.9549 9.6463C11.8299 10.23 11.5389 10.7651 11.1168 11.1872C10.6947 11.6093 10.1595 11.9003 9.5758 12.0252C8.99209 12.1502 8.38471 12.1036 7.82684 11.8912L5.67773 14.0405C6.67383 14.5005 7.78125 14.7305 9 14.7305C12.3785 14.7305 14.8992 12.9709 16.5621 9.45176C16.629 9.31023 16.6636 9.15565 16.6636 8.99912C16.6636 8.8426 16.629 8.68801 16.5621 8.54648Z" fill="#D4D4FF" fill-opacity="0.15" />
                                    <path d="M16.5621 8.54648C15.9442 7.24465 15.2088 6.18293 14.3561 5.36133L13.4617 6.2557C14.191 6.95268 14.8263 7.86445 15.3756 9C13.9131 12.027 11.8371 13.4648 9 13.4648C8.1484 13.4648 7.364 13.3337 6.64682 13.0714L5.67773 14.0405C6.67383 14.5005 7.78125 14.7305 9 14.7305C12.3785 14.7305 14.8992 12.9709 16.5621 9.45176C16.629 9.31023 16.6636 9.15565 16.6636 8.99912C16.6636 8.8426 16.629 8.68801 16.5621 8.54648Z" fill="white" />
                                    <path d="M15.4447 2.91062L14.6954 2.16038C14.6823 2.14731 14.6668 2.13694 14.6497 2.12986C14.6326 2.12278 14.6143 2.11914 14.5959 2.11914C14.5774 2.11914 14.5591 2.12278 14.542 2.12986C14.5249 2.13694 14.5094 2.14731 14.4964 2.16038L12.5738 4.08202C11.5139 3.54062 10.3226 3.26992 9.00004 3.26992C5.62152 3.26992 3.10082 5.02949 1.43793 8.54863C1.37109 8.69016 1.33643 8.84474 1.33643 9.00126C1.33643 9.15779 1.37109 9.31237 1.43793 9.4539C2.10227 10.8531 2.90207 11.9747 3.83735 12.8185L1.97723 14.6781C1.95088 14.7045 1.93607 14.7402 1.93607 14.7775C1.93607 14.8148 1.95088 14.8506 1.97723 14.8769L2.72764 15.6273C2.75401 15.6537 2.78976 15.6685 2.82704 15.6685C2.86432 15.6685 2.90008 15.6537 2.92645 15.6273L15.4447 3.1096C15.4578 3.09654 15.4682 3.08103 15.4752 3.06396C15.4823 3.04689 15.486 3.02859 15.486 3.01011C15.486 2.99163 15.4823 2.97333 15.4752 2.95626C15.4682 2.93919 15.4578 2.92368 15.4447 2.91062ZM2.62445 9.00038C4.08871 5.97343 6.16469 4.53554 9.00004 4.53554C9.95875 4.53554 10.8305 4.70007 11.6213 5.03458L10.3855 6.27033C9.80032 5.95807 9.13022 5.84219 8.47411 5.93976C7.818 6.03734 7.21063 6.3432 6.74159 6.81224C6.27255 7.28129 5.96668 7.88866 5.86911 8.54477C5.77153 9.20088 5.88742 9.87097 6.19967 10.4562L4.7333 11.9226C3.92172 11.2063 3.22211 10.2358 2.62445 9.00038ZM6.96098 9.00038C6.96129 8.69042 7.03471 8.3849 7.17527 8.10864C7.31584 7.83238 7.51959 7.59318 7.76998 7.41046C8.02036 7.22774 8.31032 7.10666 8.61629 7.05706C8.92226 7.00745 9.23561 7.03072 9.5309 7.12497L7.05432 9.60156C6.99224 9.40721 6.96075 9.2044 6.96098 9.00038Z" fill="white" />
                                    <path d="M8.92945 10.968C8.86863 10.968 8.80869 10.9652 8.74928 10.9598L7.8208 11.8882C8.37924 12.1021 8.98767 12.1496 9.57255 12.0251C10.1574 11.9005 10.6937 11.6092 11.1165 11.1864C11.5394 10.7635 11.8307 10.2272 11.9553 9.64237C12.0798 9.0575 12.0323 8.44906 11.8184 7.89062L10.8899 8.8191C10.8954 8.87852 10.8982 8.93846 10.8982 8.99928C10.8983 9.25786 10.8475 9.51393 10.7486 9.75285C10.6497 9.99177 10.5047 10.2089 10.3219 10.3917C10.139 10.5745 9.92195 10.7196 9.68303 10.8184C9.4441 10.9173 9.18803 10.9682 8.92945 10.968Z" fill="white" />
                                </svg>
                                </span>Hide balance </button>
                            </div>
                            {
                                data.map((item, index) => (
                                    <div className='text-5xl mt-6' key={item}>{item.balance}</div>
                                ))
                            }
                        </div>

                        {/* right side  */}
                        <div className='md:ml-8 ml-7 md:mt-4 rounded bg-white  md:w-[350px]  md:h-[250px]  md:ml[px] md:mr-3'>
                            <div className='md:ml-16 md:mt-40'>
                                <div className=''>
                                    {
                                        data.map((item, index) => (
                                            <h1 className='flex gap-2 items-center text-2xl md:ml-14' key={item}>{item.estimatedValue}<span><p className='text-sm mt-2'>Estimated Value</p></span></h1>
                                        ))
                                    }
                                </div>
                                <div className='flex items-center '>
                                    {
                                        data.map((item, index) => (
                                            <h1 className='flex gap-2 items-center text-2xl' key={item}>{item.withdrawalLimit}<span><p className='text-sm mt-2'>Withdrawal Limit</p></span></h1>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
               </div>

            </div>

        </section>
    )
}

export default HomePaje