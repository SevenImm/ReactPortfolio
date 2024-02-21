import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2024,
        title: 'Texas A&M International University - B.Sc.: Computer Engineering',
        duration: '2024 - Present',
        details: '  '
    },
    {
        year: 2023,
        title: 'Full Stack Web Developer - University of Texas: Austin',
        duration: '8 Months',
        details: '  '
    },
]

const work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem 
                key={idx}
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details}
                />
            ))}
        </div>
    )
}
export default work