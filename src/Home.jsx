import React from 'react'
import './App.css'
import Data from '../mock-data'
import BlogCard from './components/BlogCard'
import Header from './components/Header'


function Home() {
  return (
    <>
      <Header/>
      <div className='home ' >
      {
        Data.map((singleData) => <BlogCard singleData={singleData} />)
      }
      </div>
    </>
  )
}

export default Home