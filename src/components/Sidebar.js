"use client"

import React, { useState } from 'react'
import arrow from '@/assets/arrow.svg'
import Image from 'next/image'
import Link from 'next/link'
import Dashboard from '@/assets/dashboard.svg'
import Buy from '@/assets/buy.svg'
import Sell from '@/assets/Sell.svg'
import Deposit from '@/assets/Deposit.svg'
import Withdrawal from '@/assets/Withdrawal.svg'
import Exchange from '@/assets/Exchange.svg'
import History from '@/assets/History.svg'
import Bankdetails from '@/assets/Bank details.svg'
import Rewards from '@/assets/Rewards.svg'

const Sidebar = () => {
    const menus = [
        { name: "Dashboard", link: "/dashboard", svg: Dashboard },
        { name: "Buy", link: "/buy", svg: Buy },
        { name: "Sell", link: "/sell", svg: Sell },
        { name: "Deposit", link: "/deposit", svg: Deposit },
        { name: "Withdrawal", link: "/withdrawal", svg: Withdrawal },
        { name: "Exchange", link: "/exchange", svg: Exchange },
        { name: "History", link: "/history", svg: History },
        { name: "Bank details", link: "/bank", svg: Bankdetails },
        { name: "Rewards", link: "/rewards", svg: Rewards }
    ];

     const [open, setOpen] = useState(true);

    return (
        <section className='flex gap-6 '>
            <div>
                <div className={` min-h-screen ${open ? 'w-72' : 'w-16' } duration-500 px-4 `}>
                    <div className='py-3 flex justify-end'>
                        <Image className='cursor-pointer' src={arrow} alt='arrow' onClick={()=>setOpen(!open)} />
                    </div>
                    <div className='text-black mt-4 flex flex-col gap-4 relative'>
                        {menus.map((item, i) => (
                            <Link href={item.link} key={i} className='flex items-center gap-3.5 text-sm font-medium p-2 hover:text-[#cea666]'>
                                <div>
                                    <Image className=' ' src={item.svg} alt={`${item.name}`} width={20} height={20} />
                                </div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 3}00ms`
                                    }}
                                 className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{item.name}</h2>
                                 <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semiboldn whitespace-pre text-[#cea666] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                                    {item.name}
                                 </h2>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sidebar
