"use client"

import React from 'react'
import RewardLogo from '@/assets/rewards/rewardslogo.svg'
import Image1 from '@/assets/rewards/image.svg'
import Image from 'next/image'
import ButtonPage from '@/components/ButtonComponents/ButtonPage'
import Stand from '@/assets/exchange/stand.svg'
import Solid from '@/assets/exchange/solid.svg'

const data = [
    {
        "SNo": "01",
        "Time": "2023-08-30 : 15:55",
        "Type": "BUY",
        "SOLID": "01",
        "Payment": "$ 8.02",
        "Status": "Cancel",
    },
    {
        "SNo": "02",
        "Time": "2023-08-30 : 15:55",
        "Type": "BUY",
        "SOLID": "02",
        "Payment": "$ 8.02",
        "Status": "Cancel",
    },
]

const ExchangePage = () => {
    return (
        <section className='bg-slate-200'>
            <div>
                <div>
                    <div className='bg-white shadow-md shadow-slate-300 border m-3 mb-2 h-8 '>
                        <div className='mt-1 m-5'> <span className='text-[#cea666] font-medium'>Home/</span> Rewards </div>
                    </div>

                    {/* 3 section */}
                    <div className=' md:flex gap-5  justify-center flex '>
                        <div className='md:flex'>
                            {/* left side  */}
                            <div>
                                <div className=' md:ml-20 md:mt-8 w-[396px]  rounded bg-white   md:w-[750px] md:h-[544px]  h-full  shadow-md shadow-black'>
                                    <h4 className='ml-2 font-bold text-sm'>Exchange SOLID with STAND</h4>
                                    <div className='md:ml-36 mt-16'>
                                        <div className=''>
                                            <p className='m-1'>Spend</p>
                                            <div className='bg-slate-100 md:w-[430px] h-[84px]'>
                                                <div>
                                                    <div className='flex justify-between '>
                                                        <Image className='mt-5 ml-4' src={Stand} alt='stand' />
                                                        <p className='text-[#cea666] font-bold text-2xl mr-4 mt-5'>1000</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <div className='flex'><p className='mt-5'>Receive</p> <span className='ml-32'><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25Z" fill="#15191F" />
                                                <path d="M20.2538 28.0752L24.8949 33.4913C24.9697 33.5786 25.0625 33.6486 25.1669 33.6967C25.2713 33.7447 25.3849 33.7695 25.4998 33.7695C25.6148 33.7695 25.7284 33.7447 25.8328 33.6967C25.9372 33.6486 26.03 33.5786 26.1048 33.4913L30.7459 28.0752C31.1889 27.5583 30.8216 26.7597 30.141 26.7597L20.8574 26.7597C20.1767 26.7597 19.8095 27.5583 20.2538 28.0752Z" fill="#CEA666" />
                                                <path d="M20.2538 21.6894L24.8949 16.2733C24.9697 16.1861 25.0625 16.116 25.1669 16.068C25.2713 16.02 25.3849 15.9951 25.4998 15.9951C25.6148 15.9951 25.7284 16.02 25.8328 16.068C25.9372 16.116 26.03 16.1861 26.1048 16.2733L30.7459 21.6894C31.1889 22.2064 30.8216 23.0049 30.141 23.0049L20.8574 23.0049C20.1767 23.0049 19.8095 22.2064 20.2538 21.6894Z" fill="#CEA666" />
                                            </svg>

                                            </span></div>
                                            <div className='bg-slate-100 md:w-[430px] h-[84px]'>
                                                <div className='flex justify-between'>
                                                    <Image className='mt-5 ml-4' src={Solid} alt='Solid' />
                                                    <p className='text-[#cea666] font-bold text-2xl mr-4 mt-5'>0.000395285</p>
                                                </div>
                                            </div>

                                            <div className='bg-slate-200 w-[373px] h-[42px] ml-4 md:ml-8 mt-9 items-center flex justify-center'><p>Price: 1 SOLID =2,514,640.00STAND</p> </div>

                                            <div className='flex justify-center md:mt-9 mt-10 md:-ml-32 '>
                                                <button className='  bg-[#cea666] text-white rounded-full w-28 h-9 shadow-lg shadow-slate-300'>Refer now</button>
                                            </div>
                                            <div className='flex justify-center mt-8 md:mt-6 md:-ml-36'>
                                                <p className='flex'><span><Image src={RewardLogo} alt='logo' /></span>Refer & Earn 2% Commission</p>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* right side  */}
                            <div>
                                <div className=' md:ml-10 md:mt-8 mt-5 rounded  bg-white  md:w-[564px] md:h-[544px]  h-full  shadow-md shadow-black'>
                                    <div>
                                        <div className='flex justify-between'>
                                            <h5 className='ml-5 font-bold text-xl'>FAQ</h5>
                                            <span className='mr-5'><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="22.5" cy="22.5" r="22.5" fill="#E1E5EA" />
                                                <path d="M13 23C13 28.5225 17.4775 33 23 33C28.5225 33 33 28.5225 33 23C33 17.4775 28.5225 13 23 13C17.4775 13 13 17.4775 13 23ZM24.0417 18C24.0417 18.2763 23.9319 18.5412 23.7366 18.7366C23.5412 18.9319 23.2763 19.0417 23 19.0417C22.7237 19.0417 22.4588 18.9319 22.2634 18.7366C22.0681 18.5412 21.9583 18.2763 21.9583 18C21.9583 17.7237 22.0681 17.4588 22.2634 17.2634C22.4588 17.0681 22.7237 16.9583 23 16.9583C23.2763 16.9583 23.5412 17.0681 23.7366 17.2634C23.9319 17.4588 24.0417 17.7237 24.0417 18ZM23 20.5C23.221 20.5 23.433 20.5878 23.5893 20.7441C23.7455 20.9004 23.8333 21.1123 23.8333 21.3333V28C23.8333 28.221 23.7455 28.433 23.5893 28.5893C23.433 28.7455 23.221 28.8333 23 28.8333C22.779 28.8333 22.567 28.7455 22.4107 28.5893C22.2545 28.433 22.1667 28.221 22.1667 28V21.3333C22.1667 21.1123 22.2545 20.9004 22.4107 20.7441C22.567 20.5878 22.779 20.5 23 20.5Z" fill="#CEA666" />
                                            </svg>
                                            </span>
                                        </div>
                                        <p className='ml-10 mt-9 text-sm'>
                                            How to Refer: Where You refer in 3 Steps<br />
                                            How to get Refer & Earn 2% Commission?(4:10)
                                        </p>
                                        <div className='ml-1 md:ml-20 mt-16'>
                                            <Image src={Image1} alt='image' />
                                        </div>
                                        <p className='md:ml-10 ml-10 mt-6 mb-5'>Terms of Service</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* 4 section */}
                    <div className=' md:flex gap-8 justify-center  items-center '>
                        <div className='mt-10 md:mt-8 md:flex justify-between items-center flex bg-slate-200 md:w-[1100px] md:h-[90px] w-full  h-[110px]  '>
                            <h1 className='font-bold ml-14'>Recent Exchange</h1>
                            <div className='flex justify-between items-center'>
                                <button className='bg-white mt-2 mr-20  hover:bg-slate-100  rounded-full w-28 h-9 flex  shadow-md shadow-slate-300 font-bold'><span className='ml-6 mt-1'>Filter </span>
                                    <svg className='mt-2 ml-2 justify-end' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 2.5H3.125V8.75H4.375V2.5ZM12 8.75H8L7.5 8.0625V6.8125L8 6.25H12L12.5 6.875V8.125L12 8.75ZM5.75 12.5H1.75L1.25 11.875V10.625L1.75 10H5.75L6.25 10.625V11.875L5.75 12.5ZM10.625 2.5H9.375V5H10.625V2.5ZM9.375 10H10.625V17.5H9.375V10ZM4.375 13.75H3.125V17.5H4.375V13.75ZM14.25 13.75H18.2375L18.7375 13.125V11.9375L18.2375 11.3125H14.25L13.75 11.9375V13.125L14.25 13.75ZM16.875 2.5H15.625V10H16.875V2.5ZM15.625 15H16.875V17.5H15.625V15Z" fill="#CEA666" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 5 section */}
                    <div className='mt-2 md:flex gap-8 justify-center mb-16'>
                        <div className='ml-2 md:ml-20 md:mt-8  rounded bg-white  md:w-[1100px] md:h-full  h-[490px]  shadow-md shadow-black'>
                            <table className="md:min-w-full  mt-10  ">
                                <thead className=''>
                                    <tr className=''>
                                        <th className="px-4 py-2 border-b">S.No</th>
                                        <th className="px-4 py-2 border-b">Time</th>
                                        <th className="px-4 py-2 border-b ">Type</th>
                                        <th className="px-4 py-2 border-b">SOLID</th>
                                        <th className="px-4 py-2 border-b">Payment</th>
                                        <th className="px-4 py-2 border-b">STAND</th>

                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {data.map((item, index) => (
                                        <tr key={item} className='hover:bg-slate-100 '>
                                            <td className="px-4 py-2  border-b">{item.SNo}</td>
                                            <td className="px-4 py-2  border-b">{item.Time}</td>
                                            <td className="px-4 py-2  border-b">{item.Type}</td>
                                            <td className="px-4 py-2  border-b">{item.SOLID}</td>
                                            <td className="px-4 py-2  border-b">{item.Payment}</td>
                                            <td className="px-4 py-2  border-b "><ButtonPage status={item.Status} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default ExchangePage