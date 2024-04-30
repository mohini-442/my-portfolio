import React from 'react'
import Marquee from "react-fast-marquee";

const Myskills = () => {
    return (
        <div className='max-w-7xl mx-auto px-3 pt-20 py-44'>
            <h2 className='text-5xl font-normal text-center'>My <span className='font-extrabold'>Skills</span> </h2>
            {/* <div className='flex flex-wrap gap-12 pt-12'>
                {myarray.map((data, index) => (
                    <div key={index}>
                        <div className='w-[186px] h-[186px] rounded-[4px] border-2 border-black flex justify-center items-center flex-col'>
                            <div>{data.svg}</div>
                            <p className='text-xl font-bold pt-5'>{ data.heading}</p>
                        </div>
                    </div>
                ))}

            </div> */}


            <Marquee>
                <div className='w-[200px]'>
                    <img src="/assets/images/html.png" alt=""  className='w-[120px] h-[120px]'/>
                </div>
                <div className='w-[200px]'>
                    <img src="/assets/images/css.png" alt="" className='w-[100px] h-[100px]' />
                </div>
                <div className='w-[200px]'>
                    <img src="/assets/images/js.png" alt="" className='w-[80px] h-[80px]' />
                </div>
                <div className='w-[200px]'>
                    <img src="/assets/images/tailwindcss.jpg" alt="" className='w-[60px] h-[40px]'/>
                </div>
                <div className='w-[200px]'>
                    <img src="/assets/images/git.png" alt="" className='w-[80px] h-[80px]' />
                </div>
            </Marquee>


        </div>
    )
}

export default Myskills