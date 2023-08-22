import React from 'react'
import imgOne from '../assets/mainImgOne.jpg'
import imgTwo from '../assets/mainImgtwo.jpg'
import imgThree from '../assets/mainImgThree.jpg'
import imgFour from '../assets/mainImgFour.jpg'
import imgFive from '../assets/mainImgfive.jpg'

const Main = () => {
  return (
    <div className=' w-full h-auto lg:[98vh] grid gap-3 grid-cols-1 z-30 lg:grid-cols-2'>
 
      <div className='h-[100%] w-[85%]  mx-auto  grid grid-cols-2 gap-2' >
        <div className=' flex justify-center items-center  '>
          <img src={imgOne} className='h-[90%]  w-[100%]' alt="" />
        </div>
        <div className=' flex items-center  '>
          <img src={imgTwo} className='' alt="" />
        </div>
      </div>

      <div className='grid grid-rows-2 gap-2 justify-center'>
        <div className='grid grid-cols-2 gap-1 mx-auto h-72'>
          <div className='h-72'>
            <img src={imgThree} className='h-72 w-[100%]' alt="" />
          </div>
          <div className='h-72'> <img src={imgFour} className='h-72 ' alt="" /></div>
        </div>
        <div className='max-w-[700px] '>
          <img src={imgFive} className=' mx-auto' alt="" />
        </div>

      </div>
    </div>
  )
}

export default Main
