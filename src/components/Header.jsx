import React from 'react'
import '../styles/headers.css'
import { TypeAnimation } from 'react-type-animation'

const Header = () => {
  return (
    <div className=' w-full flex items-center justify-center mt-6 '>
      <div className='header w-full flex items-center justify-center bg-gray-900 rounded-2xl mx-6 '>
        <h1 className='font-bold text-white '>
        <TypeAnimation
          sequence={[
            '"The secret of getting ahead is getting started so Read!"',
            1000,
            '"The secret of getting ahead is getting started so Write!"',
            1000,
            '"The secret of getting ahead is getting started so and"',
            1000,
            '"The secret of getting ahead is getting started so Repeat!"',
            1000,
          ]}
          speed={50}
          style={{ fontSize: '3em' }}
          repeat={Infinity}
        />
        </h1>
        
      </div>
    </div>
  )
}

export default Header
