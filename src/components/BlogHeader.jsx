import React from 'react'
import videoBg from '../assets/OurBlogVid.mp4'
import './BlogHeader.css'

const BlogHeader = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content text-center pt-36">
            <h1 className='text-7xl font-bold'>OUR BLOG</h1>
            
        </div>
    </div>
  )
}

export default BlogHeader