"use client"

import Image from 'next/image'
import React from 'react'
import BB from '@/assets/dashboard/bb.png'
import Daygaram from '@/assets/dashboard/daygaram.svg'
import Qr from '@/assets/deposit/qr.png'
import ButtonPage from '@/components/ButtonComponents/ButtonPage'



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


const DashboardPage = () => {
  return (
    <section className='bg-slate-200'>
      <div>
        <div className=''>

          {/* 1 section */}
          <div className='bg-white shadow-md shadow-slate-300 border m-3 mb-2 h-8 '>
            <div className='mt-1 m-5'> <span className='text-[#cea666] font-medium'>Welcome/</span>,  Ankit.koffeekodes@gmail.com! </div>
          </div>

          {/* 2 section */}
          <div>
            <div className='md:flex md:justify-center mt-9 justify-center ml-16'>
              {/*1 box  */}
              <div className='bg-white w-[239.53px] h-[121px] md:ml-8 mt-5 rounded-sm  shadow-lg shadow-slate-500'>
                <div className='flex'><span className=''><Image className='w-[43.91px] h-[44px] rounded-full ml-5 mt-3' src={BB} alt='b/logo' /></span>
                  <div className='mt-3 ml-4'>
                    <h4 className='text-[#cea666] font-bold'>STAND</h4>
                    <span className='text-sm'>47,014.10 USD</span>
                  </div>
                </div>
                <div>
                  <svg width="240" height="57" viewBox="0 0 240 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.5711 13.6851C20.3414 13.8394 0 22.3481 0 22.3481V57H239.528V1C239.528 1 215.375 11.6885 196.726 13.6851C175.099 16.0005 160.097 4.09392 140.342 4.09392C120.587 4.09392 106.161 31.3279 81.4889 29.7735C61.4206 28.5091 54.7076 13.4667 34.5711 13.6851Z" fill="url(#paint0_linear_123_2639)" />
                    <path d="M0.817871 22.2308C0.817871 22.2308 21.0286 13.7689 35.1669 13.6154C55.1741 13.3982 61.8439 28.3579 81.7834 29.6154C106.297 31.1613 120.63 4.07692 140.258 4.07692C159.886 4.07692 174.792 15.918 196.28 13.6154C214.809 11.6298 238.807 1 238.807 1" stroke="#CEA666" stroke-linecap="round" />
                    <defs>
                      <linearGradient id="paint0_linear_123_2639" x1="119.764" y1="1" x2="119.996" y2="56.6814" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#CEA666" stop-opacity="0.28" />
                        <stop offset="0.841667" stop-color="#CEA666" stop-opacity="0.13" />
                      </linearGradient>
                    </defs>
                  </svg>

                </div>
              </div>
              {/*2 box  */}
              <div className='bg-white w-[239.53px] h-[121px] md:ml-8 mt-5 rounded-sm  shadow-lg shadow-slate-500'>
                <div className='flex'><span className=''><Image className='w-[43.91px] h-[44px] rounded-full ml-5 mt-3' src={BB} alt='b/logo' /></span>
                  <div className='mt-3 ml-4'>
                    <h4 className='text-[#cea666] font-bold'>STAND</h4>
                    <span className='text-sm'>47,014.10 USD</span>
                  </div>
                </div>
                <div>
                  <svg width="241" height="57" viewBox="0 0 241 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.0618 13.6851C20.8321 13.8394 0.490723 22.3481 0.490723 22.3481V57H240.019V1C240.019 1 215.865 11.6885 197.216 13.6851C175.59 16.0005 160.588 4.09392 140.833 4.09392C121.078 4.09392 106.651 31.3279 81.9796 29.7735C61.9113 28.5091 55.1984 13.4667 35.0618 13.6851Z" fill="url(#paint0_linear_123_2647)" />
                    <path d="M1.30859 22.2308C1.30859 22.2308 21.5193 13.7689 35.6576 13.6154C55.6648 13.3982 62.3347 28.3579 82.2741 29.6154C106.787 31.1613 121.121 4.07692 140.749 4.07692C160.377 4.07692 175.283 15.918 196.771 13.6154C215.3 11.6298 239.298 1 239.298 1" stroke="#CEA666" stroke-linecap="round" />
                    <defs>
                      <linearGradient id="paint0_linear_123_2647" x1="120.255" y1="1" x2="120.486" y2="56.6814" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#CEA666" stop-opacity="0.28" />
                        <stop offset="0.841667" stop-color="#CEA666" stop-opacity="0.13" />
                      </linearGradient>
                    </defs>
                  </svg>

                </div>
              </div>
              {/*3 box  */}
              <div className='bg-white w-[239.53px] h-[121px] md:ml-8 mt-5 rounded-sm  shadow-lg shadow-slate-500'>
                <div className='flex'><span className=''><Image className='w-[43.91px] h-[44px] rounded-full ml-5 mt-3' src={BB} alt='b/logo' /></span>
                  <div className='mt-3 ml-4'>
                    <h4 className='text-[#cea666] font-bold'>STAND</h4>
                    <span className='text-sm'>47,014.10 USD</span>
                  </div>
                </div>
                <div>
                  <svg width="241" height="57" viewBox="0 0 241 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.5525 13.6851C21.3228 13.8394 0.981445 22.3481 0.981445 22.3481V57H240.509V1C240.509 1 216.356 11.6885 197.707 13.6851C176.081 16.0005 161.078 4.09392 141.323 4.09392C121.569 4.09392 107.142 31.3279 82.4704 29.7735C62.402 28.5091 55.6891 13.4667 35.5525 13.6851Z" fill="url(#paint0_linear_123_2655)" />
                    <path d="M1.79932 22.2308C1.79932 22.2308 22.0101 13.7689 36.1483 13.6154C56.1556 13.3982 62.8254 28.3579 82.7648 29.6154C107.278 31.1613 121.612 4.07692 141.24 4.07692C160.868 4.07692 175.774 15.918 197.261 13.6154C215.791 11.6298 239.789 1 239.789 1" stroke="#CEA666" stroke-linecap="round" />
                    <defs>
                      <linearGradient id="paint0_linear_123_2655" x1="120.745" y1="1" x2="120.977" y2="56.6814" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#CEA666" stop-opacity="0.28" />
                        <stop offset="0.841667" stop-color="#CEA666" stop-opacity="0.13" />
                      </linearGradient>
                    </defs>
                  </svg>

                </div>
              </div>
              {/*4 box  */}
              <div className='bg-white w-[239.53px] h-[121px] md:ml-8 mt-5 rounded-sm  shadow-lg shadow-slate-500'>
                <div className='flex'><span className=''><Image className='w-[43.91px] h-[44px] rounded-full ml-5 mt-3' src={BB} alt='b/logo' /></span>
                  <div className='mt-3 ml-4'>
                    <h4 className='text-[#cea666] font-bold'>STAND</h4>
                    <span className='text-sm'>47,014.10 USD</span>
                  </div>
                </div>
                <div>
                  <svg width="240" height="57" viewBox="0 0 240 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.0427 13.6851C20.8131 13.8394 0.47168 22.3481 0.47168 22.3481V57H240V1C240 1 215.846 11.6885 197.197 13.6851C175.571 16.0005 160.569 4.09392 140.814 4.09392C121.059 4.09392 106.632 31.3279 81.9606 29.7735C61.8923 28.5091 55.1793 13.4667 35.0427 13.6851Z" fill="url(#paint0_linear_123_2663)" />
                    <path d="M1.28955 22.2308C1.28955 22.2308 21.5003 13.7689 35.6385 13.6154C55.6458 13.3982 62.3156 28.3579 82.255 29.6154C106.768 31.1613 121.102 4.07692 140.73 4.07692C160.358 4.07692 175.264 15.918 196.752 13.6154C215.281 11.6298 239.279 1 239.279 1" stroke="#CEA666" stroke-linecap="round" />
                    <defs>
                      <linearGradient id="paint0_linear_123_2663" x1="120.236" y1="1" x2="120.467" y2="56.6814" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#CEA666" stop-opacity="0.28" />
                        <stop offset="0.841667" stop-color="#CEA666" stop-opacity="0.13" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* box end  */}

          {/* 3 section */}
          <div>
            <div className=' md:flex gap-5  justify-center flex '>
              <div className='md:flex'>

                {/* left side  */}
                <div>
                  <div className=' md:ml-20 md:mt-16 w-full  rounded bg-white   md:w-[700px] md:h-[359px]  h-full  shadow-md shadow-black'>
                    <div>
                      <div className='flex justify-between'>
                        <h1 className='mt-3 ml-5'>SOLID Value Chart in $</h1>
                        <div className='flex mt-4'><span className='mr-3 mt-1'><svg width="41" height="17" viewBox="0 0 41 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <mask id="path-1-inside-1_123_2610" fill="white">
                            <rect y="0.195496" width="41" height="16.1955" rx="2" />
                          </mask>
                          <rect y="0.195496" width="41" height="16.1955" rx="2" fill="#CEA666" stroke="#C4CEE4" stroke-width="6" mask="url(#path-1-inside-1_123_2610)" />
                        </svg>
                        </span><p className='mr-3'>SOLID Value [$]</p></div>
                      </div>
                    </div>

                    <div className='mt-6 ml-4'>
                      <Image src={Daygaram} />
                    </div>

                  </div>
                </div>
                {/* right side  */}
                <div>
                  <div className=' md:ml-10 md:mt-16 mt-5 rounded  bg-white md:w-[296px] md:h-[359px]  h-full  shadow-md shadow-black'>
                    <div>
                      <div>
                        <div className=''>
                          <h3 className=' font-bold'>Deposit STAND or SOLID</h3>
                        </div>
                      </div>
                      <div className='md:ml-16 mt-16 ml-14'>
                        <div className='w-[165px] h-[165px] bg-slate-100 rounded-sm'>
                          <div className=' items-center justify-center flex '>
                            <Image className='w-[134px] h-[134px] mt-[18px]' src={Qr} alt='qr/cord' />
                          </div>
                        </div>
                      </div>

                      <div className='md:ml-[90px] ml-20 mt-5'>
                        <h2 className='font-bold'>Wallet Address</h2>
                      </div>

                      <div className='bg-slate-100 w-[270px] h-[42px] md:ml-3 mt-3  items-center flex justify-between '>
                        <p className='ml-1 text-black'>0xE38fb5DD1c837b4DFe...</p>
                        <span className=' bg-slate-200 h-[42px] w-[42px] flex'><svg className='justify-center items-center flex ml-2 mt-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.875 2.5H6.875C6.70924 2.5 6.55027 2.56585 6.43306 2.68306C6.31585 2.80027 6.25 2.95924 6.25 3.125V6.25H3.125C2.95924 6.25 2.80027 6.31585 2.68306 6.43306C2.56585 6.55027 2.5 6.70924 2.5 6.875V16.875C2.5 17.0408 2.56585 17.1997 2.68306 17.3169C2.80027 17.4342 2.95924 17.5 3.125 17.5H13.125C13.2908 17.5 13.4497 17.4342 13.5669 17.3169C13.6842 17.1997 13.75 17.0408 13.75 16.875V13.75H16.875C17.0408 13.75 17.1997 13.6842 17.3169 13.5669C17.4342 13.4497 17.5 13.2908 17.5 13.125V3.125C17.5 2.95924 17.4342 2.80027 17.3169 2.68306C17.1997 2.56585 17.0408 2.5 16.875 2.5ZM16.25 12.5H13.75V6.875C13.75 6.70924 13.6842 6.55027 13.5669 6.43306C13.4497 6.31585 13.2908 6.25 13.125 6.25H7.5V3.75H16.25V12.5Z" fill="#CEA666" />
                        </svg>
                        </span>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>



          {/* 4 section */}
          <div className=' md:flex gap-8 justify-center  items-center '>
            <div className='mt-10 md:mt-8 md:flex justify-between items-center flex bg-slate-200 md:w-[1100px] md:h-[90px] w-full  h-[110px]  '>
              <h1 className='font-bold md:ml-24'>Recent Exchange</h1>
              <div className='flex justify-between items-center'>
                <button className='bg-white mt-2   hover:bg-slate-100  rounded-full w-28 h-9 flex  shadow-md shadow-slate-300 font-bold'><span className='ml-6 mt-1'>Filter </span>
                  <svg className='mt-2 ml-2 justify-end' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 2.5H3.125V8.75H4.375V2.5ZM12 8.75H8L7.5 8.0625V6.8125L8 6.25H12L12.5 6.875V8.125L12 8.75ZM5.75 12.5H1.75L1.25 11.875V10.625L1.75 10H5.75L6.25 10.625V11.875L5.75 12.5ZM10.625 2.5H9.375V5H10.625V2.5ZM9.375 10H10.625V17.5H9.375V10ZM4.375 13.75H3.125V17.5H4.375V13.75ZM14.25 13.75H18.2375L18.7375 13.125V11.9375L18.2375 11.3125H14.25L13.75 11.9375V13.125L14.25 13.75ZM16.875 2.5H15.625V10H16.875V2.5ZM15.625 15H16.875V17.5H15.625V15Z" fill="#CEA666" />
                  </svg>
                </button>
              </div>
            </div>
          </div>


          {/* 5 section */}
          <div className=' md:flex gap-5  justify-center flex'>
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

export default DashboardPage