import React from 'react'
import Image from "next/image";

const Headersec = () => {
    return (
        <div className='flex flex-col flex-grow justify-center '>
            <div>
                <div className='max-w-7xl mx-auto px-3'>
                    <div className='flex flex-row flex-wrap -mx-3'>
                        <div className='lg:w-1/2 w-full flex justify-center flex-col'>
                            <h2 className='text-5xl ff-sora font-normal leading-[66px]'>Hello I’am <span className='font-extrabold'> Flora Sheen. Frontend</span> <span className='text-white outline-[3px] p-4 outline-black'>Developer</span> Based In <span className='font-extrabold'>India.</span></h2>
                            <p className='text-base text-[#71717A] pt-5 max-w-[544px]'>I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>

                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <Image src='/assets/images/developer.png' height={630} width={630} />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Headersec