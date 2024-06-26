"use client"

import React from 'react'
import Image1 from '@/assets/rewards/image.svg'
import Image from 'next/image'
import ButtonPage from '@/components/ButtonComponents/ButtonPage'
import Stand from '@/assets/exchange/stand.svg'
import Receive from '@/assets/sall/receive.svg'

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

const SellPage = () => {
  return (
    <section className='bg-slate-200'>
            <div>
                <div>
                    <div className='bg-white shadow-md shadow-slate-300 border m-3 mb-2 h-8 '>
                        <div className='mt-1 m-5'> <span className='text-[#cea666] font-medium'>Home/</span> Sell </div>
                    </div>

                    {/* 3 section */}
                    <div className=' md:flex gap-5  justify-center flex '>
                        <div className='md:flex'>
                            {/* left side  */}
                            <div>
                                <div className=' md:ml-20 md:mt-8 w-[396px]  rounded bg-white   md:w-[750px] md:h-[544px]  h-full  shadow-md shadow-black'>
                                    <h4 className='ml-2 font-bold text-sm'>Sell SOLID</h4>
                                    <div className='md:ml-36 mt-16'>
                                        <div className=''>
                                            <p className='m-1'>Spend</p>
                                            <div className='bg-slate-100 md:w-[430px] h-[84px]'>
                                                <div>
                                                    <div className='flex justify-between '>
                                                        <Image className='mt-5 ml-4' src={Stand} alt='stand' />
                                                        <p className='text-[#cea666] font-bold text-2xl mr-4 mt-5'>5</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <div className='flex justify-between'><p className=''>Receive</p> 
                                            <span className='md:mr-48'>Available:0.00</span>
                                            </div>
                                            <div className='bg-slate-100 md:w-[430px] h-[84px]'>
                                                <div className='flex justify-between'>
                                                    <Image className='mt-5 ml-4' src={Receive} alt='Solid' />
                                                    <p className='text-[#cea666] font-bold text-2xl mr-4 mt-5'>36.05</p>
                                                </div>
                                            </div>

                                            <div className='bg-slate-200 w-[400px] h-[42px]  md:ml-7 mt-9 items-center flex justify-center'><p>You will receive the Gold purchase price: €29.56</p> </div>

                                            <div className='flex justify-center md:mt-9 mt-10 md:-ml-32 '>
                                                <button className='  bg-[#cea666] text-white rounded-full w-28 h-9 shadow-lg shadow-slate-300'>CONTINUE</button>
                                            </div>
                                            <div className='flex justify-center mt-8 md:mt-6 md:-ml-36'>
                                                <p className='flex'>Estimated price: 1 SOLID = €7.21</p>
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
                                        Sell SOLID on: Where You Trade in 3 Steps<br />
                                        How to Sell? (4:10)
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
                            <h1 className='font-bold ml-14'>Recent Sell</h1>
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
                        <div className='ml-2 md:ml-20 md:mt-8  rounded bg-white  md:w-[1100px] md:h-full  h-full  shadow-md shadow-black'>
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

export default SellPage