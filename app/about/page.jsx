'use client'
import { skills, experiences  } from '../../constants/index'
import Image from 'next/image'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import Timeline from '../../components/Timeline'
import CTA from '../../components/CTA'
import Link from 'next/link'

const About = () => {

    console.log(experiences)
    return(
       <section className="max-container "> 
            <h1 className="head-text">Hello, Im <span className="blue-gradient_text font-semibold drop-shadow">Miguel</span></h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p> Software Engineer based in Atlanta, Ga. Specializing  in full stack web development.

                </p>
            </div>
            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My Skills</h3>
                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill, index) => {
                        return (
                            <div key={index} className="block-container w-20 h-20">
                                <div className="btn-back rounded-xl" />
                                <div className="btn-front rounded-xl flex justify-center items-center">
                                    <Image className="w-1/2 h-1/2 object-contain" src={skill.imageUrl} alt={skill.name}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="py-16">
                <h3 className="subhead-text">Work Experience</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                    I have worked on all sorts of projects, leveling up my skills and collaborating with bright minds. Here is my timeline:
                    </p>
                </div>
                <Timeline />
            </div>
            <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link href='/contact' className='btn'>
        Contact
      </Link>
    </section>
       </section>
    )
}

export default About