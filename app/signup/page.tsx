import {Button} from '@nextui-org/button'
import {Input} from '@nextui-org/input'
import React from 'react'

export default function SignIn() {
    return (
        <div className='text-left w-full h-screen justify-center flex flex-col items-center '>
            <div className="h-full flex justify-center  items-center font-[Proxima Nova] w-[500px]">
                <div className='space-y-3'>
                    <div>
                        <h1 className='text-[#505050] font-[700] text-[40px] mb-5'>Sign in</h1>
                        <div className='space-y-1'>
                            <p className='text-[20px] font-[400] text-slate-500'>Welcome to King’s Online Cyber Cafe platform </p>
                            <p className='text-[20px] font-[400] text-slate-500'>Log In as member to experience</p>
                            <div></div>
                        </div>
                        <div className=' mt-10 space-y-7'>
                            <div>
                                <h1 className='font-[700] text-[15px] text-slate-500'>Email</h1>
                                <input type='email' placeholder='bayur453@gmail.com' className='px-2 focus:outline-none rounded-sm bg-zinc-100 text-slate-700 px-2 py-3 w-full' />
                            </div>
                            <div>
                                <h1 className='font-[700] text-[15px] text-slate-500'>Password</h1>
                                <input type='password' placeholder='***********' className='px-2 focus:outline-none rounded-sm bg-zinc-100 text-slate-700  py-2 w-full' />

                            </div>
                        </div>
                        <div className='mt-8'>
                            <span className=' space-x-2' >
                                <input type='checkbox' className='text-red-500' />
                                <span className='text-sm text-slate-500 font-[500]'>Save Password</span>
                            </span>
                        </div>
                    </div>

                    <Button className="w-full py-5 bg-[#FF3737] text-white text-center text-xl font-[700] text-white w-full rounded-md "> Login </Button>

                    <span className='text-sm font-[500]'>
                        Already Have Account?
                        <span className='text-red-500'>
                            <Link href = "/login">Sign in</Link>
                        </span>
                    </span>

                </div >
            </div>
            <div>
                <ul className='w-full flex justify-around '>
                    <li>
                        Copyright King’s Online Cyber Cafe 2024
                    </li>
                    <li>
                        Terms & conditions
                    </li>
                    <li>
                        Privacy Policy
                    </li>
                    <li>
                        Help
                    </li>
                </ul>
            </div>
        </div>

    )
}
