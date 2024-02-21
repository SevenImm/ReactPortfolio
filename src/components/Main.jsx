import React, { Component } from 'react'
import backGImage from "../assets/images/backGImage.jpg"
// Import typing animation here
import { TypeAnimation } from 'react-type-animation'
// Import icons here
import { FaXTwitter, FaSquareFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa6'

const Main = () => {
    return (
        <div id='main'>
            {/* Personal image, do not distribute freely */}
            <img className='w-full h-screen object-cover object-left' src={backGImage} alt='Landscape with road and mountains'></img>
            {/* White overlay over image */}
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800' >I am Angel Cardenas</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                        I am a
                        {/* Call the animation script */}
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Web Developer',
                                1000,
                                'Coder',
                                1000,
                                'Digital Media Synthesizer',
                                1000,
                                'Programmer',
                                1000,
                                'Tech Enthusiast',
                                1000,
                                'Dreamer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        {/* <FaXTwitter href='' className='cursor-pointer' size={25}/>
                                <FaSquareFacebook href='' className='cursor-pointer' size={25}/> */}
                        <a href='https://www.instagram.com/nglcrdnsvn/' target='_blank'> <FaInstagram className='cursor-pointer' size={25} /> </a>
                        <a href='https://www.linkedin.com/in/angel-cardenas-152917172/' target='_blank'> <FaLinkedin className='cursor-pointer' size={25} /> </a>
                        <a href='https://github.com/SevenImm' target='_blank'> <FaGithub className='cursor-pointer' size={25} /> </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main