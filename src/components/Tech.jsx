import React from 'react'
import HigherOrderComp from './HigherOrderComp';
import { technologies } from '../constants';

const TechCard = ({icon, name})=> {
  return <img src={icon} alt={name} className='sm:w-32 sm:h-32 w-20 h-20'/>
}
const Tech = () => {
  return (
    <>
    <h1 className='text-center mb-10 text-3xl font-semibold'>Elevating Excellence with My Tech Stack of Choice ❤️</h1>
    <div className='flex flex-row flex-wrap justify-center gap-10 w-full'>
      
      {technologies.map((tech)=> {
        return <TechCard key={tech.name} icon={tech.icon} name={tech.name}/>
        
      })}
    </div>
    </>
  )
}

export default HigherOrderComp(Tech, 'tech')