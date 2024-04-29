import React from 'react'
import { myarray } from '../common/helper'

const Myskills = () => {
    return (
        <div className='max-w-7xl mx-auto px-3 pt-20'>
            <h2 className='text-5xl font-normal text-center'>My <span className='font-extrabold'>Skills</span> </h2>
            <div className='flex flex-wrap gap-12 pt-12'>
                {myarray.map((data, index) => (
                    <div key={index}>
                        <div className='w-[186px] h-[186px] rounded-[4px] border-2 border-black flex justify-center items-center flex-col'>
                            <div>{data.svg}</div>
                            <p className='text-xl font-bold pt-5'>{ data.heading}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Myskills