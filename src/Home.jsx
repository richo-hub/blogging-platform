import React from 'react'
import './App.css'
import Data from '../mock-data'
import BlogCard from './components/BlogCard'


function Home() {
  return (
      <div className='home' >
      {
        Data.map((singleData) => <BlogCard singleData={singleData} />)
      }
      </div>
  )
}

export default Home