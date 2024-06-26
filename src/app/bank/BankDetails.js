import Link from 'next/link'
import React from 'react'

const BankDetails = () => {
    return (
        <div>
            <section className='bg-slate-100'>
                <div>
                    <div className='bg-white shadow-md shadow-slate-300 border md:m-3 mb-2 h-8 '>
                        <div className='mt-1 m-5'> <span className='text-[#cea666] font-medium'>Home/</span>Bank Details</div>
                    </div>
                    <div className='items-center flex ml-3 gap-x-5 text-center h-16 '>
                        <Link href={"/"} className='bg-white hover:bg-[#cea666] ml-3 hover:text-white rounded-full w-28 h-9  shadow-md shadow-slate-300'>Profile setting</Link>
                        <Link href={"/security"} className='bg-white hover:bg-[#cea666] hover:text-white rounded-full w-28 h-9  shadow-md shadow-slate-300'>Security</Link>
                        <Link href={"/bank"} className='bg-white hover:bg-[#cea666] hover:text-white rounded-full w-28 h-9  shadow-md shadow-slate-300'>Bank Details</Link>
                    </div>
                    {/* 2 section  */}
                    <div className='mt-5 md:flex gap-8 justify-center '>
                        <div className=' md:mt-8  rounded bg-white md:w-[1100px] md:h-[370px]  h-[490px]  shadow-md shadow-black'>
                            <div className=' mt-5 m-9'>
                                <div className='flex justify-center md:flex md:justify-start '>
                                    <h1 className='text-2xl  font-bold mt-1'>Update Bank Details</h1>
                                </div>
                                <div className='md:flex gap-12 mt-6 md:ml-5'>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 mb-2'>Bank Name </label>
                                        <input type='text' className='md:w-[456px] md:h-[50px] w-full  bg-slate-100 px-4 py-2 border focus:outline-[#cea666] rounded-xl' required />
                                    </div>
                                    <div className='mb-4 '>
                                        <label className='block text-gray-700 mb-2'>IBAN or Bank Account </label>
                                        <input type='text' className='md:w-[465px] md:h-[50px] w-full  bg-slate-100 px-4 py-2 border focus:outline-[#cea666] rounded-xl' required />
                                    </div>
                                </div>
                                <div className='md:flex gap-12 mt- md:ml-5'>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 mb-2'>Confirm IBAN or Bank Account </label>
                                        <input type='text' className='md:w-[456px] md:h-[50px] w-full  bg-slate-100 px-4 py-2 border focus:outline-[#cea666] rounded-xl' required />
                                    </div>
                                    <div className='mb-4 '>
                                        <label className='block text-gray-700 mb-2'>BIC or SWIFT </label>
                                        <input type='text' className='md:w-[465px] md:h-[50px] w-full  bg-slate-100 px-4 py-2 border focus:outline-[#cea666] rounded-xl' required />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center md:flex md:justify-end md:mr-20 '>
                                <button className='  bg-[#cea666] text-white rounded-full w-28 h-9 shadow-lg shadow-slate-300'>Update</button>
                            </div>
                        </div>
                    </div>

                    {/* 3 section */}
                    <div className='mt-5 md:flex gap-8 justify-center mb-'>
                        <div className=' md:mt-8 ml-5  bg-slate-100 md:w-[1100px] md:h-[90px]  h-[110px]  '>
                            <h1 className='font-bold text-2xl'>Bank account details</h1>
                            <p className='text-sm'>
                                Here you can find our bank details. Please select the bank that suits you. Please do not forget to enter your user name (Ankit.koffeekodes@gmail.com) as the intended purpose for your payment.
                            </p>
                        </div>
                    </div>

                    {/* 4 section  */}
                    <div className=' md:flex gap-8 mt-5 justify-center mb-16'>
                        <div className='md:flex  md:gap-x-6    bg-slate-100 md:w-[1100px] md:h-[390px]  h-full '>
                            {/* Left side  */}
                            <div className='md:ml-10 md:flex gap-2 justify-center '>
                                <div className=' md:mt-8  rounded bg-white  md:w-[494.9px] md:h-[342px]  h-full  shadow-md shadow-black'>
                                    <h1 className='ml-5 text-2xl font-bold '>EUR (EU Users)</h1>
                                    <p className='ml-5 text-sm mt-14'>
                                        STANDARD IN GOLD E.U.<br />
                                        BIC: TRWIBEB1XXX<br />
                                        IBAN: BE36 9675 1862 2081<br />
                                        Account No: 9600011162635472<br />
                                        Intended purpose: Ankit.koffeekodes@gmail.com<br />
                                    </p>
                                    <p className='mt-11 ml-5 '>
                                        Wise's Address:<br />
                                        Avenue Louise 54<br />
                                        Room S52 Brussels<br />
                                        1050 Belgium<br />
                                    </p>
                                </div>
                            </div>

                            {/* Right side  */}
                            <div className=' md:flex  gap-8 justify-center '>
                                <div className='mt-8 md:mt-8  rounded bg-white  md:w-[494.9px] md:h-[342px]  h-full  shadow-md shadow-black'>
                                    <h1 className='ml-5 text-xl font-bold'>EUR (EU Users)</h1>
                                    <p className='ml-5 text-sm mt-14'>
                                        STANDARD IN GOLD E.U.<br />
                                        BIC: TRWIBEB1XXX<br />
                                        IBAN: BE36 9675 1862 2081<br />
                                        Account No: 9600011162635472<br />
                                        Intended purpose: Ankit.koffeekodes@gmail.com<br />
                                    </p>
                                    <p className='mt-11 ml-5 '>
                                        Wise's Address:<br />
                                        Avenue Louise 54<br />
                                        Room S52 Brussels<br />
                                        1050 Belgium<br />
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default BankDetails