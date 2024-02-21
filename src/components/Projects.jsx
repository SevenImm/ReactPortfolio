import React from 'react'
import ProjectItem from './ProjectItem'
import GiftPot from '../assets/images/Projectgiftpot.png'
import ScruffyBeards from '../assets/images/projectScruffyBeards.png'


const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempora deserunt impedit tempore nemo? Quaerat quae exercitationem deleniti voluptatem obcaecati quod quam porro, laboriosam quisquam laborum a reprehenderit labore. Adipisci?
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={GiftPot} title='GiftPot'/>
                <ProjectItem img={ScruffyBeards} title='Scruffy Beards'/>
                <ProjectItem img={GiftPot} title='Placeholder'/>
                <ProjectItem img={ScruffyBeards} title='Placeholder'/>
            </div>
        </div>
    )
}

export default Projects