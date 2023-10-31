import React from 'react'
import wwdvid from '../assets/wwdVid.mp4'

const AboutHeader = () => {
  return (
    <header className="relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video className="w-full h-full object-cover  " autoPlay loop muted>
          <source src={wwdvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 text-white text-center pt-48">
        <h1 className="text-4xl font-bold pb-12">About Us</h1>
      </div>
    </header>
  )
}

export default AboutHeader