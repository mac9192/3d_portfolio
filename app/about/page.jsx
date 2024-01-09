import { skills, experiences  } from '../../constants/index'
import Image from 'next/image'
 

const About = () => {

    return(
       <section className="max-container"> 
            <h1 className="head-text">Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Miguel</span></h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p> Software Engineer based in Atlanta, Ga. Specializing  in full stack web development.

                </p>
            </div>
            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My Skills</h3>
                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill) => {
                        return (
                            <div className="block-container w-20 h-20">
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
                <div className="mt-12 flex">
         
                        {experiences.map((experience) => {
                            return (
                             
                                    <div>
                                        <h3>
                                            {experience.title}
                                        </h3>
                                    </div>
                           
                               
                            )
                        })}
                   
                </div>
            </div>
       </section>
    )
}

export default About