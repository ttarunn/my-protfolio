import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import HigherOrderComp from './HigherOrderComp';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, image, tags, source_code, live_link })=> {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.05, 0.75)}>
        <Tilt 
         className='bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full'>
          <div className='relative w-full h-[230px]'>
              <img src={image} alt={name} className='h-full w-full object-cover rounded-2xl'/>              
          </div>
          <div className='mt-5'>
                <h3 className='text-white font-bold text-xl'>{name}</h3>
                <p className='mt-2 text-secondary text-lg'>{description}</p>
          </div>
          <div className='flex mt-4 flex-wrap gap-2'>
            {tags.map(tag=> {
              return <p key={tag.name} className={`text-sm ${tag.color}`}>#{tag.name}</p>
            })}
          </div>
          <div className='flex flex-wrap justify-between mt-5'>
            <button onClick={() => window.open(live_link, "_blank")} className='w-auto bg-green-500 p-2 rounded-lg'>Live Link</button>
            <button onClick={() => window.open(source_code, "_blank")} className='w-auto bg-red-500 p-2 rounded-lg'>Source Code</button>
          </div>
        </Tilt>
      </motion.div>
    )
}
const Works = () => {
  
  return (<>
    <motion.div variants={textVariant()} id='work'>
      <p className={styles.sectionSubText}>My Work</p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
    </motion.div>

    <div className='w-full flex'>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-3 text-secondary text-lg max-w-3xl leading-[30px] text-justify'>
      My portfolio comprises a diverse array of projects that highlight my commitment to crafting user-centric solutions. From optimizing performance to fostering innovation, each project showcases my expertise, dedication to excellence, and a relentless drive to push the boundaries of technology.
      </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-5'>
      {projects.map((project, idx)=> {
        return <ProjectCard key={`project-${idx}`} index={idx} {...project}/>
      })}
    </div>
  </>)
}

export default HigherOrderComp(Works, '')