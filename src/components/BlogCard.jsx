import React from 'react'
import '../styles/BlogCard.css'
import { useNavigate } from "react-router-dom";
import { ChatBubbleOvalLeftIcon, HandThumbUpIcon, ShareIcon } from '@heroicons/react/24/outline'

function BlogCard({ singleData }) {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/blogview/${id}`)
    }

    return (
        <div className='blog-card' key={singleData.id}  onClick={() => handleClick(singleData.id)}>
            <div className='blog-card-img-container'>
                <img alt="Dummy scene" className='blog-card-img' src={singleData.img} />
            </div>
            <div className='title'>
                <h1>{singleData.title}</h1> 
            </div>
            <div className='font-light'>
                Three.js allows the creation of graphical processing unit (GPU)-accelerated 3D animations using the JavaScript language
            </div>
            <div className='flex items-center justify-between bottom-0'>
                <HandThumbUpIcon className='h-6 w-6' />
                <ChatBubbleOvalLeftIcon className='h-6 w-6'/>
                <ShareIcon className='h-6 w-6'/>
            </div>

        </div>
    )
}

export default BlogCard
