import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white text-[2rem] flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <img src={logo} alt="logo"  className='h-9 w-9 mt-4 mb-4'/>
        <span className='ml-2 text-2xl font-semibold whitespace-nowrap text-white'>Blog Den</span>
      </div>
      <button className='text-xl flex items-center'>
        Copyright
      </button>
    </div>
  )
}

export default Footer
