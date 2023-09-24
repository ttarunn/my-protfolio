import React from 'react'
import HigherOrderComp from './HigherOrderComp';
import { technologies } from '../constants';

const TechCard = ({icon, name})=> {
  return <img src={icon} alt={name} className='w-32 h-32'/>
}
const Tech = () => {
  return (
    <>
    <h1 className='text-center mb-10 text-4xl font-semibold'>Elevating Excellence with My Tech Stack of Choice ❤️</h1>
    <div className='flex flex-row flex-wrap justify-center gap-10 w-full'>
      
      {technologies.map((tech)=> {
        return <TechCard key={tech.name} icon={tech.icon} name={tech.name}/>
        
      })}
    </div>
    </>
  )
}

export default HigherOrderComp(Tech, 'tech')