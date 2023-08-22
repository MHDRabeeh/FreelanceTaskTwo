import React from 'react'
import imgOne from '../assets/Headerimg.jpg'
import {TbPointFilled} from 'react-icons/tb'
import Aside from './Aside'

const Header = () => {
    return (
        <div className=' w-[97vw] h-[100vh] mx-auto  grid  grid-cols-6  md:grid-cols-12  '>
            <div className='col-span-5 flex  justify-end '>
                <div className='w-[65%] h-[73%]  flex  flex-col items-end justify-end mt-10'>
                    <div className=' w-[93%]'>
                        <div className='mt-24 md:mt-0'>
                            <p className='text-3xl font-semibold '>Benefits of</p>
                            <p className='text-3xl font-semibold '> Singlet Oxygen</p>
                        </div>
                    </div>
                    <div className=' w-[95%] mt-5'>
                        <div>
                            <img src={imgOne} alt="" />
                        </div>

                    </div>
                </div>

            </div>
            <div className='col-span-1  h-[60%]  flex justify-center items-center'>
                <div class=" h-[200px] min-h-[1em] w-0.5  bg-gradient-to-b from-[#33B6CC]  opacity-100 dark:opacity-50 relative"> <span className='absolute left-[-.66rem] top-[-1rem] text-[#0080A4]'><TbPointFilled size={23}/></span><span className='absolute left-[-.66rem] top-[9rem] text-[#97d3e3]'><TbPointFilled size={23}/></span></div>
            </div>
            <div className='col-span-5  flex justify-start items-center'>

                <Aside/>
            </div>

        </div>
    )
}

export default Header
