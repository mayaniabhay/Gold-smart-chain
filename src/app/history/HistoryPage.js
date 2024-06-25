import Link from 'next/link'
import React from 'react'
import Red from '@/assets/button/red.svg'
import Green from '@/assets/button/red.svg'
import Gre from '@/assets/button/red.svg'
import Goldan from '@/assets/button/red.svg'
import ButtonPage from '@/components/ButtonComponents/ButtonPage'



const data = [
    {
        "sNo": "01",
        "time": "2023-08-30 : 15:55",
        "from": "BUY",
        "tO": "01",
        "solid": "$ 8.02",
        "stand": "Cancel",
    },
    {
        "sNo": "02",
        "time": "2023-08-30 : 15:55",
        "from": "BUY",
        "tO": "02",
        "solid": "$ 8.02",
        "stand": "Cancel",
    },
    {
        "sNo": "03",
        "time": "2023-08-30 : 15:55",
        "from": "BUY",
        "tO": "03",
        "solid": "$ 8.02",
        "stand": "Cancel",
    },
    {
        "sNo": "04",
        "time": "2023-08-30 : 15:55",
        "from": "BUY",
        "tO": "04",
        "solid": "$ 8.02",
        "stand": "Cancel",
    },
]

const HistoryPage = () => {
    return (
        <section className='bg-slate-200'>
            <div>
                <div>
                    <div className='bg-white shadow-md shadow-slate-300 border m-3 mb-2 h-8 '>
                        <div className='mt-1 m-5'> <span className='text-[#cea666] font-medium'>Home/</span>Transaction History</div>
                    </div>
                    <div className='mt-7  items-center md:flex md:justify-center ml-1 md:gap-14 text-center h-16'>
                        <Link href={"/withdrawal"} className='bg-white hover:bg-[#cea666] ml-3 hover:text-white rounded-full w-28 h-9  shadow-md shadow-slate-300'>Withdrawal </Link>
                        <Link href={"/deposit"} className='bg-white hover:bg-[#cea666] ml-3 hover:text-white rounded-full w-28 h-9  shadow-md shadow-slate-300'>Deposit </Link>
                        <Link href={"/buy"} className='bg-white hover:bg-[#cea666] ml-3 hover:text-white rounded-full w-28 h-9  shadow-md shadow-slate-300'>Buy </Link>
                        <Link href={"/sell"} className='bg-white hover:bg-[#cea666] ml-3 hover:text-white rounded-full w-28 h-9  shadow-md shadow-slate-300'>Sell </Link>
                        <Link href={"/exchange"} className='bg-white hover:bg-[#cea666] ml-3 hover:text-white rounded-full w-28 h-9  shadow-md shadow-slate-300'>Exchange </Link>
                    </div>

                    {/* 3 section */}
                    <div className=' md:flex gap-8 justify-center flex '>
                        <div className='mt-10 md:mt-8 md:flex justify-between items-center ml-40 bg-slate-200 md:w-[1100px] md:h-[90px] w-full  h-[110px]  '>
                            <h1 className='font-bold md:ml-5'>Deposit By Crypto History</h1>
                            <div className=''>
                                <button className='bg-white mt-2 md:mr-7 hover:bg-slate-100 ml-3 rounded-full w-28 h-9 flex  shadow-md shadow-slate-300 font-bold'><span className='ml-6 mt-1'>Filter </span>
                                    <svg className='mt-2 ml-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 2.5H3.125V8.75H4.375V2.5ZM12 8.75H8L7.5 8.0625V6.8125L8 6.25H12L12.5 6.875V8.125L12 8.75ZM5.75 12.5H1.75L1.25 11.875V10.625L1.75 10H5.75L6.25 10.625V11.875L5.75 12.5ZM10.625 2.5H9.375V5H10.625V2.5ZM9.375 10H10.625V17.5H9.375V10ZM4.375 13.75H3.125V17.5H4.375V13.75ZM14.25 13.75H18.2375L18.7375 13.125V11.9375L18.2375 11.3125H14.25L13.75 11.9375V13.125L14.25 13.75ZM16.875 2.5H15.625V10H16.875V2.5ZM15.625 15H16.875V17.5H15.625V15Z" fill="#CEA666" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 4 section */}
                    <div className='mt-2 md:flex gap-8 justify-center mb-16'>
                        <div className='ml-2 md:ml-20 md:mt-8  rounded bg-white  md:w-[1100px] md:h-full  h-full shadow-md shadow-black'>
                            <div>
                                <table className="md:min-w-full  mt-10  ">
                                    <thead className=''>
                                        <tr className=''>
                                            <th className="px-4 py-2 border-b">S.No</th>
                                            <th className="px-4 py-2 border-b">Time</th>
                                            <th className="px-4 py-2 border-b ">From</th>
                                            <th className="px-4 py-2 border-b">TO</th>
                                            <th className="px-4 py-2 border-b">SOLID</th>
                                            <th className="px-4 py-2 border-b">STAND</th>

                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        {data.map((item, index) => (
                                            <tr key={item} className='hover:bg-slate-100 '>
                                                <td className="px-4 py-2  border-b">{item.sNo}</td>
                                                <td className="px-4 py-2  border-b">{item.time}</td>
                                                <td className="px-4 py-2  border-b">{item.from}</td>
                                                <td className="px-4 py-2  border-b">{item.tO}</td>
                                                <td className="px-4 py-2  border-b">{item.solid}</td>
                                                <td className="px-4 py-2  border-b "><ButtonPage status={item.stand} /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='flex mt-5 mb-2 md:mt-16 gap-x-14 md:gap-x-[33rem]'>
                                <p className='ml-2'>Showing 1–8 of 20 results</p>
                                <div className='flex gap-1 md:gap-3'>
                                    <p className=''>PREVIOUS</p>
                                    <button className='bg-white hover:bg-[#cea666] text-black text-sm hover:text-white w-8 h-7 flex justify-center rounded-full items-center'>1</button>
                                    <button className='bg-white hover:bg-[#cea666] text-black text-sm hover:text-white w-8 h-7 flex justify-center rounded-full items-center'>2</button>
                                    <button className='bg-white hover:bg-[#cea666] text-black text-sm hover:text-white w-8 h-7 flex justify-center rounded-full items-center'>3</button>
                                    <p>.......</p>
                                    <button className='bg-white hover:bg-[#cea666] text-black text-sm hover:text-white w-8 h-7 flex justify-center rounded-full items-center'>10</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default HistoryPage