"use client"

import Link from 'next/link'
import React from 'react'

const data = [
  {
    "sNo": "01",
    "time": "2023-08-30 : 15:55",
    "deviceName": "Chrome 97.0.4692.71(Windows)",
    "Lastloginlocation": "Surat, Gujarat India"
  },
  {
    "sNo": "02",
    "time": "2023-08-30 : 15:55",
    "deviceName": "Chrome 97.0.4692.71(Windows)",
    "Lastloginlocation": "Surat, Gujarat India"
  },
  {
    "sNo": "03",
    "time": "2023-08-30 : 15:55",
    "deviceName": "Chrome 97.0.4692.71(Windows)",
    "Lastloginlocation": "Surat, Gujarat India"
  },
  {
    "sNo": "0",
    "time": "2023-08-30 : 15:55",
    "deviceName": "Chrome 97.0.4692.71(Windows)",
    "Lastloginlocation": "Surat, Gujarat India"
  },
]

const SecurityPage = () => {
  return (
    <section className='bg-slate-200'>
      <div className=''>
        <div className='bg-white shadow-md shadow-slate-300 border m-3 mb-2 h-8 '>
          <div className='mt-1 m-5'> <span className='text-[#cea666] font-medium'>Home/</span>Security</div>
        </div>
        <div className='items-center text-center flex ml-3 gap-x-5  h-16 '>
          <Link href={"/"} className='bg-white hover:bg-[#cea666] ml-3 hover:text-white rounded-full w-28 h-9  shadow-md shadow-slate-300'>Profile setting</Link>
          <Link href={"/security"} className='bg-white hover:bg-[#cea666] hover:text-white rounded-full w-28 h-9  shadow-md shadow-slate-300'>Security</Link>
          <Link href={"/bank"} className='bg-white hover:bg-[#cea666] hover:text-white rounded-full w-28 h-9  shadow-md shadow-slate-300'>Bank Details</Link>        </div>

        {/* 2 section  */}
        <div className='mt-5 md:flex gap-8 justify-center '>
          <div className=' md:mt-8  rounded bg-white md:w-[1100px] md:h-[350px]  h-[420px]  shadow-md shadow-black'>
            <div className=' mt-5 m-9'>
              <div className='flex justify-center md:flex md:justify-start '>
                <h1 className='text-2xl  font-bold mt-10'>Update Password</h1>
              </div>
              <div className='md:flex gap-12 mt-10 md:ml-5'>
                <div className='mb-4'>
                  <label className='block text-gray-700 mb-2'>New Password </label>
                  <input type='password' className='md:w-[456px] md:h-[50px] w-full  bg-slate-100 px-4 py-2 border rounded-xl' required />
                </div>
                <div className='mb-4 '>
                  <label className='block text-gray-700 mb-2'>Confirm Password </label>
                  <input type='password' className='md:w-[465px] md:h-[50px] w-full  bg-slate-100 px-4 py-2 border rounded-xl' required />
                </div>
              </div>
            </div>
            <div className='flex justify-center md:flex md:justify-end md:mr-20 '>
              <button className='mt-5  bg-[#cea666] text-white rounded-full w-28 h-9 shadow-lg shadow-slate-300'>Update</button>
            </div>
          </div>
        </div>

        {/* 3 section */}
      <div className='mt-5 md:flex gap-8 justify-center'>
      <div className=' md:mt-8  rounded bg-white mb-5 md:w-[1100px] md:h-full  h-full w-full shadow-md shadow-black'>
          <div className=' mt-5 m-9'>
            <div className='flex'>
              <table className="md:min-w-full  mt-10  border border-gray-300">
                <thead className=''>
                  <tr className=''>
                    <th className="px-4 py-2 border-b">S.No</th>
                    <th className="px-4 py-2 border-b">Time</th>
                    <th className="px-4 py-2 border-b ">Device Name</th>
                    <th className="px-4 py-2 border-b">Last login location</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item} className='hover:bg-slate-100'>
                      <td className="px-4 py-2  border-b">{item.sNo}</td>
                      <td className="px-4 py-2  border-b">{item.time}</td>
                      <td className="px-4 py-2  border-b">{item.deviceName}</td>
                      <td className="px-4 py-2  border-b">{item.Lastloginlocation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='flex mt-5 mb-2 md:mt-16 gap-x-14 md:gap-x-[33rem]'>
              <p>Showing 1–8 of 20 results</p>
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

export default SecurityPage