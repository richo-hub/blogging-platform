import React from 'react'
import '../styles/BlogCard.css'
import { useNavigate } from "react-router-dom";

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

            <h1>{singleData.title}</h1>

        </div>
    )
}

export default BlogCard
