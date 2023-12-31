import React from 'react'
import videoBg from '../assets/OurBlogVid.mp4'

const BlogHeader = () => {
  return (
    <header className="relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video className="w-full h-full object-cover  " autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 text-white text-center pt-48">
        <h1 className="text-4xl font-bold pb-12 lg:text-7xl">Our Blog</h1>
      </div>
    </header>
  )
}

export default BlogHeader